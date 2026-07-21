import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "info@lexora.africa";
const CAREERS_EMAIL = process.env.CAREERS_EMAIL || CONTACT_EMAIL;

const SMTP_HOST = process.env.EMAIL_SERVER_HOST;
const SMTP_PORT = Number(process.env.EMAIL_SERVER_PORT || 587);
const SMTP_USER = process.env.EMAIL_SERVER_USER;
const SMTP_PASS = process.env.EMAIL_SERVER_PASSWORD;
const EMAIL_FROM = process.env.EMAIL_FROM || SMTP_USER;

const FORM_WEBHOOK_URL =
  process.env.INSIGHT_FORM_WEBHOOK_URL ||
  process.env.GOOGLE_APPS_SCRIPT_URL;

function validateEmail(email) {
  return typeof email === "string" && /.+@.+\..+/.test(email);
}

export async function POST(request) {
  try {
    const data = await request.json();

    const {
      name,
      email,
      company,
      category,
      interestType,
      link,
      message,
    } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "Name, email and message are required.",
        },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        {
          error: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    const payload = {
      name,
      email,
      company: company || "N/A",
      category: category || "General Inquiry",
      interestType: interestType || "N/A",
      link: link || "N/A",
      message,
      submittedAt: new Date().toISOString(),
    };

    const hasEmailConfig =
      SMTP_HOST &&
      SMTP_USER &&
      SMTP_PASS &&
      EMAIL_FROM;

    const hasWebhook = Boolean(FORM_WEBHOOK_URL);

    if (!hasEmailConfig && !hasWebhook) {
      return NextResponse.json(
        {
          error:
            "No delivery method configured. Configure SMTP and/or webhook.",
        },
        { status: 500 }
      );
    }

    const subject = `Lexora Insight Submission - ${name}`;

    const text = `
New Insight Submission

Name: ${name}
Email: ${email}
Organisation: ${payload.company}
Category: ${payload.category}
Interest: ${payload.interestType}
Link: ${payload.link}

Message:
${message}
`;

    const html = `
      <div style="font-family:Arial,sans-serif;color:#111;line-height:1.6">
        <h2>New Lexora Insight Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organisation:</strong> ${payload.company}</p>
        <p><strong>Category:</strong> ${payload.category}</p>
        <p><strong>Interest:</strong> ${payload.interestType}</p>
        <p><strong>Reference Link:</strong> ${payload.link}</p>

        <hr />

        <h3>Message</h3>

        <p>${message.replace(/\n/g, "<br/>")}</p>
      </div>
    `;

      // EMAIL
    
    if (hasEmailConfig) {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });

      // Verify SMTP before sending
      await transporter.verify();

      await transporter.sendMail({
        from: `"Lexora Website" <${EMAIL_FROM}>`,
        to: CAREERS_EMAIL,
        replyTo: email,
        subject,
        text,
        html,
      });
    }
   
    // WEBHOOK

    let webhookWarning = null;

    if (hasWebhook) {
      try {
        const response = await fetch(FORM_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          webhookWarning = `Webhook returned ${response.status}`;
          console.error(webhookWarning);
        }
      } catch (err) {
        webhookWarning = err.message;
        console.error("Webhook Error:", err);
      }
    }

    return NextResponse.json(
      {
        message: "Request submitted successfully.",
        ...(webhookWarning && {
          warning:
            "Email was delivered successfully but the webhook could not be reached.",
        }),
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.error("Insight API Error:", err);

    return NextResponse.json(
      {
        error: "Failed to submit your request. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}
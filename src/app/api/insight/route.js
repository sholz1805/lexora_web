import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "info@lexora.africa";
const SMTP_HOST = process.env.EMAIL_SERVER_HOST;
const SMTP_PORT = Number(process.env.EMAIL_SERVER_PORT || 587);
const SMTP_USER = process.env.EMAIL_SERVER_USER;
const SMTP_PASS = process.env.EMAIL_SERVER_PASSWORD;
const EMAIL_FROM = process.env.EMAIL_FROM || "info@lexora.africa";
const FORM_WEBHOOK_URL = process.env.INSIGHT_FORM_WEBHOOK_URL || process.env.GOOGLE_APPS_SCRIPT_URL;

function validateEmail(email) {
  return typeof email === "string" && /.+@.+\..+/.test(email);
}

export async function POST(request) {
  const data = await request.json();
  const { name, email, company, category, interestType, link, message } = data;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!validateEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
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

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const subject = `Lexora insight intake from ${name}`;
  const html = `
    <div style="font-family:Arial, sans-serif; line-height:1.5; color:#111;">
      <h2>New Lexora insight intake</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Organisation:</strong> ${payload.company}</p>
      <p><strong>Category:</strong> ${payload.category}</p>
      <p><strong>Interest:</strong> ${payload.interestType}</p>
      <p><strong>Link:</strong> ${payload.link}</p>
      <p><strong>Message:</strong></p>
      <p>${(message || "").replace(/\n/g, "<br />")}</p>
    </div>
  `;

  try {
    if (SMTP_HOST && SMTP_USER && SMTP_PASS && EMAIL_FROM) {
      await transporter.sendMail({
        from: EMAIL_FROM,
        to: CONTACT_EMAIL,
        replyTo: email,
        subject,
        text: `New Lexora insight intake\n\nName: ${name}\nEmail: ${email}\nOrganisation: ${payload.company}\nCategory: ${payload.category}\nInterest: ${payload.interestType}\nLink: ${payload.link}\n\nMessage:\n${message}`,
        html,
      });
    }

    if (FORM_WEBHOOK_URL) {
      await fetch(FORM_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    }
  } catch (err) {
    console.error("Insight intake submission error:", err?.message || err);
    return NextResponse.json(
      { error: "Failed to submit your request. Please try again later." },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Request received." }, { status: 200 });
}

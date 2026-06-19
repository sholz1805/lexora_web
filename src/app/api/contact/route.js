import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "info@lexora.africa";
const SMTP_HOST = process.env.EMAIL_SERVER_HOST;
const SMTP_PORT = Number(process.env.EMAIL_SERVER_PORT || 587);
const SMTP_USER = process.env.EMAIL_SERVER_USER;
const SMTP_PASS = process.env.EMAIL_SERVER_PASSWORD;
const EMAIL_FROM = process.env.EMAIL_FROM || "info@lexora.africa";

function validateEmail(email) {
  return typeof email === "string" && /.+@.+\..+/.test(email);
}

export async function POST(request) {
  const data = await request.json();
  const { name, company, email, service, message } = data;

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

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !EMAIL_FROM) {
    return NextResponse.json(
      { error: "Email server is not configured. Please add SMTP credentials." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const subject = `Lexora contact inquiry from ${name}`;
  const html = `<div style="font-family:system-ui, sans-serif; line-height:1.5; color:#111;">
    <h2>New contact inquiry from Lexora website</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Company:</strong> ${company || "N/A"}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Service area:</strong> ${service || "N/A"}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br />")}</p>
  </div>`;
  const text = `New contact inquiry from Lexora website\n\nName: ${name}\nCompany: ${company || "N/A"}\nEmail: ${email}\nService area: ${service || "N/A"}\n\nMessage:\n${message}`;

  await transporter.sendMail({
    from: EMAIL_FROM,
    to: CONTACT_EMAIL,
    replyTo: email,
    subject,
    text,
    html,
  });

  return NextResponse.json({ message: "Message sent." }, { status: 200 });
}

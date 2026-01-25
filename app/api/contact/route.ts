import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, message } = await req.json();

    if (!name || !message) {
      return NextResponse.json(
        { ok: false, error: "name/message are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE).toLowerCase() === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const fromName = process.env.MAIL_FROM_NAME || "문의폼";
    const fromAddress = process.env.SMTP_USER;

    const mailTo = process.env.MAIL_TO || fromAddress;
    if (!fromAddress) {
      return NextResponse.json(
        { ok: false, error: "SMTP_USER is not set" },
        { status: 500 }
      );
    }

    await transporter.sendMail({
      from: `${fromName} <${fromAddress}>`,
      to: mailTo,
      subject: `[창업문의] 푸푸토이 창업문의가 도착했습니다`,
      text: [`이름: ${name}`, ``, `내용:`, `${message}`].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "failed to send email" },
      { status: 500 }
    );
  }
}

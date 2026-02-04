import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { 
      name, 
      tel,
      email,
      address,
      appointmentDate,
      business,
      budget,
      store,
      openDate,
      // message, 
    } = await req.json();

    if (!name || !tel) {
      return NextResponse.json(
        { ok: false, error: "name/tel are required" },
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

    // const fromName = process.env.MAIL_FROM_NAME || "푸푸토이 창업 문의";
    const fromName = "푸푸토이 창업 문의";
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
      text: [
        `이름: ${name}`,
        ``,
        `연락처: ${tel}`,
        ``,
        `이메일: ${email}`,
        ``,
        `희망지역: ${address}`,
        ``,
        `상담희망날짜: ${appointmentDate}`,
        ``,
        ``,
        `업종 변경여부: ${business ? business : '미기입'}`,
        ``,
        `예산: ${budget ? budget : '미기입'}`,
        ``, 
        `점포상태: ${store ? store : '미기입'}`,
        ``, 
        `오픈 희망시기: ${openDate ? openDate : '미기입'}`,
        ``, 
        // `내용:`, `${message}`
      ].filter(Boolean).join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "failed to send email" },
      { status: 500 }
    );
  }
}

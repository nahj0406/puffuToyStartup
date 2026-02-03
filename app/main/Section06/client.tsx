'use client'

import { useState } from "react";


export function FormBox() {
   // 날짜선택 캘린더 라이브러리 추가
   // 네이버나 다른 이메일도 가능하도록 .env.local이랑 route.ts에도 수정.
   // 문의전송에 성공하면 문의 전송이 완료되었습니다. 빠른 시일내에 답변드리겠습니다 모달 추가.

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div style={{ maxWidth: 520 }}>
      <h1>문의하기</h1>

      <form onSubmit={onSubmit}>
        <input name="name" placeholder="이름" required />
        <textarea
          name="message"
          placeholder="문의 내용"
          required
          rows={6}
        />
        <button type="submit">보내기</button>
      </form>

      {status === "success" && <p>전송되었습니다.</p>}
      {status === "error" && <p>전송에 실패했습니다.</p>}
    </div>
  );
}
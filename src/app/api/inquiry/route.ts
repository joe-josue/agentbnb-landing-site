import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const resendEndpoint = "https://api.resend.com/emails";
const maxMessageLength = 4000;

type InquiryPayload = {
  email?: unknown;
  message?: unknown;
  company?: unknown;
};

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as InquiryPayload | null;

  const email = cleanText(body?.email, 180).toLowerCase();
  const message = cleanText(body?.message, maxMessageLength);
  const company = cleanText(body?.company, 180);

  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  if (message.length < 20) {
    return NextResponse.json(
      { error: "Add a little more detail about the inquiry." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.INQUIRY_TO_EMAIL;
  const fromEmail = process.env.INQUIRY_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return NextResponse.json(
      { error: "Inquiry email is not configured yet." },
      { status: 503 },
    );
  }

  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
  const ip = clientIp(request);
  const userAgent = request.headers.get("user-agent") ?? "unknown";

  const response = await fetch(resendEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: [email],
      subject: "New AgentBNB implementation inquiry",
      text: [
        "New AgentBNB implementation inquiry",
        "",
        `Email: ${email}`,
        "",
        "Inquiry:",
        message,
        "",
        `IP: ${ip}`,
        `User agent: ${userAgent}`,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.5;color:#1d231c;">
          <h1 style="font-size:20px;margin:0 0 16px;">New AgentBNB implementation inquiry</h1>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <div style="margin-top:18px;padding:16px;border:1px solid #e0d6c8;border-radius:8px;background:#fffaf1;">
            ${safeMessage}
          </div>
          <hr style="margin:22px 0;border:0;border-top:1px solid #e0d6c8;" />
          <p style="font-size:12px;color:#67695e;margin:0;">IP: ${escapeHtml(ip)}</p>
          <p style="font-size:12px;color:#67695e;margin:4px 0 0;">User agent: ${escapeHtml(userAgent)}</p>
        </div>
      `,
      tags: [
        {
          name: "source",
          value: "agentbnb_landing",
        },
      ],
    }),
  });

  if (!response.ok) {
    const details = (await response.json().catch(() => null)) as
      | { message?: string; error?: string }
      | null;

    return NextResponse.json(
      {
        error:
          details?.message ??
          details?.error ??
          "Inquiry email could not be sent.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

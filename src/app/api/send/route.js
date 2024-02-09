import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  const { name, lastName, email, subject, body } = await request.json();
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const text = `Name: ${name}\nLast Name: ${lastName}\nEmail: ${email}\n\n${body}`;

    const { data } = await resend.emails.send({
      from: "contact@joeltaylor.business",
      to: "contact@joeltaylor.business",
      subject: `${subject}`,
      text,
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

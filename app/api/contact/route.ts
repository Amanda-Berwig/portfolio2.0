import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // Use domínio próprio em produção
      to: ["amanda.berwig@gmail.com"],
      subject: `Nova mensagem de ${name}`,
      replyTo: email,
      html: `
        <h2>Nova mensagem do portfólio de Amanda Berwig</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error: "Failed to send email." }, { status: 500 });
  }
}

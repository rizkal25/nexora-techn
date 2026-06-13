import { Resend } from "resend";

// Inisialisasi Resend dengan API Key dari environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: { name: string; email: string; message: string }) {
  const destinationEmail = process.env.CONTACT_EMAIL_DESTINATION || "your_email@example.com";

  try {
    const { data: emailData, error } = await resend.emails.send({
      from: "arvana Portfolio <onboarding@resend.dev>", // Ganti dengan domain Anda jika sudah diverifikasi di Resend
      to: [destinationEmail],
      subject: `Pesan Baru dari Portfolio: ${data.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #2563eb;">Pesan Portfolio Baru</h2>
          <p><strong>Nama:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Pesan:</strong></p>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; color: #334155;">
            ${data.message.replace(/\n/g, "<br>")}
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #64748b;">
            Dikirim melalui Arvana MCB IoT Portfolio Website
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      throw new Error("Gagal mengirim email");
    }

    return emailData;
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
}

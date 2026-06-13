import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SupportTicketData {
  ticketNumber: string;
  name: string;
  email: string;
  category: string;
  priority: string;
  subject: string;
  description: string;
}

const categoryLabels: Record<string, string> = {
  technical: "Masalah Teknis",
  billing: "Billing & Pembayaran",
  integration: "Integrasi",
  hardware: "Hardware / Sensor",
  account: "Akun & Keamanan",
  feature: "Feature Request",
};

const priorityColors: Record<string, string> = {
  low: "#64748b",
  medium: "#3b82f6",
  high: "#f59e0b",
  critical: "#ef4444",
};

export async function sendSupportTicketEmail(data: SupportTicketData) {
  const destinationEmail = process.env.CONTACT_EMAIL_DESTINATION || "support@arvana-iot.com";

  try {
    const { data: emailData, error } = await resend.emails.send({
      from: "Arvana Support <onboarding@resend.dev>",
      to: [destinationEmail],
      reply_to: data.email,
      subject: `[${data.ticketNumber}] ${data.priority.toUpperCase()} - ${data.subject}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">🎫 Support Ticket Baru</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 14px;">
              Ticket ID: <strong>${data.ticketNumber}</strong>
            </p>
          </div>
          
          <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 120px;">Nama</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #3b82f6;">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Kategori</td>
                <td style="padding: 8px 0; color: #0f172a;">${categoryLabels[data.category] || data.category}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Prioritas</td>
                <td style="padding: 8px 0;">
                  <span style="display: inline-block; padding: 4px 10px; background: ${priorityColors[data.priority]}20; color: ${priorityColors[data.priority]}; border-radius: 6px; font-size: 12px; font-weight: 600; text-transform: uppercase;">
                    ${data.priority}
                  </span>
                </td>
              </tr>
            </table>
            
            <div style="margin-top: 16px;">
              <h3 style="color: #0f172a; font-size: 14px; margin: 0 0 8px 0;">Subjek:</h3>
              <p style="color: #0f172a; font-weight: 600; margin: 0;">${data.subject}</p>
            </div>
            
            <div style="margin-top: 16px;">
              <h3 style="color: #0f172a; font-size: 14px; margin: 0 0 8px 0;">Deskripsi:</h3>
              <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; color: #334155; line-height: 1.6; font-size: 14px;">
                ${data.description.replace(/\n/g, "<br>")}
              </div>
            </div>
            
            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 12px; margin: 0;">
                ⏰ SLA Response Time: 
                ${data.priority === "critical" ? "< 5 menit" : 
                  data.priority === "high" ? "< 2 jam" : 
                  data.priority === "medium" ? "< 4 jam" : "< 24 jam"}
              </p>
              <p style="color: #94a3b8; font-size: 11px; margin: 8px 0 0 0;">
                Dikirim melalui Arvana Support System
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      throw new Error("Gagal mengirim email support");
    }

    return emailData;
  } catch (error) {
    console.error("Support email sending failed:", error);
    throw error;
  }
}

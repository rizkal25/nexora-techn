import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Validasi schema
const demoRequestSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  company: z.string().optional(),
  phone: z.string().optional(),
  industry: z.string().optional(),
  deviceCount: z.string().optional(),
  preferredDate: z.string().min(1, "Tanggal harus diisi"),
  preferredTime: z.string().min(1, "Waktu harus diisi"),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    console.log("📅 Menerima request demo scheduling...");
    
    const body = await request.json();
    console.log("📝 Data demo:", body);

    // Validasi
    const validatedData = demoRequestSchema.parse(body);
    console.log("✅ Validasi berhasil");

    // Kirim email notifikasi
    const destinationEmail = process.env.CONTACT_EMAIL_DESTINATION || "rizkaldwip@gmail.com";
    
    const { data: emailData, error } = await resend.emails.send({
      from: "Nexora Demo <onboarding@resend.dev>",
      to: [destinationEmail],
      replyTo: validatedData.email,
      subject: `🎯 Request Demo Baru dari ${validatedData.name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">📅 Request Demo Baru</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 14px;">
              Ada calon klien yang ingin menjadwalkan demo
            </p>
          </div>
          
          <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <h2 style="color: #0f172a; font-size: 16px; margin: 0 0 16px 0;">Informasi Kontak</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 120px;">Nama</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${validatedData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${validatedData.email}" style="color: #3b82f6;">${validatedData.email}</a></td>
              </tr>
              ${validatedData.company ? `
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Perusahaan</td>
                <td style="padding: 8px 0; color: #0f172a;">${validatedData.company}</td>
              </tr>
              ` : ''}
              ${validatedData.phone ? `
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Telepon</td>
                <td style="padding: 8px 0; color: #0f172a;">${validatedData.phone}</td>
              </tr>
              ` : ''}
              ${validatedData.industry ? `
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Industri</td>
                <td style="padding: 8px 0; color: #0f172a;">${validatedData.industry}</td>
              </tr>
              ` : ''}
              ${validatedData.deviceCount ? `
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Jumlah Device</td>
                <td style="padding: 8px 0; color: #0f172a;">${validatedData.deviceCount}</td>
              </tr>
              ` : ''}
            </table>

            <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 16px;">
              <h3 style="color: #0f172a; font-size: 14px; margin: 0 0 8px 0;">📅 Jadwal Preferensi</h3>
              <p style="color: #334155; margin: 0; font-size: 14px;">
                <strong>Tanggal:</strong> ${validatedData.preferredDate}<br>
                <strong>Waktu:</strong> ${validatedData.preferredTime} WIB
              </p>
            </div>

            ${validatedData.message ? `
            <div style="margin-top: 16px;">
              <h3 style="color: #0f172a; font-size: 14px; margin: 0 0 8px 0;">💬 Pesan Tambahan:</h3>
              <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; color: #334155; line-height: 1.6; font-size: 14px;">
                ${validatedData.message.replace(/\n/g, "<br>")}
              </div>
            </div>
            ` : ''}
            
            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 12px; margin: 0;">
                ⏰ Segera hubungi calon klien ini untuk konfirmasi jadwal demo.
              </p>
              <p style="color: #94a3b8; font-size: 11px; margin: 8px 0 0 0;">
                Dikirim melalui Nexora Demo Scheduling System
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      throw new Error("Gagal mengirim email");
    }

    console.log("✅ Email demo request terkirim");

    return NextResponse.json(
      {
        success: true,
        message: "Request demo berhasil dikirim",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ Demo Request Error:", error);

    if (error.name === "ZodError") {
      return NextResponse.json(
        {
          success: false,
          message: "Validasi gagal",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan server",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
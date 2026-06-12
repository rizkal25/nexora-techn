import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { contactFormSchema } from "@/lib/validator";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    console.log("========================================");
    console.log("📥 Menerima request contact form...");
    
    // 1. Parse JSON body
    const body = await request.json();
    console.log("📝 Data diterima:", JSON.stringify(body, null, 2));

    // 2. Validasi data menggunakan Zod
    const validatedData = contactFormSchema.parse(body);
    console.log("✅ Validasi Zod berhasil");

    // 3. Cek environment variables
    console.log("🔑 RESEND_API_KEY ada?", !!process.env.RESEND_API_KEY);
    console.log("📧 CONTACT_EMAIL_DESTINATION:", process.env.CONTACT_EMAIL_DESTINATION);

    // 4. Simpan ke Database (PostgreSQL via Prisma)
    console.log("💾 Menyimpan ke database...");
    const savedMessage = await prisma.contactMessage.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        subject: "Pesan dari Portfolio Website",
        message: validatedData.message,
      },
    });
    console.log("✅ Data tersimpan, ID:", savedMessage.id);

    // 5. Kirim email
    console.log("📧 Mengirim email via Resend...");
    await sendContactEmail({
      name: validatedData.name,
      email: validatedData.email,
      message: validatedData.message,
    });
    console.log("✅ Email berhasil dikirim via Resend");

    console.log("========================================");
    console.log("🎉 SEMUA PROSES BERHASIL!");
    console.log("========================================");

    // 6. Return sukses
    return NextResponse.json(
      { 
        success: true, 
        message: "Pesan berhasil dikirim dan disimpan.",
        data: { id: savedMessage.id }
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.log("========================================");
    console.log("❌ TERJADI ERROR!");
    console.log("========================================");
    
    // Handle Zod Validation Errors
    if (error.name === "ZodError") {
      console.error("❌ ZOD VALIDATION ERROR:");
      console.error(JSON.stringify(error.errors, null, 2));
      return NextResponse.json(
        { 
          success: false, 
          message: "Validasi gagal", 
          errors: error.errors 
        },
        { status: 400 }
      );
    }

    // Handle Prisma Errors
    if (error.code?.startsWith("P")) {
      console.error("❌ PRISMA ERROR CODE:", error.code);
      console.error("❌ PRISMA ERROR MESSAGE:", error.message);
      console.error("❌ PRISMA ERROR META:", error.meta);
    }

    // Handle Resend/Email Errors
    if (error.message?.includes("Resend") || error.message?.includes("email")) {
      console.error("❌ EMAIL/RESEND ERROR:", error.message);
    }

    // Log error lengkap untuk debugging
    console.error("❌ ERROR LENGKAP:", error);
    console.log("========================================");

    return NextResponse.json(
      { 
        success: false, 
        message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
        error: error.message || "Unknown error"
      },
      { status: 500 }
    );
  }
}
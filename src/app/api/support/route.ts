import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { z } from "zod";
import { sendSupportTicketEmail } from "@/lib/support-email";

// Validasi schema
const supportTicketSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter").max(100),
  email: z.string().email("Email tidak valid"),
  category: z.enum(["technical", "billing", "integration", "hardware", "account", "feature"]),
  priority: z.enum(["low", "medium", "high", "critical"]),
  subject: z.string().min(5, "Subjek minimal 5 karakter").max(200),
  description: z.string().min(20, "Deskripsi minimal 20 karakter").max(5000),
});

export async function POST(request: NextRequest) {
  try {
    console.log("🎫 Menerima request support ticket...");
    
    const body = await request.json();
    console.log("📝 Data ticket:", { ...body, description: body.description.substring(0, 50) + "..." });

    // Validasi
    const validatedData = supportTicketSchema.parse(body);
    console.log("✅ Validasi berhasil");

    // Generate ticket number unik (format: NXR-XXXXX)
    const ticketNumber = `NXR-${Math.floor(Math.random() * 90000) + 10000}`;
    console.log("🎫 Ticket number:", ticketNumber);

    // Simpan ke database
    const savedTicket = await prisma.supportTicket.create({
      data: {
        ticketNumber,
        name: validatedData.name,
        email: validatedData.email,
        category: validatedData.category,
        priority: validatedData.priority,
        subject: validatedData.subject,
        description: validatedData.description,
        status: "open",
      },
    });
    console.log("✅ Ticket tersimpan, ID:", savedTicket.id);

    // Kirim email notifikasi
    try {
      await sendSupportTicketEmail({
        ticketNumber,
        ...validatedData,
      });
      console.log("✅ Email notifikasi terkirim");
    } catch (emailError) {
      console.error("⚠️ Email gagal dikirim, tapi ticket tetap tersimpan:", emailError);
      // Jangan throw error, ticket sudah tersimpan
    }

    return NextResponse.json(
      {
        success: true,
        message: "Ticket berhasil dibuat",
        data: {
          id: savedTicket.id,
          ticketNumber: savedTicket.ticketNumber,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("❌ Support Ticket Error:", error);

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

// GET: Ambil daftar ticket (untuk admin - opsional)
export async function GET(request: NextRequest) {
  try {
    const tickets = await prisma.supportTicket.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });

    return NextResponse.json({ success: true, data: tickets }, { status: 200 });
  } catch (error: any) {
    console.error("❌ GET Support Tickets Error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal mengambil data ticket" },
      { status: 500 }
    );
  }
}
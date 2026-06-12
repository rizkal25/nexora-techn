import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Nama harus minimal 2 karakter" }).max(50),
  email: z.string().email({ message: "Format email tidak valid" }),
  message: z.string().min(10, { message: "Pesan harus minimal 10 karakter" }).max(1000),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
import z from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(9, "Phone number must be at least 9 digits"),
  service: z.string().min(1, "Service is required"),
  budget: z.string().min(1, "Budget is required"),
  message: z.string().min(1, "Message is required"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

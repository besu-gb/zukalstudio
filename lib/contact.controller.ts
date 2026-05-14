import mongoose from "mongoose";
import { z } from "zod";
import Contact from "../models/Contact";
import dbConnect from "./mongodb";
import { contactSchema } from "./contact.schema";

export type CreateContactInput = z.infer<typeof contactSchema>;

export type ControllerResponse<T> = {
  success: boolean;
  data?: T;
  message?: string;
};

async function ensureConnected(): Promise<void> {
  if (mongoose.connection.readyState !== 1) {
    await dbConnect();
  }
}

export async function createContact(
  input: CreateContactInput,
): Promise<ControllerResponse<unknown>> {
  // Validate input with Zod
  const validation = contactSchema.safeParse(input);

  if (!validation.success) {
    return {
      success: false,
      message: validation.error.message,
    };
  }

  await ensureConnected();

  const { name, email, phone, service, budget, message } = validation.data;

  const contact = await Contact.create({
    name,
    email,
    phone,
    service,
    budget,
    message,
  });

  return { success: true, data: contact };
}

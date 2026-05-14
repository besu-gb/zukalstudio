import { NextResponse } from "next/server";
import { createContact } from "@/lib/contact.controller";
import { CreateContactInput } from "@/lib/contact.controller";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const input: CreateContactInput = {
      name: body.name,
      email: body.email,
      phone: body.phone.toString(),
      service: body.service,
      budget: body.budget,
      message: body.message,
    };

    const res = await createContact(input);
    return NextResponse.json(res, { status: res.success ? 201 : 400 });
  } catch (error) {
    console.error("Failed to create contact:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create contact" },
      { status: 500 }
    );
  }
}

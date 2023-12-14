"use server";

import { EmailTemplate } from "../components/EmailTemplate";
import { Resend } from "resend";

export const handleSubmit = async (prevState: any, formData: FormData) => {
  if (
    !formData ||
    !formData.get("name") ||
    !formData.get("email") ||
    !formData.get("company") ||
    !formData.get("message")
  ) {
    return { ok: false, message: "Fields cannot be empty" };
  }
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const company = formData.get("company")?.toString();
  const message = formData.get("message")?.toString();
  if (!name || !email || !company || !message) {
    return { ok: false, message: "Fields cannot be empty" };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const data = await resend.emails.send({
    from: "hello.aronhawkins@gmail.com",
    to: "hello.aronhawkins@gmail.com",
    subject: `New Website Form Submission From ${name} – ${company}`,
    text: message,
    react: EmailTemplate({ name, email, company, message }),
  });
  if (data.error) {
    console.log(data.error.message);
    return {
      ok: false,
      message: "Something went wrong while submitting the form",
    };
  }
  if (data.data) {
    return { ok: true, message: "Thanks for reaching out!" };
  }
};

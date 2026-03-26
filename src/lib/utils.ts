import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toTelHref(phone: string) {
  const normalizedPhone = phone.replace(/[^\d+]/g, "");
  return `tel:${normalizedPhone}`;
}

export function toWhatsAppHref(phone: string) {
  const normalizedPhone = phone.replace(/\D/g, "");
  return `https://wa.me/${normalizedPhone}`;
}

type MailtoOptions = {
  subject?: string;
  body?: string;
};

export function toMailtoHref(email: string, options: MailtoOptions = {}) {
  const params = new URLSearchParams();

  if (options.subject) {
    params.set("subject", options.subject);
  }

  if (options.body) {
    params.set("body", options.body);
  }

  const query = params.toString();

  return query ? `mailto:${email}?${query}` : `mailto:${email}`;
}

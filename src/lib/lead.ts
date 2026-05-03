import { inquiryTypeOptions } from "./site-config";

export type LeadInput = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  role?: unknown;
  website?: unknown;
  inquiryType?: unknown;
  message?: unknown;
  websiteCompany?: unknown;
};

export type LeadData = {
  name: string;
  email: string;
  company: string;
  role: string;
  website: string;
  inquiryType: string;
  message: string;
  websiteCompany: string;
};

export type LeadValidationResult =
  | { ok: true; data: LeadData }
  | { ok: false; errors: Partial<Record<keyof LeadData, string>> };

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeWebsite(value: string) {
  if (!value) {
    return "";
  }

  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;

  try {
    return new URL(withProtocol).toString().replace(/\/$/, "");
  } catch {
    return value;
  }
}

export function formDataToLeadInput(formData: FormData): LeadInput {
  const input: LeadInput = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    role: formData.get("role"),
    website: formData.get("website"),
    inquiryType: formData.get("inquiryType"),
    message: formData.get("message"),
  };

  const websiteCompany = formData.get("websiteCompany");

  if (websiteCompany !== null) {
    input.websiteCompany = websiteCompany;
  }

  return input;
}

export function validateLeadInput(input: LeadInput): LeadValidationResult {
  const data: LeadData = {
    name: clean(input.name),
    email: clean(input.email),
    company: clean(input.company),
    role: clean(input.role),
    website: normalizeWebsite(clean(input.website)),
    inquiryType: clean(input.inquiryType),
    message: clean(input.message),
    websiteCompany: clean(input.websiteCompany),
  };

  const errors: Partial<Record<keyof LeadData, string>> = {};

  if (data.websiteCompany) {
    errors.websiteCompany = "Please submit the form directly.";
  }

  if (data.name.length < 2) {
    errors.name = "Please add your name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please add a valid email address.";
  }

  if (data.company.length > 140) {
    errors.company = "Please keep the company name under 140 characters.";
  }

  if (data.role.length > 100) {
    errors.role = "Please keep the role under 100 characters.";
  }

  if (data.website) {
    try {
      new URL(data.website);
    } catch {
      errors.website = "Please add a valid website URL.";
    }
  }

  if (
    !inquiryTypeOptions.includes(
      data.inquiryType as (typeof inquiryTypeOptions)[number],
    )
  ) {
    errors.inquiryType = "Please choose the inquiry type that best fits.";
  }

  if (data.message.length < 20) {
    errors.message = "Please add a little more context.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, data };
}

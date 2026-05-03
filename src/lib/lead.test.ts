import { describe, expect, it } from "vitest";
import { formDataToLeadInput, validateLeadInput } from "./lead";

describe("validateLeadInput", () => {
  it("accepts a complete Digital Energy Holdings inquiry", () => {
    const result = validateLeadInput({
      name: "Jordan Scott",
      email: "owner@example.com",
      company: "Digital Energy Holdings",
      website: "digitalenergyholdings.com",
      inquiryType: "Digital asset inquiry",
      role: "Founder",
      message:
        "I want to discuss how Digital Energy Holdings can support AI automation and digital asset infrastructure.",
    });

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.website).toBe("https://digitalenergyholdings.com");
      expect(result.data.inquiryType).toBe("Digital asset inquiry");
    }
  });

  it("rejects missing required fields and malformed email", () => {
    const result = validateLeadInput({
      name: "",
      email: "not-an-email",
      inquiryType: "",
      message: "too short",
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errors.name).toBeTruthy();
      expect(result.errors.email).toBeTruthy();
      expect(result.errors.inquiryType).toBeTruthy();
      expect(result.errors.message).toBeTruthy();
    }
  });

  it("extracts the inquiry fields from FormData", () => {
    const formData = new FormData();
    formData.set("name", "Alex Banker");
    formData.set("email", "alex@example.com");
    formData.set("company", "Regional Bank");
    formData.set("role", "Commercial Banking");
    formData.set("website", "https://example.com");
    formData.set("inquiryType", "Banking or credit inquiry");
    formData.set("message", "We need more context about the DEH operating structure.");

    expect(formDataToLeadInput(formData)).toEqual({
      name: "Alex Banker",
      email: "alex@example.com",
      company: "Regional Bank",
      role: "Commercial Banking",
      website: "https://example.com",
      inquiryType: "Banking or credit inquiry",
      message: "We need more context about the DEH operating structure.",
    });
  });
});

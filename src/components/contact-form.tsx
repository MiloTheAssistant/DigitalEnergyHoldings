"use client";

import { useActionState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { submitLeadInquiry, type LeadFormState } from "@/app/actions";
import { inquiryTypeOptions, siteConfig } from "@/lib/site-config";

const initialState: LeadFormState = { status: "idle" };

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="mt-2 text-sm text-amber-200">{message}</p>;
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitLeadInquiry,
    initialState,
  );

  return (
    <form action={formAction} className="grid gap-4">
      <input
        aria-hidden="true"
        className="hidden"
        name="websiteCompany"
        tabIndex={-1}
        type="text"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-300">
          Name
          <input
            className="h-12 rounded border border-white/10 bg-white/[0.04] px-4 text-base text-white outline-none transition focus:border-[#d6b25e]"
            name="name"
            required
          />
          <FieldError message={state.errors?.name} />
        </label>
        <label className="grid gap-2 text-sm text-slate-300">
          Email
          <input
            className="h-12 rounded border border-white/10 bg-white/[0.04] px-4 text-base text-white outline-none transition focus:border-[#d6b25e]"
            name="email"
            required
            type="email"
          />
          <FieldError message={state.errors?.email} />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-300">
          Company
          <input
            className="h-12 rounded border border-white/10 bg-white/[0.04] px-4 text-base text-white outline-none transition focus:border-[#d6b25e]"
            name="company"
          />
          <FieldError message={state.errors?.company} />
        </label>
        <label className="grid gap-2 text-sm text-slate-300">
          Role
          <input
            className="h-12 rounded border border-white/10 bg-white/[0.04] px-4 text-base text-white outline-none transition focus:border-[#d6b25e]"
            name="role"
          />
          <FieldError message={state.errors?.role} />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-slate-300">
        Website
        <input
          className="h-12 rounded border border-white/10 bg-white/[0.04] px-4 text-base text-white outline-none transition focus:border-[#d6b25e]"
          name="website"
          placeholder="https://"
          type="text"
        />
        <FieldError message={state.errors?.website} />
      </label>
      <label className="grid gap-2 text-sm text-slate-300">
        Inquiry type
        <select
          className="h-12 rounded border border-white/10 bg-[#090d14] px-4 text-base text-white outline-none transition focus:border-[#d6b25e]"
          name="inquiryType"
          required
        >
          <option value="">Choose an inquiry type</option>
          {inquiryTypeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <FieldError message={state.errors?.inquiryType} />
      </label>
      <label className="grid gap-2 text-sm text-slate-300">
        Message
        <textarea
          className="min-h-36 rounded border border-white/10 bg-white/[0.04] px-4 py-3 text-base text-white outline-none transition focus:border-[#d6b25e]"
          name="message"
          required
        />
        <FieldError message={state.errors?.message} />
      </label>
      <p className="text-sm leading-6 text-slate-400">
        Please do not send tax records, banking details, wallet details,
        passwords, custody information, or other confidential information
        through this form.
      </p>
      {state.status === "error" && state.message ? (
        <div className="rounded border border-amber-300/30 bg-amber-300/10 p-4 text-sm text-amber-100">
          {state.message}
        </div>
      ) : null}
      <button
        className="inline-flex h-12 items-center justify-center gap-2 rounded bg-[#d6b25e] px-5 text-sm font-semibold text-[#08090d] transition hover:bg-[#f1d27f] disabled:cursor-not-allowed disabled:opacity-70"
        disabled={pending}
        type="submit"
      >
        {pending ? <Loader2 className="size-4 animate-spin" /> : null}
        Send inquiry
        {!pending ? <ArrowRight className="size-4" /> : null}
      </button>
      <p className="text-sm text-slate-400">
        Direct contact:{" "}
        <a className="text-slate-100" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>{" "}
        or{" "}
        <a className="text-slate-100" href="tel:+15735000064">
          {siteConfig.phone}
        </a>
      </p>
    </form>
  );
}

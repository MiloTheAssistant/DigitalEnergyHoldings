import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thanks for contacting Digital Energy Holdings.",
};

export default function ThankYouPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#050608] px-4 text-white sm:px-6 lg:px-8">
      <section className="max-w-2xl border border-white/10 bg-[#090d14] p-8 text-center">
        <p className="text-sm font-semibold text-[#f3d687]">Inquiry received</p>
        <h1 className="mt-4 text-4xl font-semibold">Thanks for contacting Digital Energy Holdings.</h1>
        <p className="mt-5 leading-7 text-slate-300">
          Your inquiry has been sent through the official company channel. The
          next step is a direct follow-up when the request has been reviewed.
        </p>
        <Link
          className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded bg-[#d6b25e] px-5 text-sm font-semibold text-[#08090d] transition hover:bg-[#f1d27f]"
          href="/"
        >
          Return home
          <ArrowRight className="size-4" />
        </Link>
      </section>
    </main>
  );
}

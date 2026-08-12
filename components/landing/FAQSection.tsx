"use client"

import React, { useState } from "react"
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: "What exactly does SmileGuide AI do for a dental office?",
      a: "SmileGuide AI acts as an intelligent virtual receptionist. It greets website visitors, answers questions about services, pricing, and insurance, triages patient dental emergencies, and schedules appointments directly into your practice schedule 24/7.",
    },
    {
      q: "How does appointment booking integrate with existing dental software?",
      a: "SmileGuide AI connects securely with major dental Practice Management Systems (PMS) such as Dentrix, EagleSoft, and Open Dental. It reads real-time chair and provider availability and posts confirmed appointments directly into your schedule.",
    },
    {
      q: "How does after-hours support work?",
      a: "When your office closes for the evening or weekend, SmileGuide AI stays online 365 days a year. Late-night visitors searching for emergency care or routine cleanings can get immediate answers and secure an appointment before looking elsewhere.",
    },
    {
      q: "What happens if a patient asks a complex clinical or billing question?",
      a: "SmileGuide AI includes intelligent human handoff logic. If a patient asks for complex medical advice, specific surgical guidance, or custom insurance dispute details, the AI politely collects their contact info and routes the notification directly to your office staff.",
    },
    {
      q: "Does SmileGuide AI replace our front-desk receptionists?",
      a: "No. SmileGuide AI is designed to support and empower your front-desk staff, not replace them. By automating repetitive routine calls and late-night inquiries, your team can focus on delivering high-touch, in-person patient care.",
    },
    {
      q: "Is this a live dental office or a demonstration showcase?",
      a: "This website is a modern startup product demonstration for SmileGuide AI. Practice profiles like 'BrightSmiles Dental' are sample environments illustrating the real-time AI conversation and booking workflow.",
    },
  ]

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section
      id="faq"
      className="border-t border-slate-200/80 bg-slate-50/70 py-20 md:py-32 dark:border-slate-800 dark:bg-slate-950/40"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold tracking-wider text-sky-700 uppercase dark:border-sky-800 dark:bg-sky-950/60 dark:text-sky-300">
            <HelpCircle className="h-3.5 w-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Got questions? We've got answers.
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg dark:text-slate-300">
            Learn how SmileGuide AI fits seamlessly into your practice workflow.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all dark:border-slate-800 dark:bg-slate-900"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900 sm:text-lg dark:text-white">
                    {faq.q}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform ${
                      isOpen
                        ? "rotate-180 bg-sky-600 text-white"
                        : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="animate-in border-t border-slate-100 px-6 pt-4 pb-6 text-sm leading-relaxed text-slate-600 duration-200 fade-in sm:text-base dark:border-slate-800/60 dark:text-slate-300">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

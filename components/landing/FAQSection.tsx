"use client"

import React, { useState } from "react"
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: "What exactly does SmileGuide AI do for a dental office?",
      a: "SmileGuide AI acts as an intelligent virtual receptionist. It greets website visitors, answers questions about services, pricing, and insurance, triages patient dental emergencies, and schedules appointments directly into your practice schedule 24/7."
    },
    {
      q: "How does appointment booking integrate with existing dental software?",
      a: "SmileGuide AI connects securely with major dental Practice Management Systems (PMS) such as Dentrix, EagleSoft, and Open Dental. It reads real-time chair and provider availability and posts confirmed appointments directly into your schedule."
    },
    {
      q: "How does after-hours support work?",
      a: "When your office closes for the evening or weekend, SmileGuide AI stays online 365 days a year. Late-night visitors searching for emergency care or routine cleanings can get immediate answers and secure an appointment before looking elsewhere."
    },
    {
      q: "What happens if a patient asks a complex clinical or billing question?",
      a: "SmileGuide AI includes intelligent human handoff logic. If a patient asks for complex medical advice, specific surgical guidance, or custom insurance dispute details, the AI politely collects their contact info and routes the notification directly to your office staff."
    },
    {
      q: "Does SmileGuide AI replace our front-desk receptionists?",
      a: "No. SmileGuide AI is designed to support and empower your front-desk staff, not replace them. By automating repetitive routine calls and late-night inquiries, your team can focus on delivering high-touch, in-person patient care."
    },
    {
      q: "Is this a live dental office or a demonstration showcase?",
      a: "This website is a modern startup product demonstration for SmileGuide AI. Practice profiles like 'BrightSmile Dental' are sample environments illustrating the real-time AI conversation and booking workflow."
    }
  ]

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-20 md:py-32 bg-slate-50/70 dark:bg-slate-950/40 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Got questions? We've got answers.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
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
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen
                        ? "bg-sky-600 text-white rotate-180"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4 animate-in fade-in duration-200">
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

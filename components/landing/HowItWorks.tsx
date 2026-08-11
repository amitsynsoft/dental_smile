"use client"

import React from "react"
import { MessageSquarePlus, Brain, CalendarCheck, CheckCircle2, ArrowRight } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: MessageSquarePlus,
      title: "Patient Starts Conversation",
      description:
        "Whether visiting your website at 10 PM or tapping a mobile link, patients initiate a natural text or voice conversation.",
      badge: "Step 1 • Touchpoint"
    },
    {
      number: "02",
      icon: Brain,
      title: "AI Triage & NLU",
      description:
        "SmileGuide AI identifies chief complaints (pain, cleaning, cosmetic, emergency), verifies insurance compatibility, and answers policy questions.",
      badge: "Step 2 • Intelligence"
    },
    {
      number: "03",
      icon: CalendarCheck,
      title: "Real-Time Slot Match",
      description:
        "The AI queries your practice schedule in real time to match patient preferences with available chair slots.",
      badge: "Step 3 • Scheduling"
    },
    {
      number: "04",
      icon: CheckCircle2,
      title: "Instant Booking & Sync",
      description:
        "The appointment is booked instantly into your PMS, sending automated calendar invites and digital intake forms to the patient.",
      badge: "Step 4 • Confirmation"
    }
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background relative overflow-hidden">
      
      {/* Background Grid Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
            How SmileGuide AI works for your practice
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 font-normal">
            From first patient query to confirmed chair appointment in under 60 seconds.
          </p>
        </div>

        {/* 4-Step Diagram Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {steps.map((step, idx) => {
            const IconComponent = step.icon
            return (
              <div
                key={idx}
                className="relative rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Badge & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-600 to-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-sky-600/20 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-200 dark:text-slate-800">
                      {step.number}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 block mb-2">
                    {step.badge}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs font-semibold text-sky-600 dark:text-sky-400">
                  <span>Automated Workflow</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-auto group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}

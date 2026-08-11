"use client"

import React from "react"
import { Clock, Zap, PhoneOff, Users, HeartHandshake, ShieldCheck } from "lucide-react"

export function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: "24/7 Patient Availability",
      description:
        "Never close your digital doors. Patients can ask questions and book appointments whether it's 2 AM on Sunday or a busy holiday."
    },
    {
      icon: Zap,
      title: "Instant Response Times",
      description:
        "Eliminate waiting on hold. Patients get immediate answers regarding insurance, services, pricing, and appointment availability."
    },
    {
      icon: PhoneOff,
      title: "Fewer Repetitive Calls",
      description:
        "Frees up your front desk staff from answering routine daily inquiries so they can focus on in-person patient hospitality."
    },
    {
      icon: Users,
      title: "More Efficient Front Desk",
      description:
        "Reduces phone fatigue and burnout among receptionist teams while streamlining daily check-ins and intake paperwork."
    },
    {
      icon: HeartHandshake,
      title: "Elevated Patient Experience",
      description:
        "Modern patients prefer fast, frictionless digital communication over voicemail tag. Build long-term patient loyalty."
    },
    {
      icon: ShieldCheck,
      title: "Full Operational Control",
      description:
        "Customize AI rules, emergency escalation protocols, approved insurance providers, and scheduling window preferences."
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-slate-50/60 dark:bg-slate-950/30 border-y border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Value For Practice Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
            Measurable advantages for your practice and team
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 font-normal">
            Improve practice productivity, capture every booking inquiry, and deliver premium care experiences.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, index) => {
            const IconComp = b.icon
            return (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 flex items-center justify-center mb-5">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {b.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

"use client"

import React from "react"
import { PhoneOff, MessageCircleWarning, CalendarX, Moon, AlertTriangle, ArrowRight } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: PhoneOff,
      title: "30%+ Missed Patient Calls",
      description:
        "Front-desk staff get overwhelmed during morning check-ins and phone rushes. Unanswered calls often mean lost high-value patients to competing practices.",
      badge: "High Lost Revenue",
      color: "from-rose-500/10 to-red-500/5 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900/50"
    },
    {
      icon: MessageCircleWarning,
      title: "Repetitive Daily Inquiries",
      description:
        "Hours are wasted answering the same routine questions: 'Do you take Delta Dental?', 'How much is a whitening consultation?', and 'Where do I park?'",
      badge: "Staff Time Drain",
      color: "from-amber-500/10 to-orange-500/5 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/50"
    },
    {
      icon: CalendarX,
      title: "Frustrating Phone Tag",
      description:
        "Patients calling to book or reschedule often hit voicemail. Back-and-forth phone tag leads to empty chair slots and scheduling friction.",
      badge: "Scheduling Friction",
      color: "from-orange-500/10 to-amber-500/5 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-900/50"
    },
    {
      icon: Moon,
      title: "No Support After 5 PM",
      description:
        "Patients research dentists after work and over weekends. When nobody answers after hours, patients instantly move on to the next practice online.",
      badge: "After-Hours Leakage",
      color: "from-purple-500/10 to-indigo-500/5 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900/50"
    }
  ]

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <AlertTriangle className="w-3.5 h-3.5" /> Front Desk Reality
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Traditional dental front desks are under constant pressure.
          </h2>
          <p className="mt-4 text-lg text-slate-300 font-normal leading-relaxed">
            Managing phone calls, checking in arriving patients, verifying insurance, and scheduling appointments simultaneously creates bottlenecks and missed practice growth.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob, idx) => {
            const IconComp = prob.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${prob.color} border`}>
                      {prob.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {prob.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {prob.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-500">
                  <span>Issue #{idx + 1}</span>
                  <span className="text-rose-400 font-medium">Impacts Growth</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA teaser */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-sky-950/80 to-slate-950/80 border border-sky-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-white">Ready to automate your patient front desk?</h4>
            <p className="text-sm text-slate-300">SmileGuide AI handles patient inquiries instantly while your team focuses on in-office care.</p>
          </div>
          <a
            href="#solution"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm transition-colors shadow-lg shadow-sky-500/20"
          >
            See The Solution <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  )
}

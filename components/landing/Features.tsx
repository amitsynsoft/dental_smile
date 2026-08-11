"use client"

import React from "react"
import {
  MessageSquare,
  CalendarCheck2,
  RefreshCw,
  UserPlus,
  Clock8,
  UserCheck,
  Check,
  ArrowUpRight
} from "lucide-react"

export function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: "Answer Patient Questions",
      description:
        "Instant, accurate answers regarding office hours, location, parking, pricing, pre-appointment preparation, and insurance PPO coverage.",
      highlights: ["Custom Knowledge Base", "Insurance Triage", "Procedure Info"],
      color: "from-sky-500/10 to-blue-500/5 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-800"
    },
    {
      icon: CalendarCheck2,
      title: "Book Appointments Direct",
      description:
        "Checks dentist & hygienist schedules in real time and reserves appropriate time slots directly in your PMS calendar.",
      highlights: ["Real-Time Slot Sync", "Preventative & Emergency", "Multi-Chair Support"],
      color: "from-teal-500/10 to-emerald-500/5 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-800"
    },
    {
      icon: RefreshCw,
      title: "Reschedule & Cancel",
      description:
        "Allows verified patients to conveniently modify or reschedule their appointment without clogging up phone lines.",
      highlights: ["Self-Service Portal", "Automated Slot Re-fill", "Cancellation Alerts"],
      color: "from-indigo-500/10 to-purple-500/5 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800"
    },
    {
      icon: UserPlus,
      title: "Capture New Patients",
      description:
        "Collects essential patient details, contact numbers, primary complaint, and insurance information before they leave the page.",
      highlights: ["Paperless Digital Intake", "Lead Qualification", "Instant SMS Links"],
      color: "from-blue-500/10 to-sky-500/5 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800"
    },
    {
      icon: Clock8,
      title: "24/7 Availability",
      description:
        "Operates 365 days a year, late nights, weekends, and holidays so you never miss a patient searching outside office hours.",
      highlights: ["Zero Hold Times", "Weekend Coverage", "Instant Response"],
      color: "from-amber-500/10 to-orange-500/5 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800"
    },
    {
      icon: UserCheck,
      title: "Seamless Human Handoff",
      description:
        "Intelligently escalates complex clinical issues, urgent emergencies, or custom billing inquiries directly to front-desk staff.",
      highlights: ["Emergency Escalation", "Staff Notification", "Full Conversation Context"],
      color: "from-emerald-500/10 to-teal-500/5 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800"
    }
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-slate-50/70 dark:bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Engineered For Dental Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
            Everything your dental practice needs to automate patient intake.
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 font-normal">
            Designed specifically for general dentists, orthodontists, oral surgeons, and multi-location practices.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, index) => {
            const IconComponent = feat.icon
            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-sky-400 dark:hover:border-sky-600 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-sky-50 dark:bg-sky-950/80 border border-sky-100 dark:border-sky-800/80 text-sky-600 dark:text-sky-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col gap-2">
                  {feat.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

"use client"

import React, { useState } from "react"
import {
  Sparkles,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Clock,
  User,
  Bot,
  HelpCircle,
  FileCheck,
  Stethoscope,
  ChevronRight,
  PhoneCall,
} from "lucide-react"

export function SolutionSection() {
  const [activeTab, setActiveTab] = useState(0)

  const scenarios = [
    {
      id: "insurance",
      tabTitle: "1. Insurance Verification",
      icon: ShieldCheck,
      badge: "Instant Coverage Lookup",
      patientMessage:
        "Hi, do you accept MetLife Dental insurance for regular cleanings and fillings?",
      aiReply:
        "Yes! BrightSmiles Dental is an in-network PPO provider for MetLife Dental. Preventive cleanings and check-up exams are covered at 100% with no copay under most plans.",
      actionDetails: {
        label: "Insurance Pre-Check Verified",
        data: "MetLife PPO • 100% Preventive Coverage",
      },
    },
    {
      id: "service",
      tabTitle: "2. Dental Service Triage",
      icon: Stethoscope,
      badge: "Clinical Triage & Pricing",
      patientMessage:
        "How much does clear aligner consultation cost and how long does it usually take?",
      aiReply:
        "Our initial Invisalign & Clear Aligner consultation is completely free of charge! Dr. Johnson includes a 3D digital smile scan. Most treatment plans take 6 to 14 months.",
      actionDetails: {
        label: "Consultation Offer",
        data: "Free 3D Scan + Smile Simulation ($250 Value)",
      },
    },
    {
      id: "scheduling",
      tabTitle: "3. Direct Appointment Booking",
      icon: Calendar,
      badge: "Live PMS Schedule Match",
      patientMessage:
        "I need to book a hygiene cleaning for next Wednesday afternoon.",
      aiReply:
        "I found 3 open hygiene slots next Wednesday with our lead hygienist, Amanda. Which time works best for you?",
      availableSlots: ["Wed 1:30 PM", "Wed 3:00 PM", "Wed 4:15 PM"],
      actionDetails: {
        label: "Live PMS Integration",
        data: "Synced with Dentrix / EagleSoft Schedule",
      },
    },
    {
      id: "confirmation",
      tabTitle: "4. Automated Confirmation",
      icon: FileCheck,
      badge: "Calendar & SMS Sync",
      patientMessage:
        "3:00 PM on Wednesday works great! My name is Mark Davis.",
      aiReply:
        "Perfect, Mark! You're booked for Wednesday at 3:00 PM at BrightSmiles Dental. I've sent a digital calendar invite and SMS confirmation link to your phone.",
      confirmationBox: {
        title: "Confirmed: Hygiene Cleaning & Exam",
        time: "Wednesday, Aug 19 @ 3:00 PM",
        patient: "Mark Davis • New Patient",
        sms: "SMS Sent to (555) 382-9102",
      },
      actionDetails: {
        label: "Automated Intake",
        data: "Calendar Invite & Paperless Form Sent",
      },
    },
  ]

  const current = scenarios[activeTab]

  return (
    <section
      id="solution"
      className="relative overflow-hidden bg-background py-20 md:py-32"
    >
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl dark:bg-sky-900/15" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-sky-700 uppercase dark:border-sky-800 dark:bg-sky-950/60 dark:text-sky-300">
            <Sparkles className="h-3.5 w-3.5" /> Intelligent Dental Solution
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Meet the AI receptionist that never misses a conversation.
          </h2>
          <p className="mt-4 text-lg leading-relaxed font-normal text-slate-600 dark:text-slate-300">
            SmileGuide AI communicates naturally with patients, understands
            clinical dental intent, verifies insurance compatibility, and locks
            in appointments 24/7.
          </p>
        </div>

        {/* Interactive Scenario Display */}
        <div className="grid overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 text-white shadow-2xl lg:grid-cols-12">
          {/* Left Column: Tab Controls */}
          <div className="flex flex-col justify-between border-r border-slate-800 bg-slate-950/90 p-6 lg:col-span-4">
            <div>
              <div className="mb-4 flex items-center gap-1.5 text-xs font-bold tracking-wider text-sky-400 uppercase">
                <PhoneCall className="h-4 w-4" /> Real Dental Conversations
              </div>
              <div className="flex flex-col gap-2">
                {scenarios.map((sc, index) => {
                  const IconComponent = sc.icon
                  const isActive = index === activeTab
                  return (
                    <button
                      key={sc.id}
                      onClick={() => setActiveTab(index)}
                      className={`group flex w-full items-center justify-between rounded-2xl p-4 text-left transition-all duration-200 ${
                        isActive
                          ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                          : "border border-slate-800/60 bg-slate-900/60 text-slate-300 hover:bg-slate-800/80"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-slate-800 text-sky-400"
                          }`}
                        >
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-semibold">
                          {sc.tabTitle}
                        </span>
                      </div>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${
                          isActive
                            ? "translate-x-1 text-white"
                            : "text-slate-500 group-hover:text-slate-300"
                        }`}
                      />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Bottom Info Pill */}
            <div className="mt-8 flex items-center gap-2 border-t border-slate-800/80 pt-6 text-xs text-slate-400">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
              <span>
                Learns your practice policies, dentist availability & insurance
                PPO list.
              </span>
            </div>
          </div>

          {/* Right Column: Chat Showcase Window */}
          <div className="flex min-h-[460px] flex-col justify-between bg-slate-900 p-6 sm:p-8 lg:col-span-8">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 to-teal-400 font-bold text-white shadow-xs">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold text-white">
                    SmileGuide Virtual Assistant
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                      Live Response
                    </span>
                  </h4>
                  <p className="text-xs text-slate-400">
                    BrightSmiles Dental Reception • 24/7 Virtual Channel
                  </p>
                </div>
              </div>

              <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-400">
                {current.badge}
              </span>
            </div>

            {/* Conversation Flow */}
            <div className="flex flex-col gap-4 py-6">
              {/* Patient Message */}
              <div className="flex items-start justify-end gap-3">
                <div className="max-w-[85%] rounded-2xl rounded-tr-xs bg-sky-600 p-4 text-sm text-white shadow-md">
                  <div className="mb-1 text-[11px] font-semibold text-sky-200">
                    Patient Question
                  </div>
                  <p className="leading-relaxed">{current.patientMessage}</p>
                </div>
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-700 text-white">
                  <User className="h-4 w-4" />
                </div>
              </div>

              {/* AI Assistant Reply */}
              <div className="flex items-start justify-start gap-3">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white shadow-xs">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="max-w-[85%] rounded-2xl rounded-tl-xs border border-slate-700/80 bg-slate-800 p-4 text-sm text-slate-100 shadow-md">
                  <div className="mb-1 flex items-center justify-between text-[11px] font-semibold text-sky-400">
                    <span>SmileGuide AI Triage</span>
                    <span className="text-[10px] text-slate-400">
                      Response time: 0.8s
                    </span>
                  </div>
                  <p className="leading-relaxed">{current.aiReply}</p>

                  {/* Optional Slot Selector if available */}
                  {current.availableSlots && (
                    <div className="mt-4 border-t border-slate-700/80 pt-3">
                      <span className="mb-2 block text-xs font-semibold text-slate-400">
                        Selected Available Slots:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {current.availableSlots.map((slot, sIdx) => (
                          <span
                            key={sIdx}
                            className="rounded-xl border border-sky-500/40 bg-sky-500/20 px-3 py-1.5 text-xs font-bold text-sky-300"
                          >
                            {slot}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Optional Confirmation Box */}
                  {current.confirmationBox && (
                    <div className="mt-4 space-y-1 rounded-xl border border-emerald-500/40 bg-emerald-950/60 p-3.5 text-xs text-emerald-200">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                        <CheckCircle2 className="h-4 w-4" />
                        {current.confirmationBox.title}
                      </div>
                      <div>{current.confirmationBox.time}</div>
                      <div className="text-slate-300">
                        {current.confirmationBox.patient}
                      </div>
                      <div className="pt-1 font-mono text-[10px] text-emerald-400/80">
                        {current.confirmationBox.sms}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="flex items-center justify-between border-t border-slate-800 pt-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">
                  {current.actionDetails.label}:
                </span>
                <span className="text-slate-300">
                  {current.actionDetails.data}
                </span>
              </div>
              <span className="cursor-pointer text-[11px] text-sky-400 hover:underline">
                Switch tabs to view more features &rarr;
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

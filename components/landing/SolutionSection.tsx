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
  PhoneCall
} from "lucide-react"

export function SolutionSection() {
  const [activeTab, setActiveTab] = useState(0)

  const scenarios = [
    {
      id: "insurance",
      tabTitle: "1. Insurance Verification",
      icon: ShieldCheck,
      badge: "Instant Coverage Lookup",
      patientMessage: "Hi, do you accept MetLife Dental insurance for regular cleanings and fillings?",
      aiReply:
        "Yes! BrightSmile Dental is an in-network PPO provider for MetLife Dental. Preventive cleanings and check-up exams are covered at 100% with no copay under most plans.",
      actionDetails: {
        label: "Insurance Pre-Check Verified",
        data: "MetLife PPO • 100% Preventive Coverage"
      }
    },
    {
      id: "service",
      tabTitle: "2. Dental Service Triage",
      icon: Stethoscope,
      badge: "Clinical Triage & Pricing",
      patientMessage: "How much does clear aligner consultation cost and how long does it usually take?",
      aiReply:
        "Our initial Invisalign & Clear Aligner consultation is completely free of charge! Dr. Johnson includes a 3D digital smile scan. Most treatment plans take 6 to 14 months.",
      actionDetails: {
        label: "Consultation Offer",
        data: "Free 3D Scan + Smile Simulation ($250 Value)"
      }
    },
    {
      id: "scheduling",
      tabTitle: "3. Direct Appointment Booking",
      icon: Calendar,
      badge: "Live PMS Schedule Match",
      patientMessage: "I need to book a hygiene cleaning for next Wednesday afternoon.",
      aiReply:
        "I found 3 open hygiene slots next Wednesday with our lead hygienist, Amanda. Which time works best for you?",
      availableSlots: ["Wed 1:30 PM", "Wed 3:00 PM", "Wed 4:15 PM"],
      actionDetails: {
        label: "Live PMS Integration",
        data: "Synced with Dentrix / EagleSoft Schedule"
      }
    },
    {
      id: "confirmation",
      tabTitle: "4. Automated Confirmation",
      icon: FileCheck,
      badge: "Calendar & SMS Sync",
      patientMessage: "3:00 PM on Wednesday works great! My name is Mark Davis.",
      aiReply:
        "Perfect, Mark! You're booked for Wednesday at 3:00 PM at BrightSmile Dental. I've sent a digital calendar invite and SMS confirmation link to your phone.",
      confirmationBox: {
        title: "Confirmed: Hygiene Cleaning & Exam",
        time: "Wednesday, Aug 19 @ 3:00 PM",
        patient: "Mark Davis • New Patient",
        sms: "SMS Sent to (555) 382-9102"
      },
      actionDetails: {
        label: "Automated Intake",
        data: "Calendar Invite & Paperless Form Sent"
      }
    }
  ]

  const current = scenarios[activeTab]

  return (
    <section id="solution" className="py-20 md:py-32 bg-background relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-400/10 dark:bg-sky-900/15 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Intelligent Dental Solution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Meet the AI receptionist that never misses a conversation.
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            SmileGuide AI communicates naturally with patients, understands clinical dental intent, verifies insurance compatibility, and locks in appointments 24/7.
          </p>
        </div>

        {/* Interactive Scenario Display */}
        <div className="rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl overflow-hidden grid lg:grid-cols-12">
          
          {/* Left Column: Tab Controls */}
          <div className="lg:col-span-4 p-6 bg-slate-950/90 border-r border-slate-800 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-4 flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4" /> Real Dental Conversations
              </div>
              <div className="flex flex-col gap-2">
                {scenarios.map((sc, index) => {
                  const IconComponent = sc.icon
                  const isActive = index === activeTab
                  return (
                    <button
                      key={sc.id}
                      onClick={() => setActiveTab(index)}
                      className={`w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-center justify-between group ${
                        isActive
                          ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                          : "bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 border border-slate-800/60"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                            isActive ? "bg-white/20 text-white" : "bg-slate-800 text-sky-400"
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="font-semibold text-sm">{sc.tabTitle}</span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isActive ? "translate-x-1 text-white" : "text-slate-500 group-hover:text-slate-300"
                        }`}
                      />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Bottom Info Pill */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 text-xs text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Learns your practice policies, dentist availability & insurance PPO list.</span>
            </div>
          </div>

          {/* Right Column: Chat Showcase Window */}
          <div className="lg:col-span-8 p-6 sm:p-8 bg-slate-900 flex flex-col justify-between min-h-[460px]">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-500 to-teal-400 flex items-center justify-center font-bold text-white shadow-xs">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white flex items-center gap-2">
                    SmileGuide Virtual Assistant
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                      Live Response
                    </span>
                  </h4>
                  <p className="text-xs text-slate-400">BrightSmile Dental Reception • 24/7 Virtual Channel</p>
                </div>
              </div>

              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30">
                {current.badge}
              </span>
            </div>

            {/* Conversation Flow */}
            <div className="py-6 flex flex-col gap-4">
              
              {/* Patient Message */}
              <div className="flex items-start justify-end gap-3">
                <div className="bg-sky-600 text-white rounded-2xl rounded-tr-xs p-4 max-w-[85%] text-sm shadow-md">
                  <div className="text-[11px] font-semibold text-sky-200 mb-1">Patient Question</div>
                  <p className="leading-relaxed">{current.patientMessage}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-700 text-white flex items-center justify-center shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              </div>

              {/* AI Assistant Reply */}
              <div className="flex items-start justify-start gap-3">
                <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0 mt-1 shadow-xs">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-slate-800 border border-slate-700/80 text-slate-100 rounded-2xl rounded-tl-xs p-4 max-w-[85%] text-sm shadow-md">
                  <div className="text-[11px] font-semibold text-sky-400 mb-1 flex items-center justify-between">
                    <span>SmileGuide AI Triage</span>
                    <span className="text-[10px] text-slate-400">Response time: 0.8s</span>
                  </div>
                  <p className="leading-relaxed">{current.aiReply}</p>

                  {/* Optional Slot Selector if available */}
                  {current.availableSlots && (
                    <div className="mt-4 pt-3 border-t border-slate-700/80">
                      <span className="text-xs font-semibold text-slate-400 block mb-2">Selected Available Slots:</span>
                      <div className="flex flex-wrap gap-2">
                        {current.availableSlots.map((slot, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-3 py-1.5 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-500/40 text-xs font-bold"
                          >
                            {slot}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Optional Confirmation Box */}
                  {current.confirmationBox && (
                    <div className="mt-4 p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs space-y-1">
                      <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        {current.confirmationBox.title}
                      </div>
                      <div>{current.confirmationBox.time}</div>
                      <div className="text-slate-300">{current.confirmationBox.patient}</div>
                      <div className="text-[10px] text-emerald-400/80 pt-1 font-mono">{current.confirmationBox.sms}</div>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Action Footer */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">{current.actionDetails.label}:</span>
                <span className="text-slate-300">{current.actionDetails.data}</span>
              </div>
              <span className="text-sky-400 text-[11px] hover:underline cursor-pointer">
                Switch tabs to view more features &rarr;
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

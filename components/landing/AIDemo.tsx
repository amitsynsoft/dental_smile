"use client"

import React, { useState } from "react"
import {
  Sparkles,
  Bot,
  User,
  Calendar,
  Clock,
  CheckCircle2,
  PhoneCall,
  MapPin,
  RefreshCw,
  Send,
  Zap,
  ShieldCheck,
  Stethoscope,
  Smile,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface AppointmentSlot {
  day: string
  time: string
  date: string
}

export function AIDemo() {
  const [selectedComplaint, setSelectedComplaint] = useState<string | null>(
    "Cleaning & Exam"
  )
  const [selectedSlot, setSelectedSlot] = useState<AppointmentSlot | null>(null)
  const [patientName, setPatientName] = useState("")
  const [patientPhone, setPatientPhone] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const complaintOptions = [
    {
      id: "Cleaning & Exam",
      icon: Smile,
      label: "Cleaning & Check-Up",
      aiPrompt:
        "I'd like to book a routine dental cleaning and comprehensive check-up exam.",
      aiReply:
        "Great! Preventive care keeps your smile healthy. Dr. Jennifer Smith  has opening slots available this week at BrightSmiles Dental. Please select a time that fits your schedule:",
    },
    {
      id: "Tooth Pain",
      icon: AlertCircle,
      label: "Tooth Pain (Emergency)",
      aiPrompt:
        "I have sharp tooth pain when chewing and I need an urgent doctor evaluation.",
      aiReply:
        "I'm sorry you're experiencing pain. Emergency triage is our top priority! We've held priority openings today and tomorrow with Dr. Jennifer Smith . Select a time below:",
    },
    {
      id: "New Patient",
      icon: Stethoscope,
      label: "New Patient Registration",
      aiPrompt:
        "I'm a new patient in town looking for a primary dentist and comprehensive consultation.",
      aiReply:
        "Welcome to BrightSmiles Dental! We're excited to meet you. New patient visits include full digital X-rays and consultation with Dr. Johnson. Choose an available slot:",
    },
    {
      id: "Cosmetic Consultation",
      icon: Sparkles,
      label: "Cosmetic & Whitening",
      aiPrompt:
        "I want to ask about teeth whitening, veneers, or clear aligners for a brighter smile.",
      aiReply:
        "Wonderful! Dr. Johnson offers complimentary 3D smile simulations for cosmetic consultations. Here are our next available consultation slots:",
    },
  ]

  const availableSlots: AppointmentSlot[] = [
    { day: "Tuesday", time: "2:00 PM", date: "Aug 18" },
    { day: "Wednesday", time: "11:30 AM", date: "Aug 19" },
    { day: "Thursday", time: "3:30 PM", date: "Aug 20" },
    { day: "Friday", time: "10:00 AM", date: "Aug 21" },
  ]

  const currentOption =
    complaintOptions.find((c) => c.id === selectedComplaint) ||
    complaintOptions[0]

  const handleSelectSlot = (slot: AppointmentSlot) => {
    setSelectedSlot(slot)
  }

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedSlot) return
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setSelectedComplaint("Cleaning & Exam")
    setSelectedSlot(null)
    setPatientName("")
    setPatientPhone("")
    setIsSubmitted(false)
  }

  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-slate-900 py-20 text-white md:py-32"
    >
      {/* Glow Effects */}
      <div className="pointer-events-none absolute top-0 right-1/4 h-[400px] w-[600px] rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[600px] rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-sky-400 uppercase">
            <Sparkles className="h-3.5 w-3.5" /> Interactive Practice Showcase
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Talk to SmileGuide AI
          </h2>
          <p className="mt-4 text-lg font-normal text-slate-300">
            Experience how patients interact with your virtual receptionist.
            Select a scenario below to test the appointment booking flow.
          </p>
        </div>

        {/* Showcase Console Container */}
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl lg:grid-cols-12">
          {/* Left Panel: Practice Profile & Scenario Buttons */}
          <div className="flex flex-col justify-between border-r border-slate-800 bg-slate-900/90 p-6 lg:col-span-5">
            <div>
              {/* Practice Header */}
              <div className="mb-6 rounded-2xl border border-slate-700/80 bg-slate-800/80 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 to-teal-400 text-lg font-extrabold text-white">
                    BS
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      BrightSmiles Dental
                    </h3>
                    <p className="text-xs font-medium text-sky-400">
                      Dr. Jennifer Smith , DDS
                    </p>
                    <span className="mt-0.5 flex items-center gap-1 text-[11px] text-slate-400">
                      <MapPin className="h-3 w-3 text-slate-500" /> 450 Medical
                      Plaza • Suite 400
                    </span>
                  </div>
                </div>
              </div>

              {/* Scenario Picker Label */}
              <label className="mb-3 block text-xs font-bold tracking-wider text-slate-400 uppercase">
                1. Select Patient Inquiry Scenario:
              </label>

              {/* Complaint Options */}
              <div className="grid grid-cols-1 gap-2.5">
                {complaintOptions.map((opt) => {
                  const IconComp = opt.icon
                  const isSelected = selectedComplaint === opt.id
                  return (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setSelectedComplaint(opt.id)
                        setSelectedSlot(null)
                        setIsSubmitted(false)
                      }}
                      className={`group flex w-full items-center justify-between rounded-xl border p-3.5 text-left transition-all ${
                        isSelected
                          ? "border-sky-500 bg-sky-600 text-white shadow-md shadow-sky-600/30"
                          : "border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800/80"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                            isSelected
                              ? "bg-white/20 text-white"
                              : "bg-slate-800 text-sky-400"
                          }`}
                        >
                          <IconComp className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-semibold">
                          {opt.label}
                        </span>
                      </div>
                      <span
                        className={`text-xs ${isSelected ? "text-sky-100" : "text-slate-500"}`}
                      >
                        Select
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Note */}
            <div className="mt-8 flex items-center gap-2 border-t border-slate-800 pt-4 text-xs text-slate-400">
              <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-400" />
              <span>
                Simulated demo mode. ElevenLabs voice & chat widget can be
                attached directly.
              </span>
            </div>
          </div>

          {/* Right Panel: Simulated Live AI Reception Chat */}
          <div className="flex min-h-[500px] flex-col justify-between bg-slate-950 p-6 sm:p-8 lg:col-span-7">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 font-bold text-white">
                    <Bot className="h-4 w-4" />
                  </div>
                  <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full border-2 border-slate-950 bg-emerald-500" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    SmileGuide Virtual Receptionist
                  </div>
                  <div className="text-xs font-medium text-emerald-400">
                    BrightSmile AI • Active
                  </div>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-400 transition-colors hover:text-white"
              >
                <RefreshCw className="h-3 w-3" /> Reset Demo
              </button>
            </div>

            {/* Content Body */}
            {!isSubmitted ? (
              <div className="my-auto flex flex-col gap-5 py-6">
                {/* User Prompt Message */}
                <div className="flex justify-end gap-3">
                  <div className="max-w-[85%] rounded-2xl rounded-tr-xs bg-sky-600 p-4 text-sm text-white shadow-md">
                    <div className="mb-1 text-[10px] font-bold tracking-wider text-sky-200 uppercase">
                      Patient Message
                    </div>
                    <p className="leading-relaxed">{currentOption.aiPrompt}</p>
                  </div>
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-300">
                    <User className="h-4 w-4" />
                  </div>
                </div>

                {/* AI Assistant Reply */}
                <div className="flex justify-start gap-3">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white shadow-xs">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="max-w-[90%] rounded-2xl rounded-tl-xs border border-slate-800 bg-slate-900 p-4 text-sm text-slate-100 shadow-md">
                    <div className="mb-1 text-[10px] font-bold tracking-wider text-sky-400 uppercase">
                      SmileGuide AI • BrightSmiles Dental
                    </div>
                    <p className="mb-4 leading-relaxed">
                      {currentOption.aiReply}
                    </p>

                    {/* Available Time Slots */}
                    <div className="space-y-2">
                      <span className="block text-xs font-bold text-slate-400">
                        2. Select Available Slot for Dr. Jennifer Smith , DDS:
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {availableSlots.map((slot, sIdx) => {
                          const isSelected =
                            selectedSlot?.day === slot.day &&
                            selectedSlot?.time === slot.time
                          return (
                            <button
                              key={sIdx}
                              onClick={() => handleSelectSlot(slot)}
                              className={`rounded-xl border p-3 text-left transition-all ${
                                isSelected
                                  ? "border-sky-400 bg-sky-500/20 text-white shadow-xs"
                                  : "border-slate-800 bg-slate-950 text-slate-300 hover:bg-slate-800/60"
                              }`}
                            >
                              <div className="text-xs font-bold text-sky-400">
                                {slot.day} • {slot.time}
                              </div>
                              <div className="text-[11px] text-slate-400">
                                {slot.date} • Dr. Johnson
                              </div>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Patient Details Form if Slot Selected */}
                    {selectedSlot && (
                      <form
                        onSubmit={handleConfirmBooking}
                        className="mt-4 animate-in space-y-3 border-t border-slate-800 pt-4 duration-300 fade-in"
                      >
                        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                          <CheckCircle2 className="h-4 w-4" />
                          Selected: {selectedSlot.day} at {selectedSlot.time} (
                          {selectedSlot.date})
                        </div>

                        <div className="grid gap-2 sm:grid-cols-2">
                          <input
                            type="text"
                            placeholder="Your Full Name"
                            required
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                            className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
                          />
                          <input
                            type="tel"
                            placeholder="Phone Number (for SMS)"
                            required
                            value={patientPhone}
                            onChange={(e) => setPatientPhone(e.target.value)}
                            className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full rounded-xl bg-sky-500 py-2.5 text-xs font-bold text-white shadow-md hover:bg-sky-400"
                        >
                          Confirm Appointment Booking &rarr;
                        </Button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* Confirmation Receipt State */
              <div className="my-auto animate-in space-y-4 rounded-3xl border border-emerald-500/30 bg-slate-900 px-4 py-8 text-center duration-300 zoom-in-95">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="h-8 w-8" />
                </div>

                <div>
                  <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
                    Booking Confirmed!
                  </span>
                  <h3 className="mt-1 text-2xl font-bold text-white">
                    See you on {selectedSlot?.day}, {selectedSlot?.date}!
                  </h3>
                  <p className="mt-1 text-sm text-slate-300">
                    Your appointment with{" "}
                    <strong className="text-white">
                      Dr. Jennifer Smith , DDS
                    </strong>{" "}
                    for{" "}
                    <span className="font-semibold text-sky-400">
                      {selectedComplaint}
                    </span>{" "}
                    has been locked into BrightSmiles Dental schedule.
                  </p>
                </div>

                <div className="mx-auto max-w-md space-y-1.5 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-left text-xs text-slate-300">
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">Patient:</span>
                    <span className="font-semibold text-white">
                      {patientName || "Jane Doe"}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">Phone:</span>
                    <span className="font-semibold text-white">
                      {patientPhone || "(555) 019-2831"}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">Time & Date:</span>
                    <span className="font-semibold text-sky-400">
                      {selectedSlot?.day} @ {selectedSlot?.time}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Location:</span>
                    <span className="font-semibold text-white">
                      BrightSmiles Dental • Suite 400
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row">
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="rounded-xl border-slate-700 text-xs text-slate-300 hover:bg-slate-800"
                  >
                    Test Another Scenario
                  </Button>
                </div>
              </div>
            )}

            {/* Bottom Status bar */}
            <div className="flex items-center justify-between border-t border-slate-800 pt-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                Live Demo Environment
              </span>
              <span>BrightSmiles Dental Practice #1042</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

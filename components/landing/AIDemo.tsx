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
  AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface AppointmentSlot {
  day: string
  time: string
  date: string
}

export function AIDemo() {
  const [selectedComplaint, setSelectedComplaint] = useState<string | null>("Cleaning & Exam")
  const [selectedSlot, setSelectedSlot] = useState<AppointmentSlot | null>(null)
  const [patientName, setPatientName] = useState("")
  const [patientPhone, setPatientPhone] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const complaintOptions = [
    {
      id: "Cleaning & Exam",
      icon: Smile,
      label: "Cleaning & Check-Up",
      aiPrompt: "I'd like to book a routine dental cleaning and comprehensive check-up exam.",
      aiReply: "Great! Preventive care keeps your smile healthy. Dr. Sarah Johnson has opening slots available this week at BrightSmile Dental. Please select a time that fits your schedule:"
    },
    {
      id: "Tooth Pain",
      icon: AlertCircle,
      label: "Tooth Pain (Emergency)",
      aiPrompt: "I have sharp tooth pain when chewing and I need an urgent doctor evaluation.",
      aiReply: "I'm sorry you're experiencing pain. Emergency triage is our top priority! We've held priority openings today and tomorrow with Dr. Sarah Johnson. Select a time below:"
    },
    {
      id: "New Patient",
      icon: Stethoscope,
      label: "New Patient Registration",
      aiPrompt: "I'm a new patient in town looking for a primary dentist and comprehensive consultation.",
      aiReply: "Welcome to BrightSmile Dental! We're excited to meet you. New patient visits include full digital X-rays and consultation with Dr. Johnson. Choose an available slot:"
    },
    {
      id: "Cosmetic Consultation",
      icon: Sparkles,
      label: "Cosmetic & Whitening",
      aiPrompt: "I want to ask about teeth whitening, veneers, or clear aligners for a brighter smile.",
      aiReply: "Wonderful! Dr. Johnson offers complimentary 3D smile simulations for cosmetic consultations. Here are our next available consultation slots:"
    }
  ]

  const availableSlots: AppointmentSlot[] = [
    { day: "Tuesday", time: "2:00 PM", date: "Aug 18" },
    { day: "Wednesday", time: "11:30 AM", date: "Aug 19" },
    { day: "Thursday", time: "3:30 PM", date: "Aug 20" },
    { day: "Friday", time: "10:00 AM", date: "Aug 21" }
  ]

  const currentOption = complaintOptions.find((c) => c.id === selectedComplaint) || complaintOptions[0]

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
    <section id="demo" className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-sky-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-teal-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Practice Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Talk to SmileGuide AI
          </h2>
          <p className="mt-4 text-lg text-slate-300 font-normal">
            Experience how patients interact with your virtual receptionist. Select a scenario below to test the appointment booking flow.
          </p>
        </div>

        {/* Showcase Console Container */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden grid lg:grid-cols-12">
          
          {/* Left Panel: Practice Profile & Scenario Buttons */}
          <div className="lg:col-span-5 p-6 bg-slate-900/90 border-r border-slate-800 flex flex-col justify-between">
            <div>
              {/* Practice Header */}
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-teal-400 flex items-center justify-center font-extrabold text-white text-lg">
                    BS
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white">BrightSmile Dental</h3>
                    <p className="text-xs text-sky-400 font-medium">Dr. Sarah Johnson, DDS</p>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-500" /> 450 Medical Plaza • Suite 400
                    </span>
                  </div>
                </div>
              </div>

              {/* Scenario Picker Label */}
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
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
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between group ${
                        isSelected
                          ? "bg-sky-600 border-sky-500 text-white shadow-md shadow-sky-600/30"
                          : "bg-slate-900 hover:bg-slate-800/80 border-slate-800 text-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            isSelected ? "bg-white/20 text-white" : "bg-slate-800 text-sky-400"
                          }`}
                        >
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className="font-semibold text-sm">{opt.label}</span>
                      </div>
                      <span className={`text-xs ${isSelected ? "text-sky-100" : "text-slate-500"}`}>
                        Select
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Note */}
            <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Simulated demo mode. ElevenLabs voice & chat widget can be attached directly.</span>
            </div>
          </div>

          {/* Right Panel: Simulated Live AI Reception Chat */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-slate-950 flex flex-col justify-between min-h-[500px]">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold">
                    <Bot className="w-4 h-4" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-slate-950" />
                </div>
                <div>
                  <div className="font-bold text-sm text-white">SmileGuide Virtual Receptionist</div>
                  <div className="text-xs text-emerald-400 font-medium">BrightSmile AI • Active</div>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 transition-colors"
              >
                <RefreshCw className="w-3 h-3" /> Reset Demo
              </button>
            </div>

            {/* Content Body */}
            {!isSubmitted ? (
              <div className="py-6 flex flex-col gap-5 my-auto">
                
                {/* User Prompt Message */}
                <div className="flex justify-end gap-3">
                  <div className="bg-sky-600 text-white rounded-2xl rounded-tr-xs p-4 max-w-[85%] text-sm shadow-md">
                    <div className="text-[10px] font-bold text-sky-200 uppercase tracking-wider mb-1">
                      Patient Message
                    </div>
                    <p className="leading-relaxed">{currentOption.aiPrompt}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                </div>

                {/* AI Assistant Reply */}
                <div className="flex justify-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0 mt-1 shadow-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-slate-900 border border-slate-800 text-slate-100 rounded-2xl rounded-tl-xs p-4 max-w-[90%] text-sm shadow-md">
                    <div className="text-[10px] font-bold text-sky-400 uppercase tracking-wider mb-1">
                      SmileGuide AI • BrightSmile Dental
                    </div>
                    <p className="leading-relaxed mb-4">{currentOption.aiReply}</p>

                    {/* Available Time Slots */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-slate-400 block">
                        2. Select Available Slot for Dr. Sarah Johnson, DDS:
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {availableSlots.map((slot, sIdx) => {
                          const isSelected = selectedSlot?.day === slot.day && selectedSlot?.time === slot.time
                          return (
                            <button
                              key={sIdx}
                              onClick={() => handleSelectSlot(slot)}
                              className={`p-3 rounded-xl border text-left transition-all ${
                                isSelected
                                  ? "bg-sky-500/20 border-sky-400 text-white shadow-xs"
                                  : "bg-slate-950 hover:bg-slate-800/60 border-slate-800 text-slate-300"
                              }`}
                            >
                              <div className="font-bold text-xs text-sky-400">{slot.day} • {slot.time}</div>
                              <div className="text-[11px] text-slate-400">{slot.date} • Dr. Johnson</div>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Patient Details Form if Slot Selected */}
                    {selectedSlot && (
                      <form onSubmit={handleConfirmBooking} className="mt-4 pt-4 border-t border-slate-800 space-y-3 animate-in fade-in duration-300">
                        <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          Selected: {selectedSlot.day} at {selectedSlot.time} ({selectedSlot.date})
                        </div>

                        <div className="grid sm:grid-cols-2 gap-2">
                          <input
                            type="text"
                            placeholder="Your Full Name"
                            required
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                            className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                          />
                          <input
                            type="tel"
                            placeholder="Phone Number (for SMS)"
                            required
                            value={patientPhone}
                            onChange={(e) => setPatientPhone(e.target.value)}
                            className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs py-2.5 rounded-xl shadow-md"
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
              <div className="py-8 px-4 my-auto bg-slate-900 border border-emerald-500/30 rounded-3xl text-center space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                    Booking Confirmed!
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    See you on {selectedSlot?.day}, {selectedSlot?.date}!
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    Your appointment with <strong className="text-white">Dr. Sarah Johnson, DDS</strong> for <span className="text-sky-400 font-semibold">{selectedComplaint}</span> has been locked into BrightSmile Dental schedule.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left text-xs text-slate-300 space-y-1.5 max-w-md mx-auto">
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">Patient:</span>
                    <span className="font-semibold text-white">{patientName || "Jane Doe"}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">Phone:</span>
                    <span className="font-semibold text-white">{patientPhone || "(555) 019-2831"}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">Time & Date:</span>
                    <span className="font-semibold text-sky-400">{selectedSlot?.day} @ {selectedSlot?.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Location:</span>
                    <span className="font-semibold text-white">BrightSmile Dental • Suite 400</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="border-slate-700 text-slate-300 hover:bg-slate-800 text-xs rounded-xl"
                  >
                    Test Another Scenario
                  </Button>
                </div>
              </div>
            )}

            {/* Bottom Status bar */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Demo Environment
              </span>
              <span>BrightSmile Dental Practice #1042</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

"use client"

import React from "react"
import {
  ArrowRight,
  Play,
  Clock,
  Zap,
  Calendar,
  MessageSquare,
  CalendarCheck,
  UserCheck,
  ShieldCheck,
  PhoneCall,
  Users,
  BarChart3,
  Sparkles,
  CheckCircle2
} from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-gradient-to-b from-sky-50/60 via-slate-50/40 to-background">
      
      {/* Soft Ambient Background Lighting */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full pointer-events-none opacity-30 bg-no-repeat bg-right-top bg-cover" style={{ backgroundImage: "url('/reception.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-sky-50 via-sky-50/90 to-transparent" />
      </div>

      <div className="absolute top-12 left-1/3 w-[500px] h-[300px] bg-blue-400/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Hero Layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 flex flex-col text-left pr-0 lg:pr-4">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 w-fit mb-5 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
              </span>
              <span className="text-[11px] font-bold text-blue-700 tracking-wider uppercase">
                AI RECEPTIONIST FOR DENTAL PRACTICES
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
              Your dental receptionist.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500">
                Powered by AI.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              SmileGuide AI answers patient questions, triages emergencies, and books appointments 24/7 — so your team can focus on care.
            </p>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-full px-7 py-3.5 text-sm shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore AI Features
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-800 font-semibold rounded-full px-6 py-3.5 text-sm shadow-xs hover:bg-slate-50 transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                See How It Works
              </a>
            </div>

            {/* 3 Compact Micro Pills */}
            <div className="mt-8 pt-5 border-t border-slate-200/70 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>24/7 Answering</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Instant Responses</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Direct PMS Sync</span>
              </div>
            </div>

          </div>

          {/* Right Column: Ultra-Sleek Compact Glassmorphism Card */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Ambient Backlight */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-500/15 to-teal-400/15 rounded-3xl blur-xl opacity-80" />

            {/* Compact Glass Card */}
            <div className="relative w-full max-w-sm bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl rounded-3xl p-5 sm:p-6 text-left">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    AI
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-slate-900">AI handles the conversation</h3>
                    <p className="text-[11px] text-slate-500">You <strong className="text-blue-600 font-semibold">focus on care</strong></p>
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* 4 Compact Capability Items */}
              <div className="grid grid-cols-1 gap-2.5">
                
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-blue-100/80 text-blue-600 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </div>
                  <div className="leading-none">
                    <div className="text-xs font-bold text-slate-900">Answers patient questions</div>
                    <div className="text-[10px] text-slate-500 mt-1">Insurance, services, hours & pricing</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-purple-100/80 text-purple-600 flex items-center justify-center shrink-0">
                    <CalendarCheck className="w-3.5 h-3.5" />
                  </div>
                  <div className="leading-none">
                    <div className="text-xs font-bold text-slate-900">Checks PMS availability</div>
                    <div className="text-[10px] text-slate-500 mt-1">Real-time schedule match</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-indigo-100/80 text-indigo-600 flex items-center justify-center shrink-0">
                    <UserCheck className="w-3.5 h-3.5" />
                  </div>
                  <div className="leading-none">
                    <div className="text-xs font-bold text-slate-900">Books appointments</div>
                    <div className="text-[10px] text-slate-500 mt-1">Confirms details & sends intake</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-teal-100/80 text-teal-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div className="leading-none">
                    <div className="text-xs font-bold text-slate-900">Escalates when needed</div>
                    <div className="text-[10px] text-slate-500 mt-1">Seamless handoff to staff</div>
                  </div>
                </div>

              </div>

              {/* Status Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="font-bold text-emerald-600 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  AI Receptionist Online
                </span>
                <span className="text-slate-400 font-medium">BrightSmile AI</span>
              </div>

            </div>
          </div>

        </div>

        {/* Compact Left-Aligned Benefit Ribbon */}
        <div className="mt-8 p-3 sm:px-5 sm:py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 max-w-3xl mr-auto ml-0">
          
          <div className="flex items-center gap-2.5 px-2">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
              <PhoneCall className="w-3.5 h-3.5" />
            </div>
            <div className="leading-tight">
              <h4 className="font-bold text-[12px] text-slate-900">Never miss a call</h4>
              <p className="text-[10px] text-slate-500">24/7 patient response</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 px-2">
            <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center shrink-0">
              <Users className="w-3.5 h-3.5" />
            </div>
            <div className="leading-tight">
              <h4 className="font-bold text-[12px] text-slate-900">Happier patients</h4>
              <p className="text-[10px] text-slate-500">Instant answers & booking</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 px-2">
            <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center shrink-0">
              <BarChart3 className="w-3.5 h-3.5" />
            </div>
            <div className="leading-tight">
              <h4 className="font-bold text-[12px] text-slate-900">More appointments</h4>
              <p className="text-[10px] text-slate-500">Maximized schedule fill</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 px-2">
            <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-600 border border-teal-100 flex items-center justify-center shrink-0">
              <Users className="w-3.5 h-3.5" />
            </div>
            <div className="leading-tight">
              <h4 className="font-bold text-[12px] text-slate-900">Less busywork</h4>
              <p className="text-[10px] text-slate-500">Zero phone tag</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

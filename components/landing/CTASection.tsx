"use client"

import React from "react"
import { Sparkles, Calendar, ArrowRight, PhoneCall, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-sky-600/20 via-blue-600/20 to-teal-400/20 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4 text-sky-400" /> Transform Your Dental Front Desk
        </div>

        {/* Main Banner Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Let AI handle the conversation.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-teal-300">
            Let your team focus on patients.
          </span>
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Join modern dental practices offering 24/7 instant answering, automated triage, and effortless appointment scheduling.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#features"
            onClick={(e) => handleScrollTo(e, "#features")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-2xl px-8 py-4 text-base shadow-xl shadow-sky-500/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-5 h-5 text-sky-200" />
            Explore AI Features
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>

          <a
            href="#how-it-works"
            onClick={(e) => handleScrollTo(e, "#how-it-works")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-white font-medium rounded-2xl px-8 py-4 text-base transition-colors"
          >
            <Calendar className="w-4 h-4 text-sky-400" />
            See How It Works
          </a>
        </div>

        {/* Highlights */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 24/7 Automated Answering
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Fast 10-Minute Setup
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Seamless Practice Sync
          </span>
        </div>

      </div>
    </section>
  )
}

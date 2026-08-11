"use client"

import React from "react"
import Image from "next/image"
import { Calendar, Phone, Sparkles, Star, ShieldCheck, Heart, Clock, Award } from "lucide-react"

export function DentalHero() {
  return (
    <section className="relative pt-6 pb-16 lg:py-20 bg-gradient-to-b from-sky-50/80 via-slate-50/50 to-white overflow-hidden">
      
      {/* Ambient Radial Lighting Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-200/40 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-teal-200/30 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Practice Welcome & Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Authentic Google Review Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-xs w-fit mb-6">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                <span className="font-extrabold text-slate-900 text-sm">4.7</span>
                <div className="flex items-center text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </div>
                <span className="text-slate-500 font-semibold border-l border-slate-200 pl-2">
                  Google Reviews <span className="text-slate-400 font-normal">(450+ Verified Patients)</span>
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Healthy Smiles. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-teal-500">
                Lasting Confidence.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Welcome to <strong>Smile Dental</strong>. Dr. Sarah Johnson and our compassionate clinical team provide gentle family, preventive, and cosmetic dentistry in Overland Park. Experience personalized care in a calm, welcoming environment.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold rounded-full px-8 py-4 text-base shadow-lg shadow-sky-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-5 h-5" />
                Schedule Your Visit
              </a>

              <a
                href="tel:9135550192"
                className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-800 font-bold rounded-full px-7 py-4 text-base shadow-xs hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-5 h-5 text-sky-600" />
                Call (913) 555-0192
              </a>
            </div>

            {/* Virtual Patient Desk Callout Banner */}
            <div className="mt-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-sky-200/90 shadow-md max-w-xl flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-teal-400 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    24/7 Online Patient Desk & Scheduling
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <span className="text-slate-600">Need to check insurance, ask a clinical question, or request an after-hours visit? Chat with our Virtual Assistant in the corner!</span>
                </div>
              </div>
            </div>

            {/* Micro Practice Badges */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Most PPO Insurances Accepted</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Same-Day Emergency Relief</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Gentle Anxiety-Free Sedation</span>
              </div>
            </div>

          </div>

          {/* Right Column: High Resolution Dental Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Lighting */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-sky-400/30 to-teal-300/30 rounded-[2.5rem] blur-xl opacity-70" />

              {/* Main Photo Frame */}
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-slate-100">
                <Image
                  src="/hero-patient.png"
                  alt="Dr. Sarah Johnson examining a patient at Smile Dental"
                  width={600}
                  height={650}
                  className="w-full h-auto object-cover hover:scale-102 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Floating Badge 1: New Patient Special */}
              <div className="absolute -bottom-5 -left-4 bg-white/95 backdrop-blur-md border border-slate-200/90 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                  <Heart className="w-5 h-5 fill-current text-teal-500" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-slate-900 block">New Patient Special</span>
                  <span className="text-[11px] text-slate-500 font-medium">$99 Comprehensive Exam, Cleaning & X-Rays</span>
                </div>
              </div>

              {/* Floating Badge 2: Accepting Patients */}
              <div className="absolute -top-4 -right-3 bg-white/95 backdrop-blur-md border border-slate-200/90 px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-800">Now Accepting New Patients</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

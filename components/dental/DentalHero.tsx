"use client"

import React from "react"
import Image from "next/image"
import {
  Calendar,
  Phone,
  Sparkles,
  Star,
  ShieldCheck,
  Heart,
  Clock,
  Award,
} from "lucide-react"

export function DentalHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/80 via-slate-50/50 to-white pt-6 pb-16 lg:py-20">
      {/* Ambient Radial Lighting Effects */}
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-sky-200/40 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-[400px] w-[400px] rounded-full bg-teal-200/30 blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Practice Welcome & Primary CTAs */}
          <div className="flex flex-col text-left lg:col-span-7">
            {/* Authentic Google Review Badge */}
            <div className="mb-6 inline-flex w-fit items-center gap-2.5 rounded-full border border-slate-200 bg-white/95 px-4 py-2 shadow-xs backdrop-blur-md">
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                <span className="text-sm font-extrabold text-slate-900">
                  4.7
                </span>
                <div className="flex items-center text-amber-400">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                </div>
                <span className="border-l border-slate-200 pl-2 font-semibold text-slate-500">
                  Google Reviews{" "}
                  <span className="font-normal text-slate-400">
                    (450+ Verified Patients)
                  </span>
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl leading-[1.12] font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Healthy Smiles. <br />
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-teal-500 bg-clip-text text-transparent">
                Lasting Confidence.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Welcome to <strong>Smile Dental</strong>. Dr. Jennifer Smith and
              our compassionate clinical team provide gentle family, preventive,
              and cosmetic dentistry in Overland Park. Experience personalized
              care in a calm, welcoming environment.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-sky-600/25 transition-all hover:scale-[1.02] hover:from-sky-500 hover:to-blue-500 active:scale-[0.98]"
              >
                <Calendar className="h-5 w-5" />
                Schedule Your Visit
              </a>

              <a
                href="tel:9135550192"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-bold text-slate-800 shadow-xs transition-colors hover:bg-slate-50"
              >
                <Phone className="h-5 w-5 text-sky-600" />
                Call (913) 555-0192
              </a>
            </div>

            {/* Virtual Patient Desk Callout Banner */}
            <div className="mt-6 flex max-w-xl items-center justify-between gap-3 rounded-2xl border border-sky-200/90 bg-white/90 p-4 shadow-md backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-600 to-teal-400 text-xs font-bold text-white shadow-xs">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div className="text-xs">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    24/7 Online Patient Desk & Scheduling
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-slate-600">
                    Need to check insurance, ask a clinical question, or request
                    an after-hours visit? Chat with our Virtual Assistant in the
                    corner!
                  </span>
                </div>
              </div>
            </div>

            {/* Micro Practice Badges */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200/80 pt-6 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0 text-sky-600" />
                <span>Most PPO Insurances Accepted</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-sky-600" />
                <span>Same-Day Emergency Relief</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 shrink-0 text-sky-600" />
                <span>Gentle Anxiety-Free Sedation</span>
              </div>
            </div>
          </div>

          {/* Right Column: High Resolution Dental Photography */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Lighting */}
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-sky-400/30 to-teal-300/30 opacity-70 blur-xl" />

              {/* Main Photo Frame */}
              <div className="relative overflow-hidden rounded-[2rem] border-4 border-white bg-slate-100 shadow-2xl">
                <Image
                  src="/hero-patient.png"
                  alt="Dr. Jennifer Smith  examining a patient at Smile Dental"
                  width={600}
                  height={650}
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-102"
                  priority
                />
              </div>

              {/* Floating Badge 1: New Patient Special */}
              <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-xl backdrop-blur-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 font-bold text-teal-600">
                  <Heart className="h-5 w-5 fill-current text-teal-500" />
                </div>
                <div>
                  <span className="block text-xs font-extrabold text-slate-900">
                    New Patient Special
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">
                    $99 Comprehensive Exam, Cleaning & X-Rays
                  </span>
                </div>
              </div>

              {/* Floating Badge 2: Accepting Patients */}
              <div className="absolute -top-4 -right-3 flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-md">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
                <span className="text-xs font-bold text-slate-800">
                  Now Accepting New Patients
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

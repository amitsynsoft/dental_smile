"use client"

import React from "react"
import {
  Building2,
  Smile,
  Sparkles,
  Stethoscope,
  Heart,
  Award,
} from "lucide-react"

export function TrustSection() {
  const practices = [
    {
      name: "BrightSmiles Dental",
      subtitle: "Multi-Specialty Care",
      icon: Smile,
    },
    { name: "Oak Dental Care", subtitle: "Family & Cosmetic", icon: Building2 },
    {
      name: "Pearl Dental Studio",
      subtitle: "Aesthetic Dentistry",
      icon: Sparkles,
    },
    {
      name: "Apex Orthodontics",
      subtitle: "Aligners & Braces",
      icon: Stethoscope,
    },
    {
      name: "Radiant Smiles Clinic",
      subtitle: "General Dentistry",
      icon: Heart,
    },
    {
      name: "Pinnacle Dental Spa",
      subtitle: "Sedation & Surgery",
      icon: Award,
    },
  ]

  return (
    <section className="border-y border-slate-200/80 bg-white/50 py-14 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <p className="text-xs font-bold tracking-widest text-sky-600 uppercase dark:text-sky-400">
            Trusted Choice
          </p>
          <h2 className="mt-1 text-lg font-bold text-slate-800 sm:text-xl dark:text-slate-200">
            Built for modern dental practices & group clinics
          </h2>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 items-center gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
          {practices.map((practice, index) => {
            const IconComponent = practice.icon
            return (
              <div
                key={index}
                className="group flex flex-col items-center rounded-2xl border border-slate-200/80 bg-white p-4 text-center shadow-xs transition-all duration-200 hover:border-sky-300 hover:shadow-md dark:border-slate-700/60 dark:bg-slate-800/80 dark:hover:border-sky-600"
              >
                <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-transform group-hover:scale-110 dark:bg-sky-950/60 dark:text-sky-400">
                  <IconComponent className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold text-slate-800 transition-colors group-hover:text-sky-600 dark:text-slate-100 dark:hover:text-sky-400">
                  {practice.name}
                </span>
                <span className="mt-0.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {practice.subtitle}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

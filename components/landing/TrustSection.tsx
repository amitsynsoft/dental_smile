"use client"

import React from "react"
import { Building2, Smile, Sparkles, Stethoscope, Heart, Award } from "lucide-react"

export function TrustSection() {
  const practices = [
    { name: "BrightSmile Dental", subtitle: "Multi-Specialty Care", icon: Smile },
    { name: "Oak Dental Care", subtitle: "Family & Cosmetic", icon: Building2 },
    { name: "Pearl Dental Studio", subtitle: "Aesthetic Dentistry", icon: Sparkles },
    { name: "Apex Orthodontics", subtitle: "Aligners & Braces", icon: Stethoscope },
    { name: "Radiant Smiles Clinic", subtitle: "General Dentistry", icon: Heart },
    { name: "Pinnacle Dental Spa", subtitle: "Sedation & Surgery", icon: Award },
  ]

  return (
    <section className="py-14 border-y border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Trusted Choice
          </p>
          <h2 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200 mt-1">
            Built for modern dental practices & group clinics
          </h2>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
          {practices.map((practice, index) => {
            const IconComponent = practice.icon
            return (
              <div
                key={index}
                className="group p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 shadow-xs hover:shadow-md hover:border-sky-300 dark:hover:border-sky-600 transition-all duration-200 flex flex-col items-center text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="font-semibold text-sm text-slate-800 dark:text-slate-100 group-hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                  {practice.name}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
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

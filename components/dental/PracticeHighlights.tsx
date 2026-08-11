"use client"

import React from "react"
import { HeartPulse, Cpu, ShieldCheck, Zap } from "lucide-react"

export function PracticeHighlights() {
  const highlights = [
    {
      icon: HeartPulse,
      title: "Anxiety-Free Comfort",
      description: "We take things at your pace. From gentle numbing techniques to warm blankets, your comfort comes first.",
      color: "sky",
    },
    {
      icon: Cpu,
      title: "Modern Tech",
      description: "Low-radiation 3D digital X-rays, intraoral cameras, and laser dentistry for faster, precise healing.",
      color: "teal",
    },
    {
      icon: ShieldCheck,
      title: "Honest & Clear Pricing",
      description: "No surprise bills or hidden fees. We explain all treatment options and insurance benefits upfront.",
      color: "blue",
    },
    {
      icon: Zap,
      title: "Same-Day Toothache Relief",
      description: "In severe pain or have a cracked tooth? We save daily openings specifically for urgent emergency care.",
      color: "amber",
    },
  ]

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/60 hover:border-sky-300 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-100/80 text-sky-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-1.5">{item.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

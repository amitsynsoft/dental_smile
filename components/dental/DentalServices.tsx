"use client"

import React from "react"
import { Sparkles, Activity, ShieldAlert, Smile, Stethoscope, Check } from "lucide-react"

export function DentalServices() {
  const services = [
    {
      title: "Cleanings & Family Care",
      icon: Stethoscope,
      subtitle: "Keep your smile healthy and bright with routine preventive care.",
      items: ["Comprehensive Dental Exams", "Gentle Ultrasonic Cleanings", "Low-Radiation Digital X-Rays", "Oral Cancer Screening & Fluoride"],
      badge: "Preventive",
    },
    {
      title: "Same-Day Emergency Care",
      icon: ShieldAlert,
      subtitle: "Immediate pain relief for toothaches, broken teeth, and trauma.",
      items: ["Same-Day Emergency Appointments", "Severe Toothache Diagnosis & Treatment", "Chipped, Broken or Lost Tooth Repair", "Emergency Root Canals & Extractions"],
      badge: "Urgent",
    },
    {
      title: "Cosmetic Smile Makeovers",
      icon: Sparkles,
      subtitle: "Transform your confidence with natural, beautiful aesthetic solutions.",
      items: ["In-Office Zoom!® Teeth Whitening", "Handcrafted Porcelain Veneers", "Tooth-Colored Composite Bonding", "Full Smile Rejuvenation"],
      badge: "Cosmetic",
    },
    {
      title: "Implants & Restorative Care",
      icon: Activity,
      subtitle: "Restore natural strength, function, and aesthetics to your teeth.",
      items: ["Single & Multi Tooth Dental Implants", "Custom Porcelain Crowns & Bridges", "Natural Tooth-Colored Fillings", "Full & Partial Denture Options"],
      badge: "Restorative",
    },
    {
      title: "Invisalign® Clear Aligners",
      icon: Smile,
      subtitle: "Straighten your teeth comfortably without traditional metal braces.",
      items: ["3D Digital iTero® Scan (No Messy Impression Gel)", "Removable Virtually Invisible Aligners", "Teens & Adult Clear Braces", "Free Initial Orthodontic Consultation"],
      badge: "Orthodontics",
    },
    {
      title: "Periodontal Gum Therapy",
      icon: Activity,
      subtitle: "Protect your dental foundation with expert gum health care.",
      items: ["Gentle Deep Cleaning (Scaling & Root Planing)", "Periodontal Maintenance Cleanings", "Laser Gum Disease Therapy", "Sensitivity & Receding Gum Care"],
      badge: "Gum Health",
    },
  ]

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-sky-600 tracking-wider uppercase bg-sky-100/80 px-3.5 py-1.5 rounded-full">
            Complete Dental Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Care Designed Around You & Your Family
          </h2>
          <p className="text-slate-600 text-base mt-3">
            From routine checkups to complete smile transformations, Dr. Johnson and our team deliver thorough, gentle care using modern technology.
          </p>
        </div>

        {/* Services 3x2 Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-xs mb-6 leading-relaxed">{service.subtitle}</p>

                <ul className="space-y-2.5 mb-6">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className="w-full text-center py-3 px-4 rounded-xl bg-slate-50 hover:bg-sky-50 text-slate-800 hover:text-sky-700 font-bold text-xs border border-slate-200/80 transition-colors"
              >
                Schedule Visit for {service.badge} →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

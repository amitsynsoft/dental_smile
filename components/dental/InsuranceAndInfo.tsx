"use client"

import React from "react"
import { ShieldCheck, Heart, CheckCircle2 } from "lucide-react"

export function InsuranceAndInfo() {
  const insurances = [
    "Delta Dental PPO",
    "MetLife Dental",
    "Cigna Dental",
    "Aetna PPO",
    "Guardian",
    "Humana Dental",
    "UnitedHealthcare",
    "Ameritas",
    "CareCredit",
  ]

  return (
    <section id="insurance" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Insurance Providers Column */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <span className="text-xs font-bold text-sky-600 tracking-wider uppercase bg-sky-50 px-3 py-1 rounded-full w-fit">
              Insurance & Financing
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Simple, Transparent Insurance & Payment Options
            </h2>

            <p className="mt-4 text-slate-600 text-sm leading-relaxed">
              We are in-network with major PPO dental insurance plans. Our financial coordinators submit claims directly on your behalf to help maximize your benefits and minimize out-of-pocket costs.
            </p>

            {/* Insurance Badges */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {insurances.map((name) => (
                <div
                  key={name}
                  className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-2"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                  <span>{name}</span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-slate-500 italic">
              Don't see your insurance listed? Call us at (913) 555-0192 and we'll gladly verify your coverage!
            </p>
          </div>

          {/* No Insurance? Membership Plan Card */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold mb-4">
                <Heart className="w-3.5 h-3.5 fill-current" /> No Insurance? No Problem!
              </div>

              <h3 className="text-2xl font-extrabold tracking-tight">
                Smile Dental In-House Savings Plan
              </h3>
              <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                Comprehensive dental care for uninsured patients without claim forms, deductibles, waiting periods, or annual maximums.
              </p>

              <div className="my-6 p-4 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-300 block">Annual Membership</span>
                  <span className="text-3xl font-extrabold text-white">$299 <span className="text-xs text-slate-400 font-normal">/ year</span></span>
                </div>
                <span className="text-[11px] font-bold text-teal-300 bg-teal-500/20 px-3 py-1 rounded-full">
                  Save 40%+ Annually
                </span>
              </div>

              <ul className="space-y-2 text-xs text-slate-200 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>2 Professional Routine Cleanings & Exams Included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>All Annual Digital X-Rays & Oral Exams Included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>20% Discount on All Fillings, Crowns, Whitening & Implants</span>
                </li>
              </ul>

              <a
                href="tel:9135550192"
                className="inline-block w-full text-center py-3 rounded-xl bg-sky-500 hover:bg-sky-400 font-bold text-xs text-white transition-colors"
              >
                Enroll in In-House Savings Plan →
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

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
    <section
      id="insurance"
      className="border-y border-slate-100 bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Insurance Providers Column */}
          <div className="flex flex-col text-left lg:col-span-6">
            <span className="w-fit rounded-full bg-sky-50 px-3 py-1 text-xs font-bold tracking-wider text-sky-600 uppercase">
              Insurance & Financing
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Simple, Transparent Insurance & Payment Options
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              We are in-network with major PPO dental insurance plans. Our
              financial coordinators submit claims directly on your behalf to
              help maximize your benefits and minimize out-of-pocket costs.
            </p>

            {/* Insurance Badges */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {insurances.map((name) => (
                <div
                  key={name}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-800"
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-sky-600" />
                  <span>{name}</span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-slate-500 italic">
              Don't see your insurance listed? Call us at (913) 555-0192 and
              we'll gladly verify your coverage!
            </p>
          </div>

          {/* No Insurance? Membership Plan Card */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-xl">
              <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />

              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-3 py-1 text-xs font-bold text-sky-300">
                <Heart className="h-3.5 w-3.5 fill-current" /> No Insurance? No
                Problem!
              </div>

              <h3 className="text-2xl font-extrabold tracking-tight">
                Smiles Dental In-House Savings Plan
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Comprehensive dental care for uninsured patients without claim
                forms, deductibles, waiting periods, or annual maximums.
              </p>

              <div className="my-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-4">
                <div>
                  <span className="block text-xs text-slate-300">
                    Annual Membership
                  </span>
                  <span className="text-3xl font-extrabold text-white">
                    $299{" "}
                    <span className="text-xs font-normal text-slate-400">
                      / year
                    </span>
                  </span>
                </div>
                <span className="rounded-full bg-teal-500/20 px-3 py-1 text-[11px] font-bold text-teal-300">
                  Save 40%+ Annually
                </span>
              </div>

              <ul className="mb-6 space-y-2 text-xs text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-400" />
                  <span>2 Professional Routine Cleanings & Exams Included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-400" />
                  <span>All Annual Digital X-Rays & Oral Exams Included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-400" />
                  <span>
                    20% Discount on All Fillings, Crowns, Whitening & Implants
                  </span>
                </li>
              </ul>

              <a
                href="tel:9135550192"
                className="inline-block w-full rounded-xl bg-sky-500 py-3 text-center text-xs font-bold text-white transition-colors hover:bg-sky-400"
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

"use client"

import React from "react"
import { Star, Quote, CheckCircle2 } from "lucide-react"

export function PatientReviews() {
  const reviews = [
    {
      name: "Sarah & Michael Jenkins",
      role: "Family Patients (Overland Park)",
      comment:
        "Dr. Johnson is a lifesaver. My 7-year-old son was terrified of the dentist, but her team made him feel so safe and relaxed. He actually asked when we get to go back!",
      rating: 5,
      date: "2 weeks ago",
    },
    {
      name: "David Ross",
      role: "Emergency Patient",
      comment:
        "Woke up with an excruciating toothache on a Tuesday. Called their office and they got me in by 10 AM, diagnosed a cracked molar, and fixed it painlessly. Incredible service.",
      rating: 5,
      date: "1 month ago",
    },
    {
      name: "Elena Rodriguez",
      role: "Invisalign Patient",
      comment:
        "I got Invisalign through Dr. Johnson and completed my treatment last week. My teeth look amazing! The staff is always punctual, friendly, and very transparent about costs.",
      rating: 5,
      date: "3 weeks ago",
    },
  ]

  return (
    <section id="reviews" className="bg-sky-50/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-800 shadow-xs">
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
            <span className="font-extrabold text-slate-900">4.7 / 5.0</span>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <span className="font-medium text-slate-500">
              Rating on Google Reviews
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            What Our Patients Say About Their Care
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Read real feedback from neighbors who trust Smiles Dental with their
            health and smiles.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((rev) => (
            <div
              key={rev.name}
              className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-shadow hover:shadow-md"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">
                    {rev.date}
                  </span>
                </div>

                <Quote className="mb-2 h-8 w-8 text-sky-200" />
                <p className="mb-6 text-xs leading-relaxed text-slate-700 sm:text-sm">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    {rev.name}
                  </h4>
                  <span className="text-[11px] text-slate-500">{rev.role}</span>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                  <CheckCircle2 className="h-3 w-3" /> Verified Google Review
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

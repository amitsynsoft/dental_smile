"use client"

import React from "react"
import { Star, Quote, CheckCircle2 } from "lucide-react"

export function PatientReviews() {
  const reviews = [
    {
      name: "Sarah & Michael Jenkins",
      role: "Family Patients (Overland Park)",
      comment: "Dr. Johnson is a lifesaver. My 7-year-old son was terrified of the dentist, but her team made him feel so safe and relaxed. He actually asked when we get to go back!",
      rating: 5,
      date: "2 weeks ago",
    },
    {
      name: "David Ross",
      role: "Emergency Patient",
      comment: "Woke up with an excruciating toothache on a Tuesday. Called their office and they got me in by 10 AM, diagnosed a cracked molar, and fixed it painlessly. Incredible service.",
      rating: 5,
      date: "1 month ago",
    },
    {
      name: "Elena Rodriguez",
      role: "Invisalign Patient",
      comment: "I got Invisalign through Dr. Johnson and completed my treatment last week. My teeth look amazing! The staff is always punctual, friendly, and very transparent about costs.",
      rating: 5,
      date: "3 weeks ago",
    },
  ]

  return (
    <section id="reviews" className="py-20 bg-sky-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-xs mb-4">
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span className="font-extrabold text-slate-900">4.7 / 5.0</span>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-slate-500 font-medium">Rating on Google Reviews</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Our Patients Say About Their Care
          </h2>
          <p className="text-slate-600 text-sm mt-3">
            Read real feedback from neighbors who trust Smile Dental with their health and smiles.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.name}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{rev.date}</span>
                </div>

                <Quote className="w-8 h-8 text-sky-200 mb-2" />
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">{rev.name}</h4>
                  <span className="text-[11px] text-slate-500">{rev.role}</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" /> Verified Google Review
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

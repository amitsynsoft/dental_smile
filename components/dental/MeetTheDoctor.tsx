"use client"

import React from "react"
import Image from "next/image"
import { Award, CheckCircle2 } from "lucide-react"

export function MeetTheDoctor() {
  return (
    <section id="about" className="border-y border-slate-100 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Doctor Portrait Image with Secondary Clinic Suite Spotlight */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="pointer-events-none absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-sky-200 to-teal-100 opacity-60 blur-xl" />

              {/* Main Doctor Headshot Frame */}
              <div className="relative overflow-hidden rounded-[2rem] border-4 border-white bg-slate-100 shadow-2xl">
                <Image
                  src="/doctor.png"
                  alt="Dr. Jennifer Smith , DDS - Lead Dentist at Smiles Dental"
                  width={550}
                  height={650}
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-103"
                />
              </div>

              {/* Secondary Floating Suite Photo */}
              <div className="absolute -bottom-6 -left-6 hidden w-44 overflow-hidden rounded-2xl border-4 border-white bg-slate-100 shadow-xl sm:block">
                <Image
                  src="/clinic-suite.png"
                  alt="Smiles Dental modern treatment suite"
                  width={200}
                  height={150}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Floating Credential Tag */}
              <div className="absolute right-2 -bottom-4 flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-xl backdrop-blur-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900">
                    15+ Years Serving KC
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Overland Park & Johnson County
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Biography & Philosophy */}
          <div className="flex flex-col text-left lg:col-span-7">
            <span className="w-fit rounded-full bg-sky-50 px-3.5 py-1.5 text-xs font-bold tracking-wider text-sky-600 uppercase">
              Meet Your Lead Dentist
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Dr. Jennifer Smith , DDS
            </h2>
            <p className="mt-1 text-sm font-bold text-sky-600">
              Doctor of Dental Surgery • UMKC School of Dentistry Graduate
            </p>

            <blockquote className="mt-6 rounded-2xl border-l-4 border-sky-600 bg-slate-50 p-4 text-sm leading-relaxed text-slate-700 italic shadow-2xs">
              "I believe dental visits shouldn't be stressful. My goal is to
              listen to your concerns, explain your options clearly, and deliver
              care so gentle you'll look forward to your appointments."
            </blockquote>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Dr. Jennifer Smith earned her Doctor of Dental Surgery degree with
              honors at the UMKC School of Dentistry. Over the past 15 years in
              private practice, she has earned a reputation throughout Overland
              Park for meticulous clinical care and a warm, comforting chairside
              manner.
            </p>

            {/* Qualifications & Associations */}
            <div className="mt-6 grid gap-3 text-xs font-medium text-slate-800 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-600" />
                <span>Member, American Dental Association (ADA)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-600" />
                <span>Member, Kansas Dental Association (KDA)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-600" />
                <span>Certified Invisalign® Preferred Provider</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-600" />
                <span>Advanced Oral Sedation & Comfort Specialist</span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-slate-800"
              >
                Schedule a Visit with Dr. Johnson →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import React from "react"
import Image from "next/image"
import { Award, CheckCircle2 } from "lucide-react"

export function MeetTheDoctor() {
  return (
    <section id="about" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Doctor Portrait Image with Secondary Clinic Suite Spotlight */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="absolute -inset-3 bg-gradient-to-tr from-sky-200 to-teal-100 rounded-[2.5rem] blur-xl opacity-60 pointer-events-none" />

              {/* Main Doctor Headshot Frame */}
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-slate-100">
                <Image
                  src="/doctor.png"
                  alt="Dr. Sarah Johnson, DDS - Lead Dentist at Smile Dental"
                  width={550}
                  height={650}
                  className="w-full h-auto object-cover hover:scale-103 transition-transform duration-500"
                />
              </div>

              {/* Secondary Floating Suite Photo */}
              <div className="absolute -bottom-6 -left-6 hidden sm:block w-44 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-slate-100">
                <Image
                  src="/clinic-suite.png"
                  alt="Smile Dental modern treatment suite"
                  width={200}
                  height={150}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Credential Tag */}
              <div className="absolute -bottom-4 right-2 bg-white/95 backdrop-blur-md border border-slate-200/90 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block">15+ Years Serving KC</span>
                  <span className="text-[11px] text-slate-500">Overland Park & Johnson County</span>
                </div>
              </div>

            </div>
          </div>

          {/* Doctor Biography & Philosophy */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <span className="text-xs font-bold text-sky-600 tracking-wider uppercase bg-sky-50 px-3.5 py-1.5 rounded-full w-fit">
              Meet Your Lead Dentist
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Dr. Sarah Johnson, DDS
            </h2>
            <p className="text-sky-600 font-bold text-sm mt-1">
              Doctor of Dental Surgery • UMKC School of Dentistry Graduate
            </p>

            <blockquote className="mt-6 p-4 rounded-2xl bg-slate-50 border-l-4 border-sky-600 italic text-slate-700 text-sm leading-relaxed shadow-2xs">
              "I believe dental visits shouldn't be stressful. My goal is to listen to your concerns, explain your options clearly, and deliver care so gentle you'll look forward to your appointments."
            </blockquote>

            <p className="mt-4 text-slate-600 text-sm leading-relaxed">
              Dr. Sarah Johnson earned her Doctor of Dental Surgery degree with honors at the UMKC School of Dentistry. Over the past 15 years in private practice, she has earned a reputation throughout Overland Park for meticulous clinical care and a warm, comforting chairside manner.
            </p>

            {/* Qualifications & Associations */}
            <div className="mt-6 grid sm:grid-cols-2 gap-3 text-xs font-medium text-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Member, American Dental Association (ADA)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Member, Kansas Dental Association (KDA)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Certified Invisalign® Preferred Provider</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Advanced Oral Sedation & Comfort Specialist</span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full px-7 py-3.5 text-sm shadow-md transition-colors"
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

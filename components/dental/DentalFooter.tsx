"use client"

import React from "react"
import { Phone, Mail, MapPin, Sparkles } from "lucide-react"

export function DentalFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 py-12 text-xs text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Col 1: Clinic Branding */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-lg font-extrabold text-white">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500 text-xs font-bold text-white">
                SD
              </div>
              Smiles Dental
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Providing gentle, patient-centered family & cosmetic dentistry to
              Overland Park and surrounding communities.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
              <Sparkles className="h-3.5 w-3.5" /> 24/7 AI Receptionist Powered
              by ElevenLabs
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-2">
            <h4 className="mb-3 text-sm font-bold text-white">Our Services</h4>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-sky-400"
                >
                  Cleanings & Prevention
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-sky-400"
                >
                  Emergency Dental Care
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-sky-400"
                >
                  Teeth Whitening & Veneers
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-sky-400"
                >
                  Dental Implants & Crowns
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-sky-400"
                >
                  Invisalign® Clear Aligners
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-2">
            <h4 className="mb-3 text-sm font-bold text-white">Patient Links</h4>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="#about"
                  className="transition-colors hover:text-sky-400"
                >
                  Meet Dr. Jennifer Smith{" "}
                </a>
              </li>
              <li>
                <a
                  href="#insurance"
                  className="transition-colors hover:text-sky-400"
                >
                  In-Network Insurances
                </a>
              </li>
              <li>
                <a
                  href="#insurance"
                  className="transition-colors hover:text-sky-400"
                >
                  Dental Membership Savings Plan
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="transition-colors hover:text-sky-400"
                >
                  Patient Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-sky-400"
                >
                  Request Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Office Contact */}
          <div className="space-y-2.5">
            <h4 className="mb-3 text-sm font-bold text-white">
              Contact Information
            </h4>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-sky-400" />
              450 Medical Plaza • Suite 400, Overland Park, KS
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-sky-400" />
              <a
                href="tel:9135550192"
                className="font-bold text-white hover:text-sky-400"
              >
                (913) 555-0192
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-sky-400" />
              care@smiledental.com
            </p>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-[11px] text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Smiles Dental. All rights reserved.
            Member of ADA & KDA.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              HIPAA Notice
            </a>
            <a href="#" className="hover:underline">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

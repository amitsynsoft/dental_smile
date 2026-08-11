"use client"

import React from "react"
import { Heart } from "lucide-react"
import { Logo } from "@/components/landing/Logo"

export function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1: Brand */}
          <div className="col-span-2 flex flex-col justify-between">
            <div>
              <a href="#" className="inline-block mb-4">
                <Logo showTagline={true} />
              </a>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                The AI virtual receptionist that answers patient questions, triages emergencies, and schedules appointments for modern dental practices 24/7.
              </p>
            </div>

            <div className="mt-6 p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400">
              <span className="font-semibold text-sky-400 block mb-0.5">Demo Showcase Product</span>
              This landing page is a product demonstration template for SmileGuide AI. Mount your custom ElevenLabs bot widget anytime.
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4 uppercase tracking-wider">Product</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#features" onClick={(e) => handleScrollTo(e, "#features")} className="hover:text-sky-400 transition-colors">
                  AI Virtual Receptionist
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleScrollTo(e, "#features")} className="hover:text-sky-400 transition-colors">
                  Appointment Scheduling
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleScrollTo(e, "#features")} className="hover:text-sky-400 transition-colors">
                  Emergency Triage
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleScrollTo(e, "#features")} className="hover:text-sky-400 transition-colors">
                  Insurance Pre-Check
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleScrollTo(e, "#features")} className="hover:text-sky-400 transition-colors">
                  Practice Features
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#how-it-works" onClick={(e) => handleScrollTo(e, "#how-it-works")} className="hover:text-sky-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleScrollTo(e, "#faq")} className="hover:text-sky-400 transition-colors">
                  FAQ & Support
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleScrollTo(e, "#features")} className="hover:text-sky-400 transition-colors">
                  PMS Integration
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={(e) => handleScrollTo(e, "#how-it-works")} className="hover:text-sky-400 transition-colors">
                  Practice Onboarding
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Privacy & Legal */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4 uppercase tracking-wider">Legal & Trust</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <span className="hover:text-sky-400 transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="hover:text-sky-400 transition-colors cursor-pointer">
                  Terms of Service
                </span>
              </li>
              <li>
                <span className="hover:text-sky-400 transition-colors cursor-pointer">
                  Healthcare Data Standards
                </span>
              </li>
              <li>
                <span className="hover:text-sky-400 transition-colors cursor-pointer">
                  Security Disclosures
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 SmileGuide AI Inc. All rights reserved. (Demo Environment)
          </div>
          <div className="flex items-center gap-1">
            Crafted for modern dental healthcare practices <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>

      </div>
    </footer>
  )
}

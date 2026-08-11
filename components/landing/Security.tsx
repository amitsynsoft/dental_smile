"use client"

import React from "react"
import { ShieldCheck, Lock, EyeOff, Server, FileText } from "lucide-react"

export function Security() {
  const securityPillars = [
    {
      icon: Lock,
      title: "Data Encryption",
      description: "All patient messages and appointment details are encrypted in transit and at rest using industry-standard protocols."
    },
    {
      icon: EyeOff,
      title: "Patient Privacy Architecture",
      description: "Architected to restrict data exposure strictly to authorized practice systems and verified clinical personnel."
    },
    {
      icon: Server,
      title: "Isolated PMS Integration",
      description: "Direct, secure schedule synchronization designed to protect your existing practice management database."
    },
    {
      icon: FileText,
      title: "Transparent Demo Mode",
      description: "This demonstration environment operates in isolated sandbox mode with zero live patient PHI storage."
    }
  ]

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl relative">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4" /> Healthcare Data Standards
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Designed with healthcare privacy & security at its core.
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              We know patient trust is the foundation of your practice. SmileGuide AI is engineered from the ground up with strict data protection, access controls, and transparent system boundaries.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityPillars.map((p, idx) => {
              const IconComp = p.icon
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 text-teal-400 flex items-center justify-center mb-3">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base text-white mb-1.5">{p.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{p.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 text-center sm:text-left text-xs text-slate-400">
            <span>Note: This web application is a product demonstration showcase. ElevenLabs voice or custom chat bots can be mounted dynamically.</span>
          </div>

        </div>

      </div>
    </section>
  )
}

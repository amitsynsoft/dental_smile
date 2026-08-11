"use client"

import React from "react"
import { Phone, Clock, MapPin, Sparkles } from "lucide-react"

export function TopHeaderBar() {
  return (
    <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800 hidden sm:block">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        
        {/* Left: Address & Hours */}
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            450 Medical Plaza • Suite 400, Overland Park, KS 66211
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-teal-400" />
            Mon – Thu: 8:00 AM – 5:00 PM | Fri: 8:00 AM – 2:00 PM
          </span>
        </div>

        {/* Right: Direct Phone & Virtual Patient Desk Teaser */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-emerald-400 font-medium">
            <Sparkles className="w-3.5 h-3.5" /> 24/7 Virtual Assistant Online
          </span>
          <a
            href="tel:9135550192"
            className="flex items-center gap-1.5 font-bold text-white hover:text-sky-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-sky-400" />
            Call Direct: (913) 555-0192
          </a>
        </div>

      </div>
    </div>
  )
}

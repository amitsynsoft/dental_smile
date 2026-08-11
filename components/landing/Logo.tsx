"use client"

import React from "react"

interface LogoProps {
  className?: string
  showTagline?: boolean
}

export function Logo({ className = "", showTagline = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 group cursor-pointer select-none ${className}`}>
      
      {/* Clean Line-Art Tooth Icon (Matching Image) */}
      <div className="relative flex items-center justify-center w-9 h-9 text-blue-600 dark:text-sky-400 group-hover:scale-105 transition-transform duration-300">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9"
        >
          {/* Outer Tooth Line Art */}
          <path
            d="M20 5C13.5 5 9 9 9 15C9 20.5 11.5 25.5 14 30C15 31.8 16.5 34 18.5 34C19.2 34 19.5 33.2 19.5 31.5V24C19.5 23.2 20.2 22.5 21 22.5C21.8 22.5 22.5 23.2 22.5 24V31.5C22.5 33.2 22.8 34 23.5 34C25.5 34 27 31.8 28 30C30.5 25.5 33 20.5 33 15C33 9 28.5 5 22 5H20Z"
            stroke="url(#logoBlueGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner Smile Curve */}
          <path
            d="M15 16C17.5 19.5 24.5 19.5 27 16"
            stroke="url(#logoBlueGrad)"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          {/* AI Sparkle */}
          <path
            d="M29 7L30.2 9.8L33 11L30.2 12.2L29 15L27.8 12.2L25 11L27.8 9.8L29 7Z"
            fill="#3B82F6"
          />
          <defs>
            <linearGradient id="logoBlueGrad" x1="9" y1="5" x2="33" y2="34" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" />
              <stop offset="1" stopColor="#6366F1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white">
            SmileGuide
          </span>
          <span className="font-black text-2xl tracking-tight text-blue-600 dark:text-sky-400">
            AI
          </span>
        </div>
        {showTagline && (
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">
            Virtual Dental Receptionist
          </span>
        )}
      </div>

    </div>
  )
}

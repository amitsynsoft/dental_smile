"use client"

import React from "react"
import Script from "next/script"

export function ElevenLabsWidget() {
  return (
    <>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
      />
      {React.createElement("elevenlabs-convai", {
        "agent-id": "agent_5001kx04pxkffyw89x7c2b6j5rtx",
      })}
    </>
  )
}

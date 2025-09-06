"use client"

import { useEffect, useRef } from "react"

interface SketchfabEmbedProps {
  modelId: string
  className?: string
}

export function SketchfabEmbed({ modelId, className = "" }: SketchfabEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current
      iframe.src = `https://sketchfab.com/models/${modelId}/embed`
    }
  }, [modelId])

  return (
    <div className={`relative w-full h-full ${className}`}>
      <iframe
        ref={iframeRef}
        title="Sketchfab 3D Model"
        className="w-full h-full rounded-lg"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking="true"
        execution-while-out-of-viewport="true"
        execution-while-not-rendered="true"
        web-share="true"
      />
    </div>
  )
}

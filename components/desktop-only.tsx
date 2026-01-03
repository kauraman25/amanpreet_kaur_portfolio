"use client"

import { useEffect, useState } from "react"

export function DesktopOnly({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    )

    const update = () => setIsDesktop(mediaQuery.matches)

    update()
    mediaQuery.addEventListener("change", update)

    return () => mediaQuery.removeEventListener("change", update)
  }, [])

  if (!isDesktop) return null

  return <>{children}</>
}

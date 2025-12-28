"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const cursorRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number>()
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize particles
    const particleCount = 80
    particlesRef.current = []
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      })
    }

    // Track cursor
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      const isDark = theme === "dark"
      ctx.fillStyle = isDark ? "rgba(0, 0, 0, 0.15)" : "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      if (isDark) {
        gradient.addColorStop(0, "rgba(0, 0, 0, 0.05)")
        gradient.addColorStop(0.5, "rgba(10, 5, 20, 0.05)")
        gradient.addColorStop(1, "rgba(0, 10, 15, 0.05)")
      } else {
        gradient.addColorStop(0, "rgba(15, 15, 30, 0.02)")
        gradient.addColorStop(0.5, "rgba(20, 15, 35, 0.02)")
        gradient.addColorStop(1, "rgba(15, 20, 30, 0.02)")
      }
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const cursor = cursorRef.current

      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off walls
        if (particle.x - particle.radius < 0 || particle.x + particle.radius > canvas.width) {
          particle.vx *= -1
        }
        if (particle.y - particle.radius < 0 || particle.y + particle.radius > canvas.height) {
          particle.vy *= -1
        }

        // Keep in bounds
        particle.x = Math.max(particle.radius, Math.min(canvas.width - particle.radius, particle.x))
        particle.y = Math.max(particle.radius, Math.min(canvas.height - particle.radius, particle.y))

        // Cursor interaction
        const dx = cursor.x - particle.x
        const dy = cursor.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const minDistance = 150

        if (distance < minDistance) {
          const angle = Math.atan2(dy, dx)
          const force = (minDistance - distance) / minDistance
          particle.vx -= Math.cos(angle) * force * 1
          particle.vy -= Math.sin(angle) * force * 1

          // Limit velocity
          const speed = Math.sqrt(particle.vx ** 2 + particle.vy ** 2)
          if (speed > 1.5) {
            particle.vx = (particle.vx / speed) * 1.5
            particle.vy = (particle.vy / speed) * 1.5
          }

          particle.opacity = Math.min(1, particle.opacity + 0.05)
        } else {
          particle.opacity = Math.max(0.3, particle.opacity - 0.02)
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        const particleColor = isDark
          ? `rgba(150, 100, 255, ${particle.opacity})`
          : `rgba(100, 150, 255, ${particle.opacity})`
        ctx.fillStyle = particleColor
        ctx.fill()

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j]
          const dx2 = other.x - particle.x
          const dy2 = other.y - particle.y
          const dist = Math.sqrt(dx2 * dx2 + dy2 * dy2)

          if (dist < 100) {
            ctx.strokeStyle = isDark
              ? `rgba(150, 100, 255, ${0.1 * (1 - dist / 100)})`
              : `rgba(100, 150, 255, ${0.1 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        }
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [theme])

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 z-0 bg-background" />
      <CustomCursor />
    </>
  )
}

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed z-50 pointer-events-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Outer ring */}
      <div className="absolute w-6 h-6 border border-primary rounded-full opacity-60" />
      {/* Inner dot */}
      <div className="absolute w-1 h-1 bg-primary rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  )
}

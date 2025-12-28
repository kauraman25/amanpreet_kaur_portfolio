"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
                Hi, I'm Amanpreet Kaur
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed">
                A passionate Software Developer crafting beautiful and functional web experiences. I specialize in
                modern web technologies and love turning ideas into reality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="" onClick={() => scrollToSection("projects")}>
                See My Work
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-foreground/60">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">1+</p>
                <p className="text-sm text-foreground/60">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-foreground/60">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right side - Image placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center border border-primary/20">
              <img src="/amanpreet.jpg" alt="Profile" className="w-full h-full rounded-2xl object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const experiences = [
  {
    role: "Software Developer Intern",
    company: {name: "Apertotek", url: "https://www.apertotek.com/"},
    period: "July 2025 - Present",
    description:
      "Working on a Document Reminder Web Application using Next.js (App Router) and shadcn/ui, with implemented user authentication and authorization to secure application access. Currently working on an OCR model using Tesseract to automatically extract document details and minimize manual data entry. Implemented a crypto module using the Advanced Encryption Standard (AES) algorithm for encryption, decryption,and masking to securely store sensitive document numbers on both the frontend and backend. Configured Nodemailer to send email notifications prior to document expiration and integrated Vercel Cron Jobs to schedule and trigger automated document expiry reminders. Schedule and trigger automated document expiry reminders.",
  },
  {
    role: "Software Developer Intern",
    company:{ name: "DreamSoft4u pvt ltd", url: "https://www.dreamsoft4u.com/"},
    period: "May 2024 - October 2024",
    description:
     "Developed a fully responsive web application using React.js, Node.js, and Material-UI for 1,000+ patients, improving cross-device usability and user experience. Designed a patient appointment booking system for VCDoctor and integrated secure RESTful APIs with CRUD functionality, boosting scheduling efficiency by 10% and enabling real-time data management."
  },

]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <Card key={i} className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{exp.role}</CardTitle>
                    <Link href={exp.company.url} target="_blank">
                      <CardDescription className="text-base mt-1 cursor-pointer hover:text-violet-500">{exp.company.name}</CardDescription>
                    </Link>
                  </div>
                  <span className="text-sm text-primary font-semibold">{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

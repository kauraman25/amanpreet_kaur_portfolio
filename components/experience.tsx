"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Apertotek",
    period: "July 2025 - Present",
    description:
      "Working on developing and maintaining web applications using React, Node.js, and MongoDB. Collaborating with cross-functional teams to deliver high-quality software solutions.",
  },
  {
    role: "Software Developer Intern",
    company: "DreamSoft4u pvt ltd",
    period: "May 2024 - October 2024",
    description:
      "Contributed to frontend and backend development of client projects. Gained experience in Agile methodologies and improved coding skills through code reviews and pair programming.",
  },
  // {
  //   role: "Junior Developer",
  //   company: "StartUp Hub",
  //   period: "2019 - 2020",
  //   description: "Built RESTful APIs and frontend components. Contributed to product development from scratch.",
  // },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <Card key={i} className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{exp.role}</CardTitle>
                    <CardDescription className="text-base mt-1">{exp.company}</CardDescription>
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

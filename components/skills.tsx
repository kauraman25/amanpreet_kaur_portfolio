"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "MySQL", "MongoDB", "REST APIs"],
  },
  {
    name: "Tools & DevOps",
    skills: ["Git", "Postman", "AWS", "GitHub Actions", "Vercel"],
  },
  {
    name: "Other",
    skills: ["Problem Solving", "UI/UX Design", "OOP", "Team Leadership"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, i) => (
            <Card key={i} className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.skills.map((skill, j) => (
                    <li key={j} className="flex items-center gap-2 text-foreground/80">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

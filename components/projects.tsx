"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Hotel Booking System",
    description: "Full-featured hotel booking platform with room management and reservations.",
    image: "/Hotel.png",
    tags: ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS", "REST API", "JWT", "bcrypt"],
    github: "https://github.com/kauraman25/hotel-booking-client",
    live: "https://findyourcomfort.vercel.app/",
  },
  {
    title: "Document Reminder Module",
    description: "Document management board with document reminders, deadlines, and notifications.",
    image: "/docremind.png",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "nodemailer", "JWT", "bcrypt", "shadcn/ui"],
    github: "#",
    live: "https://document-reminder-omega.vercel.app",
  },
  {
    title: "Social Media Application",
    description: "Social media platform with user profiles, posts, comments, likes, and real-time chat.",
    image: "/socialmedia.png",
    tags: ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS", "REST API", "JWT", "bcrypt", "clerk/auth", "imagekit"],
    github: "https://github.com/kauraman25/Social-media-app",
    live: "https://social-media-app-two-theta.vercel.app/",
  },
  {
    title: "Ai Video to Gif Converter",
    description: "Convert videos to high-quality GIFs using AI-powered processing for optimal results.",
    image: "/gif.png",
    tags: ["React.js", "python", "fastapi","moviepy","numpy", "faster-whisper","opencv-python"],
    github: "https://github.com/kauraman25/video-gif-frontend",
    live: "https://video-gif-frontend.vercel.app/",
  },
  {
    title: "Live Chat Application",
    description: "Real-time chat application with multiple chat rooms and private messaging features.",
    image: "/livechat.png",
    tags: ["React.js", "Node.js", "Express", "Socket.io", "Tailwind CSS", "JWT", "bcrypt"],
    github: "https://github.com/kauraman25/live-chat-client",
    live: "https://live-chat-client-eight.vercel.app/",
  },
  {
    title: "Quiz web app",
    description: "Interactive quiz application with dynamic question generation using quiz API and real-time updates.",
    image: "/quiz.png",
    tags: ["React", "Quiz API", "gh-pages", "MUI-template", "JavaScript", "HTML", "CSS", "REST API"],
    github: "https://github.com/kauraman25/quiz-application",
    live: "https://quiz-application-pi-three.vercel.app/#/",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Card
              key={i}
              className="bg-card/50 border-border/50 overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

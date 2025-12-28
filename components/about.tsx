"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Description */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              My name is Amanpreet Kaur, a Software developer with a passion for
              creating elegant solutions to complex problems.I have completed my
              master's degree in Computer Applications with an over all CGPA
              8.45 from Poornima University, Jaipur, Rajasthan with a strong background
              in technology and 2+ years of professional experience,
              I've worked with startups and established companies to build
              scalable web applications.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              My journey in tech started with a curiosity about how things work,
              which led me to pursue a degree in Computer Science. Since then,
              I've continuously evolved my skills and stayed updated with the
              latest technologies.
            </p>
            <div className="space-y-6">
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle>Location</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/80">
                    Currently based in Rajasthan, India
                  </p>
                  {/* <div className="w-full h-48 rounded-lg bg-primary/10 flex items-center justify-center border border-border">
                  <svg className="w-12 h-12 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div> */}
                </CardContent>
              </Card>

              {/* <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Building scalable web applications</li>
                  <li>• Open source contributions</li>
                  <li>• Teaching and mentoring developers</li>
                  <li>• Exploring new technologies</li>
                </ul>
              </CardContent>
            </Card> */}
            </div>
          </div>

          {/* Right - Location and Info */}
          <div className="space-y-4 ">
            <h3 className="text-xl font-semibold">Education</h3>
            <Card className="bg-card/50 border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">
                  Master of Computer Applications
                </CardTitle>
                <CardDescription>
                  Poornima University, 2023-2025
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">
                  Bachelor of Science in Mathematics
                </CardTitle>
                <CardDescription>
                  Maharaja Surajmal Brij University, 2020-2023
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">
                  Higher Secondary School (PCM)
                </CardTitle>
                <CardDescription>
                  Ascent Education Sr. Sec. School, 2019-2020
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">
                  Secondary School (GEN)
                </CardTitle>
                <CardDescription>
                  Gyan Ganga Sr. Sec. School, 2018-2019
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

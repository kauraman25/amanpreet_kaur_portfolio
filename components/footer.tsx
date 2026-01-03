"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card/30 border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Amanpreet.</h3>
            <p className="text-foreground/60 text-sm">Building beautiful and functional web experiences</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#home" className="hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-foreground transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="https://github.com/kauraman25" className="hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/amanpreet-kaur-053940245/" className="hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://leetcode.com/u/kauraman200225/" className="hover:text-foreground transition-colors">
                  LeetCode
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-foreground/60">
          <p>&copy; {currentYear} All rights reserved.</p>
          <p>Crafted with passion using Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

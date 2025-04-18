"use client";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      // Add offset to account for fixed header
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="py-8 border-t border-foreground/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Fuzhen (Will) Zhan</h3>
            <p className="text-foreground/70 mb-4">
              Software Engineer & Information Security Specialist at Carnegie Mellon University.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/dadaWilliam" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground">
                <span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/fuzhen-zhan" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <ul className="space-y-2 text-foreground/70">
              <li><button onClick={() => scrollToSection("about")} className="hover:text-foreground">About</button></li>
              <li><button onClick={() => scrollToSection("projects")} className="hover:text-foreground">Projects</button></li>
              <li><button onClick={() => scrollToSection("skills")} className="hover:text-foreground">Skills</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="hover:text-foreground">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-foreground/70">
              <li>fzhan@andrew.cmu.edu</li>
              {/* <li>+1 8786001215</li> */}
              <li>Pittsburgh, PA, USA</li>
              <li>Mountain View, CA, USA</li>
              <li>Chongqing, China</li>
              <li>Chengdu, China</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-foreground/10 pt-8 text-center">
          <p>© {new Date().getFullYear()} Fuzhen (Will) Zhan. All rights reserved.</p>
          <p className="text-foreground/60 mt-2">Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
} 
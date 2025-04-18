"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = ["about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100; // Add some offset
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
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
    <header className={`fixed w-full bg-background/80 backdrop-blur-sm z-10 transition-all duration-300 ${scrolled ? "shadow-md py-3" : "py-5"} border-b border-foreground/10`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          William
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <button 
                onClick={() => scrollToSection("about")} 
                className={`hover:text-foreground/70 transition ${activeSection === "about" ? "text-primary font-medium" : ""}`}
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("projects")} 
                className={`hover:text-foreground/70 transition ${activeSection === "projects" ? "text-primary font-medium" : ""}`}
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("skills")} 
                className={`hover:text-foreground/70 transition ${activeSection === "skills" ? "text-primary font-medium" : ""}`}
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("contact")} 
                className={`hover:text-foreground/70 transition ${activeSection === "contact" ? "text-primary font-medium" : ""}`}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-foreground/10 shadow-lg">
            <nav className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-4">
                <li>
                  <button 
                    onClick={() => scrollToSection("about")} 
                    className={`block py-2 hover:text-foreground/70 transition text-left w-full ${activeSection === "about" ? "text-primary font-medium" : ""}`}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("projects")} 
                    className={`block py-2 hover:text-foreground/70 transition text-left w-full ${activeSection === "projects" ? "text-primary font-medium" : ""}`}
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("skills")} 
                    className={`block py-2 hover:text-foreground/70 transition text-left w-full ${activeSection === "skills" ? "text-primary font-medium" : ""}`}
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("contact")} 
                    className={`block py-2 hover:text-foreground/70 transition text-left w-full ${activeSection === "contact" ? "text-primary font-medium" : ""}`}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <li><a href="#about" className="hover:text-foreground/70 transition">About</a></li>
            <li><a href="#projects" className="hover:text-foreground/70 transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-foreground/70 transition">Skills</a></li>
            <li><a href="#contact" className="hover:text-foreground/70 transition">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-foreground/10 shadow-lg">
            <nav className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-4">
                <li>
                  <a 
                    href="#about" 
                    className="block py-2 hover:text-foreground/70 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className="block py-2 hover:text-foreground/70 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#skills" 
                    className="block py-2 hover:text-foreground/70 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="block py-2 hover:text-foreground/70 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 
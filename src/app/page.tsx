"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('.reveal-section').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 reveal-section opacity-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm William</h1>
              <h2 className="text-xl md:text-2xl text-foreground/70 mb-6">Frontend Developer & UI/UX Designer</h2>
              <p className="text-lg mb-8 max-w-md">
                I craft responsive websites where technology meets creativity to create 
                impactful digital experiences.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="btn btn-primary"
                >
                  Contact Me
                </button>
                <button 
                  onClick={() => scrollToSection("projects")} 
                  className="btn btn-outline"
                >
                  View Work
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-foreground/10">
                {/* Replace with your actual profile image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">
                  W
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-foreground/5 reveal-section opacity-0">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              I'm a passionate frontend developer with a strong background in creating 
              intuitive and beautiful user interfaces. With expertise in modern 
              frameworks like React and Next.js, I focus on building fast, accessible, 
              and responsive web applications.
            </p>
            <p className="text-lg mb-6">
              My journey in web development began 5 years ago, and since then I've worked 
              on various projects ranging from small business websites to complex web 
              applications. I'm constantly learning and adapting to new technologies and trends.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me hiking in nature, reading science fiction, 
              or experimenting with new cooking recipes.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 reveal-section opacity-0">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="border border-foreground/10 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">E-commerce Website</h3>
                <p className="text-foreground/70 mb-4">
                  A full-featured online store built with Next.js, Tailwind CSS, and Stripe integration.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">Next.js</span>
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">Stripe</span>
                </div>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">View Project →</a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border border-foreground/10 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Task Management App</h3>
                <p className="text-foreground/70 mb-4">
                  A productive task manager with drag-and-drop functionality and user authentication.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">React</span>
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">Firebase</span>
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">React DnD</span>
                </div>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">View Project →</a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="border border-foreground/10 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-r from-red-400 to-orange-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                <p className="text-foreground/70 mb-4">
                  A personal portfolio built with Next.js and Tailwind CSS featuring dark mode support.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">Next.js</span>
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">Framer Motion</span>
                </div>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">View Project →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-foreground/5 reveal-section opacity-0">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {/* Skill items */}
            {[
              "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
              "Tailwind CSS", "Git", "Figma", "Responsive Design", "Node.js", "Firebase"
            ].map((skill, index) => (
              <div key={index} className="flex flex-col items-center p-4 border border-foreground/10 rounded-lg hover:border-foreground/30 transition">
                <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center mb-2">
                  <span className="text-xl">{skill.charAt(0)}</span>
                </div>
                <span className="font-medium text-center">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 reveal-section opacity-0">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-3 border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full btn btn-primary"
              >
                Send Message
              </button>
            </form>
            <div className="mt-8 flex justify-center space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground">
                <span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ThreeJsProfile from "../components/ThreeJsProfile";

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
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Will</h1>
              <h2 className="text-xl md:text-2xl text-foreground/70 mb-6">Software Engineer & Information Security Specialist</h2>
              <p className="text-lg mb-8 max-w-md">
                Master's student at Carnegie Mellon University specializing in Information Technology and Information Security. 
                Passionate about building secure, scalable, and innovative software solutions.
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
              I'm currently pursuing my Master of Science in Information Technology-Information Security at Carnegie Mellon University, 
              with a strong background in software development and information security. My academic journey includes a Bachelor's degree 
              in EEE with Communication from the University of Glasgow and a Bachelor's in Communication Engineering from UESTC.
            </p>
            <p className="text-lg mb-6">
              With expertise in full-stack development, I've worked on various projects ranging from educational platforms to 
              distributed systems. I'm particularly interested in building secure, scalable applications and exploring the 
              intersection of machine learning and software engineering.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or working on personal projects that combine my interests in security and software development.
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
                <span className="text-white text-xl font-bold">Kitefun Technology</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Educational Platform</h3>
                <p className="text-foreground/70 mb-4">
                  Co-founded Kitefun, developing an educational platform with Django, Flutter, and AWS infrastructure.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">Django</span>
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">Flutter</span>
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">AWS</span>
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">PostgreSQL</span>
                </div>
                <a href="https://xueba.ca" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">View Project →</a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border border-foreground/10 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">5G Base Station</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Configuration Platform</h3>
                <p className="text-foreground/70 mb-4">
                  Built a secure control dashboard for 5G base station configuration using Next.js and FastAPI.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">Next.js</span>
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">FastAPI</span>
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">WebSocket</span>
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">Docker</span>
                </div>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">View Project →</a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="border border-foreground/10 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-r from-red-400 to-orange-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Raft Consensus</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Distributed System</h3>
                <p className="text-foreground/70 mb-4">
                  Implemented Raft consensus algorithm in Go with leader election and fault tolerance.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">Go</span>
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">Distributed Systems</span>
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">Raft</span>
                </div>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">View Project →</a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="border border-foreground/10 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Activity Recognition</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Machine Learning Pipeline</h3>
                <p className="text-foreground/70 mb-4">
                  Developed a supervised ML pipeline for activity recognition using accelerometer data, achieving 90% accuracy.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">PyTorch</span>
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">scikit-learn</span>
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">Flask</span>
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">CNN</span>
                </div>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">View Project →</a>
              </div>
            </div>

            {/* Project 5 */}
            <div className="border border-foreground/10 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Smart Surveillance</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Object Detection System</h3>
                <p className="text-foreground/70 mb-4">
                  Built a real-time surveillance system using YOLOv10 for pedestrian and vehicle detection with 92% mAP.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">YOLOv10</span>
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">FastAPI</span>
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">Next.js</span>
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">Prometheus</span>
                </div>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">View Project →</a>
              </div>
            </div>

            {/* Project 6 */}
            <div className="border border-foreground/10 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-r from-indigo-400 to-blue-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Smart Vehicle</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Multi-functional Vehicle</h3>
                <p className="text-foreground/70 mb-4">
                  Led development of an autonomous vehicle with line detection, obstacle sensing, and automated ball throwing.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">Python</span>
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">C</span>
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">OpenMV</span>
                  <span className="px-2 py-1 bg-foreground/10 rounded text-sm">STM32</span>
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
              "Python", "JavaScript", "TypeScript", "Go", "Java", "C/C++",
              "Django", "React", "Next.js", "Flutter", "Spring Boot", "PyTorch",
              "TensorFlow", "AWS", "Docker", "PostgreSQL", "MongoDB", "Redis",
              "Git", "CI/CD", "WebSocket", "OAuth", "JWT"
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
              <a href="https://github.com/dadaWilliam" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground">
                <span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/fuzhen-zhan" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
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

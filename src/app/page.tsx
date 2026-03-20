"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ProjectCard } from "@/components/ProjectCard";
import Footer from "@/components/Footer";

export default function Home() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px", // Trigger slightly before footer hits bottom
      },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar hidden={isFooterVisible} />
      <main className="ml-[200px] pt-[50px] px-10 min-h-screen flex flex-col items-center">
        <section className="flex flex-col items-center text-center max-w-2xl mt-[38px] mb-20">
          <Image
            src="/hero-girl-dog.png"
            alt="Hero Illustration"
            width={300}
            height={300}
            className="w-auto h-[300px] object-contain -mb-16"
            priority
          />
          <h1 className="text-[#e13400] text-6xl font-bold mb-6 tracking-tight">
            Hi, I’m Nicole!
          </h1>
          <p className="text-[#e13400] text-l font-medium leading-relaxed text-balance">
            I’m a product designer with a behavioural psychology background,
            creating research-driven solutions that solve real-world problems.
          </p>
        </section>

        <section id="healthcare" className="w-full flex justify-center">
          <ProjectCard
            year="2025"
            company="TapIn"
            projectArea="Website Design"
            industry="Community Technology"
            role="Led the design of the public launch of Mainstay, Opendoor's enterprise branch, from the full website experience to brand identity."
            visitSiteUrl="#"
          />
        </section>

        <section id="fintech" className="w-full flex justify-center">
          <ProjectCard
            year="2025"
            company="KOHO"
            projectArea="Add a feature"
            industry="Finance Technology"
            role="Redesigned the core investment platform to improve user engagement and simplify complex financial data visualization for retail investors."
            visitSiteUrl="#"
          />
        </section>

        <section id="other" className="w-full flex justify-center">
          <ProjectCard
            year="2025"
            company="TXF Challenge"
            projectArea="Website Design"
            industry="Health Technology"
            role="Stay tuned for more case studies and design projects currently in development."
            visitSiteUrl="#"
          />
        </section>

        <section id="edtech" className="w-full flex justify-center">
          <ProjectCard
            year="2025"
            company="Vitalink"
            projectArea="Application Design"
            industry="Health Technology"
            role="Created an intuitive learning management system for K-12 students, focusing on accessibility and gamified progress tracking."
            visitSiteUrl="#"
          />
        </section>

        <section id="gaming" className="w-full flex justify-center">
          <ProjectCard
            year="2025"
            company="Adventure with Sprout"
            projectArea="Game Design"
            industry="Education Technology"
            role="Developed an educational gaming experience focused on environmental awareness and sustainability for young learners."
            visitSiteUrl="https://devpost.com/software/adventures-with-sprout"
          />
        </section>
      </main>

      {/* Walking Dog aligned with Navbar Fish logo and touching Footer */}
      <div className="w-full pl-10 mt-24 hidden lg:block">
        <Image
          src="/walking-dog.png"
          alt="Walking Dog"
          width={400}
          height={120}
          className="h-[120px] w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
        />
      </div>

      <Footer footerRef={footerRef} />
    </>
  );
}

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
      <main className="ml-[200px] pt-[40px] px-10 min-h-screen flex flex-col items-center">
        <section className="flex flex-col items-center text-center max-w-2xl mt-[0px] mb-[150px]">
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

        <section id="fintech" className="w-full flex justify-center">
          <ProjectCard
            year="2025"
            company="KOHO"
            projectArea="Add a feature"
            industry="Finance Technology"
            role="Designed a smart budgeting feature for KOHO that bridges spending visibility with saving actions for young adult users. Driving engagement with Vaults that earn interest."
            visitSiteUrl="https://contra.com/p/LOgceg2b-fintech-ui-budget-feature?r=nicole_cwzib6rq"
            videoThumbnail="/koho-thumbnail.mp4"
          />
        </section>

        <section id="healthcare" className="w-full flex justify-center">
          <ProjectCard
            year="2025"
            company="TapIn"
            projectArea="Website Design"
            industry="Community Technology"
            role="Led the website experience for a community tech platform that removes friction from social connection at events, helping people spend less time on logistics and more time on building meaningful connections."
            videoThumbnail="/tapin-thumbnail.mp4"
          />
        </section>

        <section id="edtech" className="w-full flex justify-center">
          <ProjectCard
            year="2025"
            company="Vitalink"
            projectArea="Application Design"
            industry="Health Technology"
            role="Designed an end-to-end telehealth app that helps North Americans find the right physician for their needs and streamline the booking process from search to appointment."
            visitSiteUrl="https://contra.com/p/vbesoelk-easing-tele-health-communication-with-vitalink?r=nicole_cwzib6rq"
            videoThumbnail="/vitalink-thumbnail.mp4"
          />
        </section>

        <section id="other" className="w-full flex justify-center">
          <ProjectCard
            year="2025"
            company="TXF Challenge"
            projectArea="Website Design"
            industry="Health Technology"
            role="Stay tuned for more case studies and design projects currently in development."
            videoThumbnail="/txf-thumbnail.mp4"
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
            videoThumbnail="/adventure-thumbnail.mp4"
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

"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px",
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
      <main className="ml-[200px] pt-[100px] min-h-screen">
        <div className="max-w-[830px] mx-auto px-8 pb-24">
          {/* Page title */}
          <h1 className="text-center text-[#e13400] text-6xl font-bold mb-16">
            About me
          </h1>

          {/* In a nutshell */}
          <section className="mb-14">
            <h2 className="text-[#e13400] text-2xl font-normal mb-6">
              In a nutshell
            </h2>
            <p className="text-[#1a1a1a] text-base leading-relaxed mb-5">
              Half designer, half behaviour nerd! I love decoding users&apos;s
              needs, turning human quirks into practical designs, and chasing
              that &ldquo;aha&rdquo; moment where it all just works. My
              favourite part of design is solving problems that make life a
              little easier for someone else.
            </p>
            <p className="text-[#1a1a1a] text-base leading-relaxed">
              From start-ups to small-size enterprises, to non-profits and
              beyond, I have experiences working with clients to enhance their
              brand, web presence, and creating from zero to one. I offer
              services that help your businesses stand out and thrive!
            </p>
          </section>

          {/* Personal life */}
          <section className="mb-14">
            <h2 className="text-[#e13400] text-2xl font-normal mb-6">
              Personal life
            </h2>
            <p className="text-[#1a1a1a] text-base leading-relaxed">
              When I&apos;m not designing, I will be printing cute stuff with my
              3D printer, learning new skills, playing volleyball, piano, taking
              a long walk with my imaginary pup hehe, and photographing (you can
              check out my insta{" "}
              <a
                href="https://www.instagram.com/momentwithnini/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e13400] hover:opacity-70 transition-opacity"
              >
                @momentwithnini
              </a>
              ).
            </p>
          </section>

          {/* Experience */}
          <section className="mb-14">
            <h2 className="text-[#e13400] text-2xl font-normal mb-6">
              Experience
            </h2>
            <div className="flex flex-col gap-3">
              {[
                { name: "30 Days of Product", period: "2025–Present" },
                { name: "TapIn", period: "2025–2026" },
                { name: "Tabi Wellbeing", period: "2025" },
                { name: "ROOTS", period: "2025" },
                { name: "DesignLab", period: "2024–2025" },
                { name: "University of British Columbia", period: "2022–2024" },
              ].map(({ name, period }) => (
                <div key={name} className="flex justify-between items-baseline">
                  <span className="text-[#1a1a1a] text-base">{name}</span>
                  <span className="text-[#1a1a1a] text-base tabular-nums">
                    {period}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer footerRef={footerRef} />
    </>
  );
}

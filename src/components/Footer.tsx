"use client";

import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";

interface FooterProps {
  footerRef?: React.RefObject<HTMLDivElement | null>;
}

export default function Footer({ footerRef }: FooterProps) {
  return (
    <footer
      ref={footerRef}
      className="w-full bg-[#e13400] text-white py-20 pb-24 relative flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Top: Icon + Name */}
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Nicole Yu Logo"
            width={80}
            height={20}
            className="h-[20px] w-auto brightness-0 invert"
          />
          <span
            className="text-white text-5xl font-normal"
            style={{
              fontFamily: "'Dancing Script', cursive",
            }}
          >
            Nicole Yu
          </span>
        </div>
      </div>

      {/* Middle: Social Icons */}
      <div className="flex gap-8 mb-10">
        <a
          href="mailto:nicoleeyts1@gmail.com"
          className="hover:scale-110 transition-transform opacity-90 hover:opacity-100"
          aria-label="Email"
        >
          <Mail size={28} strokeWidth={1.5} />
        </a>
        <a
          href="https://linkedin.com/in/nicoleyts"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform opacity-90 hover:opacity-100"
          aria-label="LinkedIn"
        >
          <Linkedin size={28} strokeWidth={1.5} />
        </a>
      </div>

      {/* Bottom info: Email and Copyright */}
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-base font-light opacity-95">
          nicoleeyts1[at]gmail[dot]com
        </p>
        <p className="text-xs font-light tracking-widest opacity-70 mt-4">
          Copyright © 2026 Nicole Yu
        </p>
      </div>
    </footer>
  );
}

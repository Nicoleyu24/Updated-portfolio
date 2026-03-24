"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const handleLogoClick = (e: React.MouseEvent) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6 bg-white">
      <Link
        href="/"
        onClick={handleLogoClick}
        className="transition-opacity hover:opacity-50"
      >
        <Image
          src="/logo.png"
          alt="Nicole Yu"
          width={120}
          height={32}
          className="h-8 w-auto"
        />
      </Link>
    </nav>
  );
}

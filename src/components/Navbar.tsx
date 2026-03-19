import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6 bg-white">
      <Link
        href="/"
        className="text-[#e13400] text-[16px] font-medium no-underline transition-opacity hover:opacity-50"
      >
        Nicole Yu
      </Link>
    </nav>
  );
}

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6 bg-white">
      <Link
        href="/"
        className="transition-opacity hover:opacity-50"
      >
        <img
          src="/logo.png"
          alt="Nicole Yu"
          className="h-8 w-auto"
        />
      </Link>
    </nav>
  );
}

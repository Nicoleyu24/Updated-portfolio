import Link from "next/link";

const menuGroups = [
  {
    label: "About",
    href: "/about",
    items: [],
  },
  {
    label: "Projects",
    items: [
      { label: "KOHO", href: "#fintech" },
      { label: "TapIn", href: "#healthcare" },
      { label: "Vitalink", href: "#edtech" },
      { label: "TXF", href: "#other" },
      { label: "Sprout", href: "#gaming" },
    ],
  },
  {
    label: "Design Engineering",
    items: [
      {
        label: "Cardy",
        href: "https://contra.com/community/cgq2MrgX-no-more-elbowing-each-others-for",
        external: true,
      },
    ],
  },
  {
    label: "Side Project",
    items: [
      {
        label: "Moodie",
        href: "https://www.nicoleyts.work/case-studies/moodie",
        external: true,
      },
    ],
  },
  {
    label: "Contact",
    items: [
      { label: "Email", href: "mailto:nicoleeyts1@gmail.com" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/nicoleyproduct",
        external: true,
      },
      { label: "X", href: "https://twitter.com/", external: true },
    ],
  },
];

interface SidebarProps {
  hidden?: boolean;
}

export default function Sidebar({ hidden }: SidebarProps) {
  return (
    <aside
      className={`fixed top-[140px] left-10 z-40 flex flex-col gap-10 transition-all duration-500 ${
        hidden
          ? "opacity-0 pointer-events-none translate-x-[-20px]"
          : "opacity-100"
      }`}
    >
      {menuGroups.map((group) => (
        <div key={group.label} className="flex flex-col gap-4">
          {group.href ? (
            <Link
              href={group.href}
              className="text-[#e13400] text-[15px] font-medium no-underline"
            >
              {group.label}
            </Link>
          ) : (
            <span className="text-[#e13400] text-[15px] font-medium">
              {group.label}
            </span>
          )}

          {group.items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[#666] text-[15px] no-underline transition-colors hover:text-[#1a1a1a]"
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {item.label}
            </a>
          ))}
        </div>
      ))}
    </aside>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

const menuGroups = [
  {
    label: "About",
    href: "/about",
    items: [],
  },
  {
    label: "Projects",
    items: [
      { label: "TapIn", href: "/#healthcare" },
      { label: "Tabi Well-bing", href: "/#tabiwell" },
      { label: "KOHO", href: "/#fintech" },
      { label: "Vitalink", href: "/#edtech" },
      { label: "TXF", href: "/#other" },
      { label: "Sprout", href: "/#gaming" },
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
      {
        label: "Motion Lab",
        href: "https://motionlabnyfish.vercel.app/",
        external: true,
      },
    ],
  },
  {
    label: "Side Project",
    items: [
      {
        label: "Moodie",
        href: "https://contra.com/p/qBUvgoXs-design-and-development-of-moodie-cbt-app?r=nicole_cwzib6rq",
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
      {
        label: "Github",
        href: "https://github.com/Nicoleyu24",
        external: true,
      },
      {
        label: "Contra",
        href: "https://contra.com/nicole_cwzib6rq/work?r=nicole_cwzib6rq",
        external: true,
      },
    ],
  },
];

interface SidebarProps {
  hidden?: boolean;
}

export default function Sidebar({ hidden }: SidebarProps) {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  const toggle = (label: string) => {
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside
      className={`fixed top-[140px] left-10 z-40 flex flex-col gap-6 transition-all duration-500 ${
        hidden
          ? "opacity-0 pointer-events-none translate-x-[-20px]"
          : "opacity-100"
      }`}
    >
      {menuGroups.map((group) => {
        const isOpen = !!openGroups[group.label];
        const hasItems = group.items.length > 0;

        return (
          <div key={group.label} className="flex flex-col gap-2">
            {/* Group header */}
            {group.href && !hasItems ? (
              <Link
                href={group.href}
                className="text-[#e13400] text-[15px] font-medium no-underline"
              >
                {group.label}
              </Link>
            ) : (
              <button
                onClick={() => toggle(group.label)}
                className="flex items-center gap-1 text-[#e13400] text-[15px] font-medium text-left bg-transparent border-none p-0 cursor-pointer"
              >
                {group.label}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  className={`transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
                >
                  <path
                    d="M2 3.5L5 6.5L8 3.5"
                    stroke="#e13400"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}

            {/* Dropdown items */}
            {hasItems && isOpen && (
              <div className="flex flex-col gap-3 pl-1 pt-1">
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
            )}
          </div>
        );
      })}
    </aside>
  );
}

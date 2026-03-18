const menuGroups = [
  {
    label: "About",
    href: "#about",
    items: [],
  },
  {
    label: "Projects",
    items: [
      { label: "Healthcare", href: "#" },
      { label: "Fintech", href: "#" },
      { label: "Edtech", href: "#" },
    ],
  },
  {
    label: "Design Engineering",
    items: [
      { label: "Healthcare", href: "#" },
      { label: "Fintech", href: "#" },
      { label: "Edtech", href: "#" },
    ],
  },
  {
    label: "Contact",
    items: [
      { label: "Email", href: "mailto:nicoleeyts1@gmail.com" },
      { label: "LinkedIn", href: "https://linkedin.com/", external: true },
      { label: "X", href: "https://twitter.com/", external: true },
    ],
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed top-[140px] left-10 z-40 flex flex-col gap-10">
      {menuGroups.map((group) => (
        <div key={group.label} className="flex flex-col gap-4">
          {group.href ? (
            <a
              href={group.href}
              className="text-[#e13400] text-[15px] font-medium no-underline"
            >
              {group.label}
            </a>
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
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {item.label}
            </a>
          ))}
        </div>
      ))}
    </aside>
  );
}

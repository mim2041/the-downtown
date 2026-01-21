"use client";

import { Facebook, Youtube, Twitter, Rss } from "lucide-react";
import Link from "next/link";
import React, { useMemo, useRef, useState } from "react";

type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
  { label: "Politics", href: "/politics" },
  { label: "Business", href: "/business" },
  { label: "National", href: "/national" },
  { label: "Culture", href: "/culture" },
  { label: "Opinion", href: "/opinion" },
  { label: "Lifestyle", href: "/lifestyle" },
  { label: "Sports", href: "/sports" },
];

function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      {...props}
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function IconSearch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

function IconChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 6l4 4 4-4" />
    </svg>
  );
}

function LogoDesktop() {
  return (
    <div className="py-8 flex justify-center items-center ">
      <h1 className="text-center font-bold uppercase text-4xl tracking-wide">
        The Downtown
      </h1>
    </div>
  );
}

function LogoMobile() {
  return (
    <div className="leading-none">
      <div className="flex items-center justify-center gap-2">
        <div className="w-14 h-1 bg-black" />
        <p className="text-center font-bold uppercase text-lg tracking-wide">
          The
        </p>
        <div className="w-14 h-1 bg-black" />
      </div>
      <p className="text-center font-bold uppercase text-2xl -mt-1 tracking-wide">
        Downtown
      </p>
    </div>
  );
}

function Sidebar({
  open,
  onClose,
  items,
}: {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      aria-hidden={!open}
      className={[
        "fixed inset-0 z-50 transition",
        open ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
    >
      <button
        aria-label="Close menu overlay"
        onClick={onClose}
        className={[
          "absolute inset-0 bg-black/40 transition-opacity",
          open ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />

      {/* Close button at far right of viewport, outside the panel */}
      <button
        onClick={onClose}
        className={[
          "absolute right-6 top-6 z-60 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-black/60 text-white shadow-lg backdrop-blur",
          "hover:bg-black",
        ].join(" ")}
        aria-label="Close menu"
      >
        <IconX className="h-5 w-5" />
      </button>

      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={[
          "absolute left-0 top-0 h-full w-[350px] max-w-[85vw] bg-white shadow-xl outline-none",
          "transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="flex h-full flex-col ">
          <div className="relative p-6">
            <input
              placeholder="Search..."
              className="w-full rounded-full border border-neutral-200 bg-white px-4 py-3 pr-10 text-sm outline-none focus:border-neutral-400"
            />
            <IconSearch className="absolute right-10 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-600" />
          </div>
            <hr className="border-neutral-200" />
          <nav className=" flex-1 overflow-y-auto p-6">
            <ul className="space-y-5">
              {items.map((it) => (
                <li key={it.label}>
                  <a
                    href={it.href}
                    className="block text-lg font-semibold text-neutral-900 hover:text-neutral-700"
                    onClick={onClose}
                  >
                    {it.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 pt-4 text-xs text-neutral-500 mb-2 p-6">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/"><Facebook /></Link>
                <Link href="/"><Twitter /></Link>
                <Link href="/"><Youtube /></Link>
                <Link href="/"><Rss /></Link>
            </div>
            <p>© 2026 <span className="underline">JNews</span> - Premium WordPress news & magazine theme by <span className="underline">Jegtheme</span>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const nav = useMemo(() => navItems, []);

  return (
    <header className="w-full bg-white">
      {/* Desktop (lg+) */}
      <div className="hidden lg:block">
        <LogoDesktop />
        <div className="border-t border-black">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5">
            <button
              className="inline-flex items-center gap-2 text-black hover:text-neutral-700"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <IconMenu className="h-6 w-6" />
            </button>

            <nav aria-label="Primary" className="flex-1">
              <ul className="flex items-center justify-center gap-7">
                {nav.map((it) => {
                  const isHome = it.label === "Home";
                  return (
                    <li key={it.label}>
                      <a
                        href={it.href}
                        className="inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-[0.12em] text-black hover:text-neutral-700"
                      >
                        {it.label}
                        {isHome && (
                          <IconChevronDown className="h-3 w-3 -mt-px" />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <button
              className="inline-flex items-center justify-center text-black hover:text-neutral-700"
              aria-label="Search"
            >
              <IconSearch className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet (<lg) – single fixed bar with logo */}
      <div className="lg:hidden">
        <div className="fixed left-0 right-0 top-0 z-40 border-b border-black bg-white">
          <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4">
            <button
              className="inline-flex h-11 w-11 items-center justify-center hover:bg-neutral-100"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <IconMenu className="h-7 w-7" />
            </button>

            <div className="flex-1 px-3">
              <div className="mx-auto max-w-[260px]">
                <LogoMobile />
              </div>
            </div>

            <button
              className="inline-flex h-11 w-11 items-center justify-center hover:bg-neutral-100"
              aria-label="Search"
            >
              <IconSearch className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Spacer so content isn't hidden under the fixed bar */}
        <div className="h-16" />
      </div>

      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        items={nav}
      />
    </header>
  );
};

export default Navbar;
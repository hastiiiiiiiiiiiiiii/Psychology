"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    title: "خانه",
    href: "/",
  },
  {
    title: "درباره من",
    href: "/about",
  },
  {
    title: "خدمات",
    href: "/services",
  },
  {
    title: "مجوز ها",
    href: "/certificates",
  },
  {
    title: "تماس با من",
    href: "/contact",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#5F7354] shadow-lg">
        <div className="mx-auto flex h-20 max-w-screen-xl items-center justify-between px-6 lg:px-8">
          {/* رزرو نوبت */}
          <div className="hidden md:block">
            <Link
              href="/appointment"
              className="rounded-full bg-[#FAF8F3] px-7 py-3 text-sm font-semibold text-[#5F7354] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8DFC9]"
            >
              رزرو نوبت
            </Link>
          </div>

          {/* منو */}
          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="relative text-[15px] font-medium text-[#FAF8F3] transition duration-300 hover:text-[#E8DFC9] after:absolute after:-bottom-2 after:right-0 after:h-[2px] after:w-0 after:bg-[#FAF8F3] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* لوگو */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/hodamoradi.jpg"
              alt="Hoda Moradi"
              width={52}
              height={52}
              className="rounded-full object-cover"
            />

            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-wide text-[#FAF8F3]">
                Hoda Moradi
              </span>

              <span className="text-xs text-[#E8DFC9]">
                Psychologist
              </span>
            </div>
          </Link>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-[#FAF8F3] md:hidden"
          >
            <Menu size={30} strokeWidth={2.2} />
          </button>
        </div>
      </header>

      {/* Drawer */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 ${
          isOpen
            ? "visible bg-black/40 backdrop-blur-sm"
            : "invisible bg-transparent"
        }`}
      >
        <div
          className={`absolute right-0 top-0 h-full w-[290px] bg-[#5F7354] transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 p-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="logo"
                width={45}
                height={45}
              />

              <div>
                <h2 className="font-semibold text-white">
                  Hoda Moradi
                </h2>

                <p className="text-xs text-[#E8DFC9]">
                  Psychologist
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white"
            >
              <X size={28} />
            </button>
          </div>

          {/* Links */}
          <div className="mt-8 flex flex-col px-8">
            {navLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/10 py-4 text-lg text-[#FAF8F3] transition hover:pr-2 hover:text-[#E8DFC9]"
              >
                {item.title}
              </Link>
            ))}

            <Link
              href="/appointment"
              onClick={() => setIsOpen(false)}
              className="mt-8 rounded-full bg-[#FAF8F3] py-3 text-center font-semibold text-[#5F7354] transition hover:bg-[#E8DFC9]"
            >
              رزرو نوبت
            </Link>
          </div>
        </div>

        <button
          className="absolute inset-0 -z-10"
          onClick={() => setIsOpen(false)}
        />
      </div>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const quickLinks = [
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
    title: "گواهینامه‌ها",
    href: "/certificates",
  },
  {
    title: "رزرو نوبت",
    href: "/appointment",
  },
  {
    title: "تماس با من",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#5F7354] text-[#FAF8F3]">
      <div className="mx-auto max-w-screen-xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/logo.png"
                alt="Hoda Moradi"
                width={60}
                height={60}
                className="rounded-full"
              />

              <div>
                <h2 className="text-2xl font-bold">
                  Hoda Moradi
                </h2>

                <p className="text-sm text-[#E8DFC9]">
                  Psychologist
                </p>
              </div>
            </Link>

            <p className="mt-6 leading-8 text-[#E8DFC9]">
              ایجاد فضایی امن، آرام و حرفه‌ای برای همراهی کودکان،
              نوجوانان و خانواده‌ها در مسیر رشد، سلامت روان و
              زندگی بهتر.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">
              دسترسی سریع
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="transition hover:pr-2 hover:text-[#E8DFC9]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">
              اطلاعات تماس
            </h3>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Phone size={20} />
                <span>0912 123 4567</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} />
                <span>info@example.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={20} />
                <span>تهران، ایران</span>
              </div>

              <a
                href="#"
                className="mt-6 flex w-fit items-center gap-3 rounded-full border border-white/20 px-5 py-3 transition hover:bg-white hover:text-[#5F7354]"
              >
                
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/15" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-[#E8DFC9] md:flex-row">
          <p>
            © 2026 Hoda Moradi. تمامی حقوق این وب‌سایت محفوظ است.
          </p>

          <p>
            Designed & Developed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
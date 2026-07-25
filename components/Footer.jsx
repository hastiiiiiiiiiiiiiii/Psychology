"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Clock3,
  MapPin,
} from "lucide-react";

import {
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

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
    title: "مقالات",
    href: "/articles",
  },
  {
    title: "تماس با ما",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1B231C] text-white">
      <div className="mx-auto max-w-screen-xl px-6 py-20 lg:px-8">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >
            <h2 className="text-3xl font-black">
              Hoda Moradi
            </h2>

            <p className="mt-6 leading-9 text-white/70">
              همراه شما در مسیر آرامش، رشد فردی و داشتن
              زندگی متعادل‌تر. فضایی امن، حرفه‌ای و
              قابل اعتماد برای آغاز یک تغییر مثبت.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="#"
                className="rounded-full border border-white/15 bg-white/5 p-3 transition hover:bg-[#6F8A63]"
              >
                <FaInstagram size={20} />
              </Link>

              <Link
                href="#"
                className="rounded-full border border-white/15 bg-white/5 p-3 transition hover:bg-[#6F8A63]"
              >
                <Phone size={20} />
              </Link>

              <Link
                href="#"
                className="rounded-full border border-white/15 bg-white/5 p-3 transition hover:bg-[#6F8A63]"
              >
                <Mail size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Links */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .15 }}
          >
            <h3 className="text-xl font-bold">
              دسترسی سریع
            </h3>

            <ul className="mt-8 space-y-5">
              {quickLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-white/70 transition hover:text-[#9BC18A]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .3 }}
          >
            <h3 className="text-xl font-bold">
              اطلاعات تماس
            </h3>

            <div className="mt-8 space-y-6">

              <div className="flex items-center gap-4">
                <Phone
                  size={20}
                  className="text-[#9BC18A]"
                />
                <span className="text-white/70">
                  0912 000 0000
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Mail
                  size={20}
                  className="text-[#9BC18A]"
                />
                <span className="text-white/70">
                  info@hodamoradi.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Clock3
                  size={20}
                  className="text-[#9BC18A]"
                />
                <span className="text-white/70">
                  شنبه تا چهارشنبه | ۹ الی ۱۸
                </span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin
                  size={20}
                  className="text-[#9BC18A]"
                />
                <span className="text-white/70">
                  تهران، ایران
                </span>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">

            <p className="text-sm text-white/50">
              © 2026 Hoda Moradi. تمامی حقوق محفوظ است.
            </p>

            <p className="text-sm text-white/40">
              Designed & Developed with ❤️
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}
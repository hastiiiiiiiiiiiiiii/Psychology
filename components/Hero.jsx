"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[750px] overflow-hidden">
      {/* Background Image */}

      <Image
        src="/hero.jpg"
        alt="Hoda Moradi"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/45" />

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-black/30 to-black/65" />

      {/* Content */}

      <div className="relative z-10 mx-auto flex h-full max-w-screen-xl items-center px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm backdrop-blur-md">
            همراه شما در مسیر آرامش و رشد
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
            با آرامش بیشتر،
            <br />
            زندگی متعادل‌تری بسازید.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-white/90">
            خدمات تخصصی مشاوره کودک، نوجوان و خانواده در فضایی امن،
            حرفه‌ای و همراه با احترام به شرایط منحصر‌به‌فرد هر فرد.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/appointment"
              className="rounded-full bg-[#6F8A63] px-8 py-4 font-semibold text-white transition duration-300 hover:bg-[#5D7553]"
            >
              شروع مشاوره
            </Link>

            <Link
              href="/about"
              className="rounded-full border border-white/40 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/20"
            >
              درباره من
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
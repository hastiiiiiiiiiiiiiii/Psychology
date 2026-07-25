"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeartHandshake, Sparkles, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: HeartHandshake,
    title: "همدلی",
    text: "شنیدن بدون قضاوت و همراهی در تمام مسیر.",
  },
  {
    icon: ShieldCheck,
    title: "اعتماد",
    text: "فضایی امن، محرمانه و حرفه‌ای برای گفتگو.",
  },
  {
    icon: Sparkles,
    title: "رشد فردی",
    text: "کمک به ساختن زندگی آرام‌تر و متعادل‌تر.",
  },
];

export default function AboutPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-screen-xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-8">

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px]">
            <Image
              src="/about.jpg"
              alt="Hoda Moradi"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -right-8 rounded-3xl bg-[#F8F7F2] p-6 shadow-xl">
            <p className="text-sm text-[#667065]">
              محیطی امن، آرام و حرفه‌ای
            </p>
          </div>
        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <span className="text-sm font-semibold uppercase tracking-[3px] text-[#6F8A63]">
            درباره من
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-snug text-[#384238]">
            همراه شما برای رسیدن به
            <br />
            آرامش، آگاهی و رشد
          </h2>

          <p className="mt-6 leading-9 text-[#5E665A]">
            من هدی مرادی هستم؛ روانشناس و مشاور حوزه کودک، نوجوان و خانواده.
            باور دارم هر فرد با دریافت حمایت صحیح می‌تواند مسیر تازه‌ای برای
            زندگی خود بسازد.
          </p>

          <div className="mt-10 space-y-6">

            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-5"
                >
                  <div className="rounded-2xl bg-[#EEF3EA] p-3">
                    <Icon size={24} className="text-[#6F8A63]" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#384238]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[#667065]">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

          <Link
            href="/about"
            className="mt-10 inline-flex rounded-full bg-[#6F8A63] px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#5D7553]"
          >
            بیشتر درباره من
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
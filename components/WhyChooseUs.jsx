"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartHandshake,
  GraduationCap,
  Sprout,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "فضای امن و محرمانه",
    description:
      "تمام جلسات مشاوره با حفظ کامل حریم خصوصی و در محیطی امن و قابل اعتماد برگزار می‌شوند.",
  },
  {
    icon: HeartHandshake,
    title: "همراهی با همدلی",
    description:
      "با گوش دادن فعال، احترام و درک متقابل، در تمام مسیر رشد همراه شما هستم.",
  },
  {
    icon: GraduationCap,
    title: "رویکرد علمی",
    description:
      "استفاده از روش‌های به‌روز و مبتنی بر دانش روانشناسی برای ارائه خدمات تخصصی.",
  },
  {
    icon: Sprout,
    title: "رشد پایدار",
    description:
      "هدف تنها حل یک مسئله نیست؛ بلکه ساختن مهارت‌هایی برای داشتن زندگی متعادل‌تر است.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold tracking-[3px] text-[#6F8A63]">
            چرا هدی مرادی
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#384238]">
            چرا مراجعین ما را انتخاب می‌کنند؟
          </h2>

          <p className="mt-6 leading-8 text-[#667065]">
            هدف ما تنها ارائه مشاوره نیست؛ بلکه ایجاد فضایی امن، آرام و
            حرفه‌ای است تا بتوانید با اطمینان مسیر رشد و آرامش خود را آغاز
            کنید.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group rounded-[30px] border border-[#ECE9DF] bg-[#FDFCF9] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#6F8A63]/20 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF3EA] transition duration-300 group-hover:bg-[#6F8A63]">
                  <Icon
                    size={30}
                    className="text-[#6F8A63] transition duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-8 text-xl font-bold text-[#384238]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-[#667065]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
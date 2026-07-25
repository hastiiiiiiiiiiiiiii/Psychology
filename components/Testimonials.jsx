"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "سارا م.",
    role: "مراجع مشاوره خانواده",
    text: "فضای جلسات بسیار آرام و حرفه‌ای بود. احساس کردم بدون نگرانی می‌توانم درباره مسائل خود صحبت کنم و راهکارهای کاربردی دریافت کنم.",
  },
  {
    name: "علی ر.",
    role: "والد",
    text: "راهنمایی‌های خانم مرادی کمک کرد ارتباط بهتری با فرزندم برقرار کنم. نتیجه جلسات در زندگی روزمره ما کاملاً محسوس بود.",
  },
  {
    name: "نگار ک.",
    role: "مراجع مشاوره نوجوان",
    text: "برخورد صمیمانه و در عین حال حرفه‌ای باعث شد از همان جلسه اول احساس امنیت و اعتماد داشته باشم.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F8F7F2] py-24">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold tracking-[3px] text-[#6F8A63]">
            نظرات مراجعین
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#384238]">
            تجربه همراهی مراجعین
          </h2>

          <p className="mt-6 leading-8 text-[#667065]">
            اعتماد مراجعین، ارزشمندترین سرمایه ماست. بخشی از تجربه افرادی که
            در مسیر رشد و آرامش همراه ما بوده‌اند.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              className="group rounded-[32px] bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Quote */}

              <div className="flex items-center justify-between">
                <Quote
                  size={34}
                  className="text-[#6F8A63]/25"
                />

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-[#E5B94B] text-[#E5B94B]"
                    />
                  ))}
                </div>
              </div>

              {/* Text */}

              <p className="mt-8 leading-9 text-[#667065]">
                "{item.text}"
              </p>

              {/* User */}

              <div className="mt-10 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF3EA] text-lg font-bold text-[#6F8A63]">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-[#384238]">
                    {item.name}
                  </h4>

                  <p className="text-sm text-[#7A8277]">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
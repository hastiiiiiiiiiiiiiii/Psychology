"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const services = [
  {
    title: "مشاوره کودک",
    description:
      "کمک به رشد سالم کودک، مدیریت رفتارها و تقویت ارتباط والد و فرزند.",
    image: "/child.jpg",
    href: "/services",
  },
  {
    title: "مشاوره نوجوان",
    description:
      "همراهی نوجوانان برای عبور از چالش‌های تحصیلی، عاطفی و هویتی.",
    image: "/teen.jpg",
    href: "/services",
  },
  {
    title: "مشاوره خانواده",
    description:
      "بهبود روابط خانوادگی، افزایش گفت‌وگو و حل تعارض‌های بین اعضای خانواده.",
    image: "/family.jpg",
    href: "/services",
  },
  {
    title: "فرزندپروری",
    description:
      "آموزش مهارت‌های تربیتی و ایجاد رابطه‌ای سالم و مؤثر با فرزندان.",
    image: "/parenting.jpg",
    href: "/services",
  },
];

export default function Services() {
  return (
    <section className="bg-[#F8F7F2] py-24">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold tracking-[3px] text-[#6F8A63]">
            خدمات
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#384238]">
            خدمات تخصصی روانشناسی
          </h2>

          <p className="mt-6 leading-8 text-[#667065]">
            خدمات مشاوره با رویکردی علمی، انسانی و متناسب با نیاز هر فرد،
            در محیطی آرام، امن و قابل اعتماد.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .1 }}
              className="group overflow-hidden rounded-[32px] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#384238]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-[#667065]">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-8 inline-flex items-center gap-2 font-medium text-[#6F8A63] transition hover:gap-4"
                >
                  مشاهده جزئیات

                  <ArrowLeft size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
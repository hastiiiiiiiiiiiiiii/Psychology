"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const services = [
  {
    title: "مشاوره کودک",
    image: "/child.jpg",
    description:
      "کمک به رشد عاطفی، رفتاری و اجتماعی کودکان در محیطی امن و تخصصی.",
  },
  {
    title: "مشاوره نوجوان",
    image: "/teen.jpg",
    description:
      "همراهی نوجوانان در مدیریت چالش‌های دوران رشد، تحصیل و روابط.",
  },
  {
    title: "مشاوره خانواده",
    image: "/family.jpg",
    description:
      "بهبود ارتباط میان اعضای خانواده و ایجاد فضایی سالم و آرام.",
  },
  {
    title: "فرزندپروری",
    image: "/parenting.jpg",
    description:
      "آموزش مهارت‌های تربیتی و ایجاد ارتباط مؤثر میان والدین و فرزندان.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#FAF8F3] py-28">
      <div className="mx-auto max-w-screen-xl px-6">
        {/* Title */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="rounded-full bg-[#E8DFC9] px-5 py-2 text-sm text-[#5F7354]">
            خدمات
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#364033]">
            خدمات تخصصی روانشناسی
          </h2>

          <p className="mt-6 leading-8 text-[#6F786C]">
            خدمات مشاوره با رویکردی علمی، حرفه‌ای و متناسب با نیاز هر فرد
            ارائه می‌شود تا مسیر رسیدن به آرامش و سلامت روان هموارتر شود.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-[32px] bg-white shadow-lg shadow-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-[#364033]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-[#6F786C]">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-[#5F7354] transition hover:gap-4"
                >
                  مشاهده جزئیات
                  <ArrowLeft size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
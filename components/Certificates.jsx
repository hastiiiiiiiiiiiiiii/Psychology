"use client";

import Image from "next/image";
import Link from "next/link";
import { Award } from "lucide-react";

const certificates = [
  {
    title: "پروانه فعالیت تخصصی",
    image: "/certificate1.jpg",
  },
  {
    title: "گواهینامه روانشناسی کودک",
    image: "/certificate2.jpg",
  },
  {
    title: "گواهینامه مشاوره خانواده",
    image: "/certificate3.jpg",
  },
  {
    title: "دوره‌های تخصصی روانشناسی",
    image: "/certificate4.jpg",
  },
];

export default function Certificates() {
  return (
    <section className="bg-[#F3EEE4] py-28">
      <div className="mx-auto max-w-screen-xl px-6">
        {/* Title */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="rounded-full bg-[#E8DFC9] px-5 py-2 text-sm text-[#5F7354]">
            مدارک و گواهینامه‌ها
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#364033]">
            صلاحیت حرفه‌ای و علمی
          </h2>

          <p className="mt-6 leading-8 text-[#6F786C]">
            تمامی مدارک، گواهینامه‌ها و مجوزهای حرفه‌ای با هدف ایجاد شفافیت
            و اعتماد بیشتر در اختیار مراجعین قرار گرفته‌اند.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="group overflow-hidden rounded-[32px] bg-white shadow-lg shadow-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center gap-3 p-6">
                <Award className="text-[#7D9B76]" size={26} />
                <h3 className="font-semibold text-[#364033]">
                  {certificate.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-14 text-center">
          <Link
            href="/certificates"
            className="inline-flex rounded-full bg-[#5F7354] px-8 py-4 text-white transition hover:bg-[#4E6248]"
          >
            مشاهده همه مدارک
          </Link>
        </div>
      </div>
    </section>
  );
}
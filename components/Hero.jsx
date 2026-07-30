"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F3]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#DDE6D6]/40 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[450px] w-[450px] rounded-full bg-[#E8DFC9]/50 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-screen-xl items-center px-6 pt-28 pb-20">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <div className="order-2 text-right lg:order-1">
            <span className="inline-flex items-center rounded-full border border-[#D6D0C3] bg-white px-5 py-2 text-sm text-[#5F7354] shadow-sm">
              روانشناس کودک، نوجوان و خانواده
            </span>

            <h1 className="mt-8 text-5xl font-black leading-[1.6] text-[#364033] lg:text-6xl">
              جایی برای
              <span className="text-[#7D9B76]"> شنیده شدن </span>
              و شروع دوباره
            </h1>

            <p className="mt-8 max-w-xl leading-9 text-[#6F786C]">
              اگر احساس می‌کنید در مسیر زندگی به همراهی، آرامش و راهنمایی
              تخصصی نیاز دارید، من در کنار شما هستم تا با رویکردی علمی و
              انسانی، مسیر رسیدن به آرامش و رشد را همراهی کنیم.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/appointment"
                className="flex items-center gap-2 rounded-full bg-[#5F7354] px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#4E6248]"
              >
                رزرو نوبت
                <ArrowLeft size={18} />
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-[#5F7354] px-8 py-4 text-[#5F7354] transition-all duration-300 hover:bg-[#5F7354] hover:text-white"
              >
                درباره من
              </Link>
            </div>

            {/* Features */}
            <div className="mt-16 grid gap-5 sm:grid-cols-3">
              <div className="rounded-3xl bg-white p-5 shadow-lg shadow-[#000]/5">
                <ShieldCheck
                  size={34}
                  className="mb-4 text-[#7D9B76]"
                />

                <h3 className="font-bold text-[#364033]">
                  امنیت
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#6F786C]">
                  حفظ کامل محرمانگی جلسات
                </p>
              </div>

              <div className="rounded-3xl bg-white p-5 shadow-lg shadow-[#000]/5">
                <HeartHandshake
                  size={34}
                  className="mb-4 text-[#7D9B76]"
                />

                <h3 className="font-bold text-[#364033]">
                  همراهی
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#6F786C]">
                  ارتباطی صمیمی و حرفه‌ای
                </p>
              </div>

              <div className="rounded-3xl bg-white p-5 shadow-lg shadow-[#000]/5">
                <Sparkles
                  size={34}
                  className="mb-4 text-[#7D9B76]"
                />

                <h3 className="font-bold text-[#364033]">
                  رشد
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#6F786C]">
                  کمک به ساخت آینده‌ای بهتر
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 flex justify-center lg:order-2">
            {/* Background Shape */}
            <div className="absolute h-[620px] w-[470px] rounded-[80px] bg-[#E8DFC9]" />

            <div className="relative overflow-hidden rounded-[80px] shadow-2xl">
              <Image
                src="/hero.jpg"
                alt="Hoda Moradi"
                width={550}
                height={750}
                priority
                className="h-[620px] w-[470px] object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -left-10 top-14 rounded-3xl bg-white px-6 py-5 shadow-xl">
              <p className="text-sm text-[#6F786C]">
                تخصص
              </p>

              <h4 className="mt-1 font-bold text-[#364033]">
                کودک و نوجوان
              </h4>
            </div>

            <div className="absolute -right-8 bottom-16 rounded-3xl bg-white px-6 py-5 shadow-xl">
              <p className="text-sm text-[#6F786C]">
                خدمات
              </p>

              <h4 className="mt-1 font-bold text-[#364033]">
                مشاوره خانواده
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
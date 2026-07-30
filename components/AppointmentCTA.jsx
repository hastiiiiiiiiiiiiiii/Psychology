"use client";

import Link from "next/link";
import { CalendarDays, Phone, ShieldCheck } from "lucide-react";

export default function AppointmentCTA() {
  return (
    <section className="relative overflow-hidden bg-[#5F7354] py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-28 left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-28 right-10 h-80 w-80 rounded-full bg-[#E8DFC9]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-screen-lg px-6 text-center">
        <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm text-[#FAF8F3] backdrop-blur">
          رزرو جلسه مشاوره
        </span>

        <h2 className="mt-8 text-4xl font-black leading-relaxed text-[#FAF8F3] lg:text-5xl">
          آماده‌اید اولین قدم را
          <br />
          برای آرامش خود بردارید؟
        </h2>

        <p className="mx-auto mt-8 max-w-2xl leading-9 text-[#E8DFC9]">
          اگر برای خود، فرزندتان یا خانواده‌تان به همراهی تخصصی نیاز دارید،
          می‌توانید به‌سادگی جلسه مشاوره خود را به صورت آنلاین رزرو کنید.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <Link
            href="/appointment"
            className="flex items-center gap-2 rounded-full bg-[#FAF8F3] px-8 py-4 font-semibold text-[#5F7354] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E8DFC9]"
          >
            <CalendarDays size={20} />
            رزرو نوبت
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#5F7354]"
          >
            <Phone size={20} />
            تماس با من
          </Link>
        </div>

        {/* Features */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
            <CalendarDays
              className="mx-auto mb-4 text-[#FAF8F3]"
              size={34}
            />

            <h3 className="font-bold text-white">
              رزرو آنلاین
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#E8DFC9]">
              انتخاب زمان مناسب و ثبت درخواست تنها در چند دقیقه.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
            <ShieldCheck
              className="mx-auto mb-4 text-[#FAF8F3]"
              size={34}
            />

            <h3 className="font-bold text-white">
              پرداخت امن
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#E8DFC9]">
              پرداخت آنلاین از طریق درگاه امن و دریافت تأییدیه رزرو.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
            <Phone
              className="mx-auto mb-4 text-[#FAF8F3]"
              size={34}
            />

            <h3 className="font-bold text-white">
              پاسخگویی سریع
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#E8DFC9]">
              در صورت نیاز می‌توانید از طریق تماس یا فرم سایت با ما در ارتباط باشید.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
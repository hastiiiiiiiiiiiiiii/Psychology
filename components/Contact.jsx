"use client";

import Image from "next/image";
import {
  Phone,
  MapPin,
  Clock3,
  Mail,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-[#FAF8F3] py-28">
      <div className="mx-auto grid max-w-screen-xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Image */}
        <div className="relative">
          <div className="absolute -left-8 top-8 h-full w-full rounded-[50px] bg-[#E8DFC9]" />

          <div className="relative overflow-hidden rounded-[50px] shadow-2xl">
            <Image
              src="/contact1.png"
              alt="Contact"
              width={600}
              height={750}
              className="h-[700px] w-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="rounded-full bg-[#E8DFC9] px-5 py-2 text-sm text-[#5F7354]">
            ارتباط با من
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#364033]">
            برای دریافت مشاوره با من در ارتباط باشید
          </h2>

          <p className="mt-6 leading-9 text-[#6F786C]">
            اگر سوالی دارید یا قصد رزرو جلسه مشاوره را دارید،
            از طریق راه‌های زیر با من در ارتباط باشید یا فرم
            تماس را تکمیل کنید.
          </p>

          {/* Info */}
          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-md">
              <Phone className="text-[#7D9B76]" />

              <div>
                <h4 className="font-semibold text-[#364033]">
                  شماره تماس
                </h4>

                <p className="text-[#6F786C]">
                  0912 123 4567
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-md">
              <Mail className="text-[#7D9B76]" />

              <div>
                <h4 className="font-semibold text-[#364033]">
                  ایمیل
                </h4>

                <p className="text-[#6F786C]">
                  info@example.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-md">
              <MapPin className="text-[#7D9B76]" />

              <div>
                <h4 className="font-semibold text-[#364033]">
                  آدرس
                </h4>

                <p className="text-[#6F786C]">
                  تهران، ایران
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-md">
              <Clock3 className="text-[#7D9B76]" />

              <div>
                <h4 className="font-semibold text-[#364033]">
                  ساعات پاسخگویی
                </h4>

                <p className="text-[#6F786C]">
                  شنبه تا پنجشنبه | ۹:۰۰ تا ۲۰:۰۰
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="mt-12 space-y-5">
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              className="w-full rounded-2xl border border-[#DED6C8] bg-white px-5 py-4 outline-none transition focus:border-[#5F7354]"
            />

            <input
              type="tel"
              placeholder="شماره تماس"
              className="w-full rounded-2xl border border-[#DED6C8] bg-white px-5 py-4 outline-none transition focus:border-[#5F7354]"
            />

            <textarea
              rows={5}
              placeholder="پیام شما..."
              className="w-full rounded-2xl border border-[#DED6C8] bg-white px-5 py-4 outline-none transition focus:border-[#5F7354]"
            />

            <button
              className="rounded-full bg-[#5F7354] px-10 py-4 text-white transition hover:bg-[#4E6248]"
            >
              ارسال پیام
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
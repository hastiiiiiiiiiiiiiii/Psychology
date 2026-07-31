"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function Contact() {
  return (
    <main className="overflow-hidden bg-[#FCFCF8]">

      {/* ========================================================= */}
      {/* Hero */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden">

        {/* Background */}

        <div className="absolute inset-0">

          <Image
            src="/contact-hero.jpg"
            alt="Contact Hoda Moradi"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#20311F]/65" />

          <div className="absolute inset-0 bg-gradient-to-b from-[#20311F]/30 via-[#20311F]/60 to-[#FCFCF8]" />

        </div>

        <div className="relative mx-auto flex min-h-[85vh] max-w-screen-xl items-center px-6">

          <div className="max-w-3xl text-white">

            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm uppercase tracking-[4px] backdrop-blur-md">
              CONTACT
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">

              ارتباط با من
              <br />
              آغاز یک گفت‌وگوی مطمئن

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/85">

              اگر درباره خدمات مشاوره، روند برگزاری جلسات یا
              هر موضوع دیگری پرسشی دارید، می‌توانید از طریق
              راه‌های ارتباطی یا فرم تماس پیام خود را ارسال کنید.
              تلاش می‌کنم در کوتاه‌ترین زمان ممکن پاسخگوی شما باشم.

            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/services"
                className="rounded-full bg-white px-8 py-4 font-medium text-[#5E7456] transition duration-300 hover:scale-105"
              >
                مشاهده خدمات
              </Link>

              <Link
                href="/about"
                className="flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 font-medium text-white transition duration-300 hover:bg-white hover:text-[#5E7456]"
              >
                درباره من
                <ArrowLeft size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* Introduction */}
      {/* ========================================================= */}

      <section className="py-28">

        <div className="mx-auto max-w-screen-xl px-6">

          <div className="mx-auto max-w-4xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[5px] text-[#809276]">

              GET IN TOUCH

            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#2F3A30]">

              همراه شما برای پاسخگویی و راهنمایی

            </h2>

            <p className="mt-10 text-lg leading-[2.4] text-[#67756C]">

              ارتباط مؤثر، اولین گام در مسیر دریافت خدمات مشاوره است.
              اگر نیاز به راهنمایی، هماهنگی برای جلسات یا دریافت اطلاعات
              بیشتر دارید، می‌توانید از طریق اطلاعات تماس یا فرم ارتباط،
              پیام خود را ارسال کنید.

            </p>

            <p className="mt-8 leading-9 text-[#6F7C73]">

              تمامی پیام‌ها با حفظ محرمانگی بررسی می‌شوند و تلاش خواهد شد
              در سریع‌ترین زمان ممکن پاسخ مناسبی ارائه شود تا بتوانید
              با آرامش مسیر ارتباط و دریافت خدمات را آغاز کنید.

            </p>

          </div>

        </div>

      </section>
            {/* ========================================================= */}
      {/* Contact Information */}
      {/* ========================================================= */}

      <section className="bg-[#F7F9F5] py-28">

        <div className="mx-auto max-w-screen-xl px-6">

          {/* Header */}

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[5px] text-[#809276]">
              CONTACT INFORMATION
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#2F3A30]">
              راه‌های ارتباط با من
            </h2>

            <p className="mt-6 leading-9 text-[#6C7971]">
              برای دریافت اطلاعات بیشتر، هماهنگی جلسات یا پاسخ به
              پرسش‌های شما، از راه‌های زیر می‌توانید با من در ارتباط باشید.
            </p>

          </div>





          {/* Cards */}

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {/* Phone */}

            <div className="group rounded-[32px] border border-[#E2E7DF] bg-white p-9 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-[#9CAF91] hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4EC] transition group-hover:bg-[#6D8364]">

                <Phone
                  size={30}
                  className="text-[#6D8364] transition group-hover:text-white"
                />

              </div>

              <h3 className="mt-8 text-2xl font-semibold text-[#2F3A30]">
                تلفن
              </h3>

              <p className="mt-4 text-[#6C7971] leading-8">
                0912 123 4567
              </p>

            </div>





            {/* Email */}

            <div className="group rounded-[32px] border border-[#E2E7DF] bg-white p-9 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-[#9CAF91] hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4EC] transition group-hover:bg-[#6D8364]">

                <Mail
                  size={30}
                  className="text-[#6D8364] transition group-hover:text-white"
                />

              </div>

              <h3 className="mt-8 text-2xl font-semibold text-[#2F3A30]">
                ایمیل
              </h3>

              <p className="mt-4 break-all text-[#6C7971] leading-8">
                info@hodamoradi.com
              </p>

            </div>





            {/* Address */}

            <div className="group rounded-[32px] border border-[#E2E7DF] bg-white p-9 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-[#9CAF91] hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4EC] transition group-hover:bg-[#6D8364]">

                <MapPin
                  size={30}
                  className="text-[#6D8364] transition group-hover:text-white"
                />

              </div>

              <h3 className="mt-8 text-2xl font-semibold text-[#2F3A30]">
                آدرس
              </h3>

              <p className="mt-4 leading-8 text-[#6C7971]">
                تهران، ایران
                <br />
                (آدرس دقیق پس از رزرو اعلام می‌شود)
              </p>

            </div>





            {/* Working Hours */}

            <div className="group rounded-[32px] border border-[#E2E7DF] bg-white p-9 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-[#9CAF91] hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4EC] transition group-hover:bg-[#6D8364]">

                <Clock
                  size={30}
                  className="text-[#6D8364] transition group-hover:text-white"
                />

              </div>

              <h3 className="mt-8 text-2xl font-semibold text-[#2F3A30]">
                ساعات پاسخگویی
              </h3>

              <p className="mt-4 leading-8 text-[#6C7971]">
                شنبه تا پنجشنبه
                <br />
                ۹:۰۰ تا ۱۹:۰۰
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* ========================================================= */}
      {/* Contact Form */}
      {/* ========================================================= */}

      <section className="py-28 bg-[#FCFCF8]">

        <div className="mx-auto max-w-screen-xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="text-sm font-semibold uppercase tracking-[5px] text-[#809276]">
                SEND MESSAGE
              </span>

              <h2 className="mt-5 text-4xl font-bold text-[#2F3A30]">

                پیام خود را ارسال کنید

              </h2>

              <p className="mt-8 leading-9 text-[#6C7971]">

                اگر سؤال، درخواست مشاوره یا هر موضوع دیگری دارید،
                از طریق فرم زیر پیام خود را ارسال کنید.
                تمامی پیام‌ها با حفظ محرمانگی بررسی شده و
                در اولین فرصت پاسخ داده خواهند شد.

              </p>

              <div className="mt-10 rounded-[28px] border border-[#E2E7DF] bg-[#F7F9F5] p-8">

                <h3 className="text-2xl font-semibold text-[#2F3A30]">
                  نکته
                </h3>

                <p className="mt-5 leading-9 text-[#6C7971]">

                  لطفاً اطلاعات تماس خود را به‌درستی وارد کنید تا
                  امکان پاسخگویی و هماهنگی در کوتاه‌ترین زمان فراهم باشد.

                </p>

              </div>

            </div>





            {/* Right */}

            <form className="rounded-[36px] border border-[#E2E7DF] bg-white p-10 shadow-sm">

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-3 block font-medium text-[#2F3A30]">
                    نام
                  </label>

                  <input
                    type="text"
                    placeholder="نام خود را وارد کنید"
                    className="w-full rounded-2xl border border-[#D9DED6] bg-[#FCFCF8] px-5 py-4 outline-none transition focus:border-[#6D8364]"
                  />

                </div>





                <div>

                  <label className="mb-3 block font-medium text-[#2F3A30]">
                    نام خانوادگی
                  </label>

                  <input
                    type="text"
                    placeholder="نام خانوادگی"
                    className="w-full rounded-2xl border border-[#D9DED6] bg-[#FCFCF8] px-5 py-4 outline-none transition focus:border-[#6D8364]"
                  />

                </div>





                <div>

                  <label className="mb-3 block font-medium text-[#2F3A30]">
                    شماره تماس
                  </label>

                  <input
                    type="tel"
                    placeholder="09xxxxxxxxx"
                    className="w-full rounded-2xl border border-[#D9DED6] bg-[#FCFCF8] px-5 py-4 outline-none transition focus:border-[#6D8364]"
                  />

                </div>





                <div>

                  <label className="mb-3 block font-medium text-[#2F3A30]">
                    ایمیل
                  </label>

                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full rounded-2xl border border-[#D9DED6] bg-[#FCFCF8] px-5 py-4 outline-none transition focus:border-[#6D8364]"
                  />

                </div>

              </div>





              <div className="mt-6">

                <label className="mb-3 block font-medium text-[#2F3A30]">
                  موضوع
                </label>

                <input
                  type="text"
                  placeholder="موضوع پیام"
                  className="w-full rounded-2xl border border-[#D9DED6] bg-[#FCFCF8] px-5 py-4 outline-none transition focus:border-[#6D8364]"
                />

              </div>





              <div className="mt-6">

                <label className="mb-3 block font-medium text-[#2F3A30]">
                  متن پیام
                </label>

                <textarea
                  rows={6}
                  placeholder="پیام خود را بنویسید..."
                  className="w-full resize-none rounded-2xl border border-[#D9DED6] bg-[#FCFCF8] px-5 py-4 outline-none transition focus:border-[#6D8364]"
                />

              </div>





              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-[#5E7456] py-4 text-lg font-medium text-white transition duration-300 hover:bg-[#4E6248]"
              >

                ارسال پیام

              </button>

            </form>

          </div>

        </div>

      </section>
            {/* ========================================================= */}
      {/* Final CTA */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#5E7456] py-28">

        {/* Background Shapes */}

        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />





        <div className="relative mx-auto max-w-screen-xl px-6">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm uppercase tracking-[4px] text-white backdrop-blur-md">

              START YOUR JOURNEY

            </span>

            <h2 className="mt-8 text-4xl font-bold leading-relaxed text-white md:text-5xl">

              هر تغییر بزرگ،
              <br />
              با یک گفت‌وگوی ساده آغاز می‌شود.

            </h2>

            <p className="mx-auto mt-8 max-w-2xl leading-9 text-white/85">

              اگر احساس می‌کنید زمان آن رسیده که با آرامش بیشتری
              به مسائل و دغدغه‌های خود بپردازید، خوشحال می‌شوم
              در این مسیر همراه شما باشم. هدف من فراهم کردن
              فضایی امن، محترمانه و حرفه‌ای برای گفت‌وگو و رشد فردی است.

            </p>





            {/* Buttons */}

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                href="/services"
                className="rounded-full bg-white px-8 py-4 font-medium text-[#5E7456] transition duration-300 hover:scale-105"
              >
                مشاهده خدمات
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-white/30 px-8 py-4 font-medium text-white transition duration-300 hover:bg-white hover:text-[#5E7456]"
              >
                درباره من
              </Link>

            </div>





            {/* Quote */}

            <div className="mx-auto mt-16 max-w-3xl border-t border-white/15 pt-10">

              <p className="text-lg italic leading-9 text-white/80">

                « سلامت روان، پایه‌ای برای ساختن زندگی متعادل،
                روابط سالم و آینده‌ای روشن‌تر است. »

              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
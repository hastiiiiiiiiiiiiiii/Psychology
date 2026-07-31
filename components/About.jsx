"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  HeartHandshake,
  Sparkles,
  Award,
} from "lucide-react";

export default function About() {
  return (
    <main className="bg-[#FAF8F4] text-[#3E4A42] overflow-hidden">

      {/* ========================================================= */}
      {/* Hero Section */}
      {/* ========================================================= */}

      <section className="relative pt-40 pb-28 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#EEF4EC] via-[#F7F5F1] to-[#FAF8F4]" />

        <div className="absolute -top-28 -left-24 h-80 w-80 rounded-full bg-[#B7C8AE]/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#E8DDC9]/40 blur-3xl" />

        <div className="relative mx-auto max-w-screen-xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Image */}

            <div className="relative flex justify-center">

              <div className="absolute h-[420px] w-[320px] rounded-[40px] bg-[#A9BA9D]/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[36px] border border-[#D6DFCF] bg-white shadow-[0_30px_80px_rgba(0,0,0,.08)]">

                <Image
                  src="/about.png"
                  alt="Hoda Moradi"
                  width={500}
                  height={700}
                  priority
                  className="h-[560px] w-[390px] object-cover"
                />

              </div>

            </div>

            {/* Content */}

            <div>

              <span className="inline-flex items-center rounded-full bg-[#DDE7D7] px-5 py-2 text-sm font-medium text-[#5D7055]">

                About Hoda Moradi

              </span>

              <h1 className="mt-8 text-5xl font-bold leading-tight text-[#253128] lg:text-6xl">

                ایجاد فضایی امن برای
                <span className="block text-[#74896B]">
                  رشد، آرامش و تغییر
                </span>

              </h1>

              <p className="mt-8 text-lg leading-9 text-[#66746B]">

                باور من این است که هر انسان شایسته‌ی شنیده شدن،
                درک شدن و تجربه‌ی آرامش است. هدف من همراهی شما
                در مسیر شناخت بهتر خود، مدیریت چالش‌های زندگی و
                ساختن روابط سالم‌تر است؛ مسیری که با احترام،
                همدلی و تخصص آغاز می‌شود.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/booking"
                  className="rounded-full bg-[#6D8364] px-8 py-4 text-white transition hover:bg-[#5E7256]"
                >
                  رزرو جلسه
                </Link>

                <Link
                  href="/services"
                  className="rounded-full border border-[#C9D5C2] px-8 py-4 text-[#5D7055] transition hover:bg-[#EEF4EC]"
                >
                  مشاهده خدمات
                </Link>

              </div>

              {/* Quick Info */}

              <div className="mt-16 grid gap-6 sm:grid-cols-3">

                <div className="rounded-3xl border border-[#E3E8DF] bg-white p-6 shadow-sm">

                  <Award
                    size={34}
                    className="mb-5 text-[#6D8364]"
                  />

                  <h3 className="font-semibold">
                    تجربه حرفه‌ای
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#75837A]">
                    سال‌ها فعالیت تخصصی در حوزه روانشناسی
                    کودک، نوجوان و خانواده.
                  </p>

                </div>

                <div className="rounded-3xl border border-[#E3E8DF] bg-white p-6 shadow-sm">

                  <HeartHandshake
                    size={34}
                    className="mb-5 text-[#6D8364]"
                  />

                  <h3 className="font-semibold">
                    ارتباط انسانی
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#75837A]">
                    ایجاد فضایی امن، صمیمی و بدون قضاوت
                    برای گفتگو و رشد.
                  </p>

                </div>

                <div className="rounded-3xl border border-[#E3E8DF] bg-white p-6 shadow-sm">

                  <Sparkles
                    size={34}
                    className="mb-5 text-[#6D8364]"
                  />

                  <h3 className="font-semibold">
                    رویکرد تخصصی
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#75837A]">
                    استفاده از روش‌های علمی و به‌روز
                    متناسب با شرایط هر مراجع.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* Biography */}
      {/* ========================================================= */}

      <section className="py-28">

        <div className="mx-auto max-w-screen-xl px-6">

          <div className="grid gap-20 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="text-sm font-semibold uppercase tracking-[5px] text-[#809276]">

                Biography

              </span>

              <h2 className="mt-5 text-4xl font-bold text-[#2E392F]">

                آشنایی بیشتر با هدی مرادی

              </h2>

              <p className="mt-8 leading-9 text-[#66746B]">

                روانشناسی برای من تنها یک حرفه نیست؛
                بلکه فرصتی برای همراهی انسان‌ها در مسیر
                شناخت بهتر خود، عبور از بحران‌ها و ساختن
                آینده‌ای آرام‌تر است.

              </p>

              <p className="mt-6 leading-9 text-[#66746B]">

                در سال‌های فعالیت حرفه‌ای، تلاش کرده‌ام
                با ایجاد فضایی امن و مبتنی بر اعتماد،
                به مراجعان کمک کنم تا بدون نگرانی از
                قضاوت، احساسات، دغدغه‌ها و چالش‌های خود
                را بیان کنند.

              </p>

              <p className="mt-6 leading-9 text-[#66746B]">

                باور دارم که هر تغییر ماندگار، از شناخت
                عمیق خود آغاز می‌شود و نقش درمانگر،
                همراهی مسئولانه و تخصصی در این مسیر است.

              </p>

            </div>

            {/* Right */}

            <div className="space-y-8">

              <div className="rounded-[32px] bg-white p-8 shadow-sm border border-[#E6ECE2]">

                <h3 className="text-2xl font-semibold text-[#354236]">

                  رسالت من

                </h3>

                <p className="mt-5 leading-9 text-[#6D7A71]">

                  کمک به افراد برای رسیدن به آرامش،
                  افزایش کیفیت روابط، مدیریت احساسات،
                  رشد فردی و ایجاد زندگی سالم‌تر.

                </p>

              </div>

              <div className="rounded-[32px] bg-[#EEF4EC] p-8">

                <h3 className="text-2xl font-semibold text-[#354236]">

                  ارزش‌هایی که به آن پایبندم

                </h3>

                <ul className="mt-6 space-y-5 text-[#5F6F66]">

                  <li className="flex items-center gap-3">

                    <ArrowLeft
                      size={18}
                      className="text-[#6D8364]"
                    />

                    احترام به شخصیت و ارزش‌های هر مراجع

                  </li>

                  <li className="flex items-center gap-3">

                    <ArrowLeft
                      size={18}
                      className="text-[#6D8364]"
                    />

                    حفظ کامل محرمانگی اطلاعات

                  </li>

                  <li className="flex items-center gap-3">

                    <ArrowLeft
                      size={18}
                      className="text-[#6D8364]"
                    />

                    استفاده از روش‌های علمی و معتبر

                  </li>

                  <li className="flex items-center gap-3">

                    <ArrowLeft
                      size={18}
                      className="text-[#6D8364]"
                    />

                    همراهی با مراجع در تمام مسیر درمان

                  </li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ========================================================= */}
      {/* Philosophy */}
      {/* ========================================================= */}

      <section className="bg-[#F4F7F2] py-28">

        <div className="mx-auto max-w-screen-xl px-6">

          <div className="mx-auto max-w-4xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[5px] text-[#809276]">
              Philosophy
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#2F3A30]">
              فلسفه کاری من
            </h2>

            <p className="mt-10 text-xl leading-[2.4] text-[#65736A]">
              باور دارم که درمان، تنها برطرف کردن مشکلات نیست؛
              بلکه سفری برای شناخت بهتر خود، پذیرش احساسات،
              ایجاد روابط سالم‌تر و ساختن زندگی آگاهانه‌تر است.
            </p>

            <p className="mt-8 leading-9 text-[#6F7C73]">
              در جلسات درمان تلاش می‌کنم فضایی امن، صمیمی و
              بدون قضاوت ایجاد شود تا هر فرد بتواند با آرامش،
              احساسات، نگرانی‌ها و دغدغه‌های خود را بیان کند.
              هدف من همراهی در مسیر رشد، نه ارائه راه‌حل‌های
              آماده، بلکه کمک به کشف توانایی‌های درونی هر فرد است.
            </p>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* Credentials */}
      {/* ========================================================= */}

      <section className="py-28">

        <div className="mx-auto max-w-screen-xl px-6">

          <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-[5px] text-[#809276]">
              Credentials
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#2F3A30]">
              مدارک و سوابق حرفه‌ای
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-9 text-[#6B786F]">
              بخشی از مدارک، گواهینامه‌ها و سوابق علمی و حرفه‌ای
              که نشان‌دهنده مسیر یادگیری و توسعه تخصصی من در
              حوزه روانشناسی و مشاوره است.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {/* Card */}

            <div className="rounded-[30px] border border-[#E3E9E0] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4EC]">
                <Award size={32} className="text-[#6D8364]" />
              </div>

              <h3 className="mt-8 text-xl font-semibold">
                مدرک دانشگاهی
              </h3>

              <p className="mt-4 leading-8 text-[#6C7971]">
                کارشناسی / کارشناسی ارشد روانشناسی
                از دانشگاه معتبر.
              </p>

            </div>

            {/* Card */}

            <div className="rounded-[30px] border border-[#E3E9E0] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4EC]">
                <Award size={32} className="text-[#6D8364]" />
              </div>

              <h3 className="mt-8 text-xl font-semibold">
                پروانه فعالیت
              </h3>

              <p className="mt-4 leading-8 text-[#6C7971]">
                دارای مجوز فعالیت و عضویت در
                سازمان نظام روانشناسی.
              </p>

            </div>

            {/* Card */}

            <div className="rounded-[30px] border border-[#E3E9E0] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4EC]">
                <Award size={32} className="text-[#6D8364]" />
              </div>

              <h3 className="mt-8 text-xl font-semibold">
                دوره‌های تخصصی
              </h3>

              <p className="mt-4 leading-8 text-[#6C7971]">
                شرکت در کارگاه‌ها و دوره‌های
                تخصصی درمان و روانشناسی.
              </p>

            </div>

            {/* Card */}

            <div className="rounded-[30px] border border-[#E3E9E0] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4EC]">
                <Award size={32} className="text-[#6D8364]" />
              </div>

              <h3 className="mt-8 text-xl font-semibold">
                تجربه حرفه‌ای
              </h3>

              <p className="mt-4 leading-8 text-[#6C7971]">
                سال‌ها فعالیت تخصصی در زمینه
                درمان، آموزش و مشاوره.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* Timeline */}
      {/* ========================================================= */}

      <section className="bg-[#F8FAF7] py-28">

        <div className="mx-auto max-w-screen-xl px-6">

          <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-[5px] text-[#809276]">
              Timeline
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#2F3A30]">
              مسیر حرفه‌ای
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-9 text-[#6C7971]">
              نگاهی کوتاه به مسیر رشد علمی و حرفه‌ای هدی مرادی
              در سال‌های فعالیت.
            </p>

          </div>

          <div className="relative mt-20">

            {/* Line */}

            <div className="absolute right-4 top-0 hidden h-full w-[2px] bg-[#D8E1D3] lg:block" />

            <div className="space-y-14">

              {/* Item */}

              <div className="relative rounded-[30px] border border-[#E3E8E0] bg-white p-8 lg:mr-12 shadow-sm">

                <div className="absolute -right-[18px] top-10 hidden h-9 w-9 rounded-full border-4 border-white bg-[#6D8364] lg:block" />

                <span className="text-2xl font-bold text-[#6D8364]">
                  ۱۳۹۸
                </span>

                <h3 className="mt-3 text-2xl font-semibold">
                  آغاز فعالیت حرفه‌ای
                </h3>

                <p className="mt-4 leading-9 text-[#6C7971]">
                  شروع فعالیت تخصصی در حوزه روانشناسی
                  و ارائه خدمات مشاوره.
                </p>

              </div>

              {/* Item */}

              <div className="relative rounded-[30px] border border-[#E3E8E0] bg-white p-8 lg:mr-12 shadow-sm">

                <div className="absolute -right-[18px] top-10 hidden h-9 w-9 rounded-full border-4 border-white bg-[#6D8364] lg:block" />

                <span className="text-2xl font-bold text-[#6D8364]">
                  ۱۴۰۰
                </span>

                <h3 className="mt-3 text-2xl font-semibold">
                  دریافت گواهینامه‌های تخصصی
                </h3>

                <p className="mt-4 leading-9 text-[#6C7971]">
                  شرکت در دوره‌های تخصصی و توسعه
                  مهارت‌های حرفه‌ای.
                </p>

              </div>

              {/* Item */}

              <div className="relative rounded-[30px] border border-[#E3E8E0] bg-white p-8 lg:mr-12 shadow-sm">

                <div className="absolute -right-[18px] top-10 hidden h-9 w-9 rounded-full border-4 border-white bg-[#6D8364] lg:block" />

                <span className="text-2xl font-bold text-[#6D8364]">
                  ۱۴۰۲
                </span>

                <h3 className="mt-3 text-2xl font-semibold">
                  توسعه خدمات مشاوره
                </h3>

                <p className="mt-4 leading-9 text-[#6C7971]">
                  ارائه خدمات حضوری و آنلاین برای
                  کودک، نوجوان و خانواده.
                </p>

              </div>

              {/* Item */}

              <div className="relative rounded-[30px] border border-[#E3E8E0] bg-white p-8 lg:mr-12 shadow-sm">

                <div className="absolute -right-[18px] top-10 hidden h-9 w-9 rounded-full border-4 border-white bg-[#6D8364] lg:block" />

                <span className="text-2xl font-bold text-[#6D8364]">
                  امروز
                </span>

                <h3 className="mt-3 text-2xl font-semibold">
                  همراهی با مراجعان
                </h3>

                <p className="mt-4 leading-9 text-[#6C7971]">
                  ادامه مسیر درمان، آموزش و رشد
                  در کنار مراجعان با تکیه بر دانش،
                  تجربه و همدلی.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ========================================================= */}
      {/* Expertise */}
      {/* ========================================================= */}

      <section className="py-28 bg-[#FAF8F4]">

        <div className="mx-auto max-w-screen-xl px-6">

          <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-[5px] text-[#809276]">
              Expertise
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#2F3A30]">
              حوزه‌های تخصصی
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-9 text-[#6C7971]">
              خدمات مشاوره با رویکردی تخصصی، متناسب با نیاز هر فرد
              و با هدف ایجاد آرامش، رشد فردی و بهبود کیفیت زندگی.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-[32px] border border-[#E3E8DF] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-[#354236]">
                مشاوره کودک
              </h3>

              <p className="mt-5 leading-9 text-[#6C7971]">
                کمک به رشد هیجانی، رفتاری و ارتباطی کودکان
                با استفاده از روش‌های علمی و متناسب با سن.
              </p>
            </div>

            <div className="rounded-[32px] border border-[#E3E8DF] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-[#354236]">
                مشاوره نوجوان
              </h3>

              <p className="mt-5 leading-9 text-[#6C7971]">
                همراهی نوجوانان برای عبور از چالش‌های
                هویتی، تحصیلی، هیجانی و ارتباطی.
              </p>
            </div>

            <div className="rounded-[32px] border border-[#E3E8DF] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-[#354236]">
                مشاوره خانواده
              </h3>

              <p className="mt-5 leading-9 text-[#6C7971]">
                کمک به بهبود روابط خانوادگی، حل تعارض‌ها
                و ایجاد محیطی سالم‌تر برای اعضای خانواده.
              </p>
            </div>

            <div className="rounded-[32px] border border-[#E3E8DF] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-[#354236]">
                جلسات فردی
              </h3>

              <p className="mt-5 leading-9 text-[#6C7971]">
                فضایی امن برای شناخت بهتر خود،
                مدیریت اضطراب، افسردگی و رشد فردی.
              </p>
            </div>

            <div className="rounded-[32px] border border-[#E3E8DF] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-[#354236]">
                جلسات آنلاین
              </h3>

              <p className="mt-5 leading-9 text-[#6C7971]">
                دریافت خدمات مشاوره به صورت آنلاین
                با همان کیفیت جلسات حضوری.
              </p>
            </div>

            <div className="rounded-[32px] border border-[#E3E8DF] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-[#354236]">
                رشد فردی
              </h3>

              <p className="mt-5 leading-9 text-[#6C7971]">
                توسعه مهارت‌های فردی، افزایش خودآگاهی
                و رسیدن به زندگی متعادل‌تر.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* Therapeutic Approach */}
      {/* ========================================================= */}

      <section className="bg-[#F3F7F2] py-28">

        <div className="mx-auto max-w-screen-xl px-6">

          <div className="grid items-center gap-20 lg:grid-cols-2">

            <div>

              <span className="text-sm font-semibold uppercase tracking-[5px] text-[#809276]">
                Approach
              </span>

              <h2 className="mt-5 text-4xl font-bold text-[#2F3A30]">
                رویکرد درمانی
              </h2>

              <p className="mt-8 leading-9 text-[#69766D]">
                هر مراجع شرایط، شخصیت و تجربه‌های منحصر‌به‌فرد
                خود را دارد؛ بنابراین درمان نیز باید متناسب با
                نیازهای همان فرد طراحی شود.
              </p>

              <p className="mt-6 leading-9 text-[#69766D]">
                در جلسات درمان، با استفاده از روش‌های علمی،
                تلاش می‌کنم فضایی امن، محترمانه و بدون قضاوت
                ایجاد شود تا فرآیند درمان اثربخش‌تر باشد.
              </p>

            </div>

            <div className="space-y-6">

              <div className="rounded-3xl bg-white border border-[#E3E8DF] p-7 shadow-sm">
                <h3 className="font-semibold text-xl">
                  درمان شناختی رفتاری (CBT)
                </h3>
                <p className="mt-3 leading-8 text-[#6C7971]">
                  کمک به شناسایی الگوهای فکری و رفتاری
                  و جایگزینی آن‌ها با الگوهای سالم‌تر.
                </p>
              </div>

              <div className="rounded-3xl bg-white border border-[#E3E8DF] p-7 shadow-sm">
                <h3 className="font-semibold text-xl">
                  درمان مبتنی بر پذیرش (ACT)
                </h3>
                <p className="mt-3 leading-8 text-[#6C7971]">
                  افزایش انعطاف‌پذیری روانی و پذیرش
                  احساسات و افکار دشوار.
                </p>
              </div>

              <div className="rounded-3xl bg-white border border-[#E3E8DF] p-7 shadow-sm">
                <h3 className="font-semibold text-xl">
                  درمان خانواده
                </h3>
                <p className="mt-3 leading-8 text-[#6C7971]">
                  بهبود ارتباطات، کاهش تعارض‌ها
                  و افزایش همدلی میان اعضای خانواده.
                </p>
              </div>

              <div className="rounded-3xl bg-white border border-[#E3E8DF] p-7 shadow-sm">
                <h3 className="font-semibold text-xl">
                  بازی درمانی کودک
                </h3>
                <p className="mt-3 leading-8 text-[#6C7971]">
                  استفاده از بازی به عنوان ابزار درمانی
                  برای بیان احساسات کودکان.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* Values */}
      {/* ========================================================= */}

      <section className="py-28">

        <div className="mx-auto max-w-screen-xl px-6">

          <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-[5px] text-[#809276]">
              Values
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#2F3A30]">
              ارزش‌هایی که به آن باور دارم
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-9 text-[#6C7971]">
              تمام فرآیند درمان بر پایه سه اصل اساسی شکل
              می‌گیرد؛ اصولی که هویت برند Hoda Moradi را
              نیز تشکیل می‌دهند.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-[32px] bg-white border border-[#E3E8DF] p-10 text-center shadow-sm">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EEF4EC]">
                <HeartHandshake className="text-[#6D8364]" size={36} />
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                آرامش
              </h3>

              <p className="mt-5 leading-9 text-[#6C7971]">
                ایجاد محیطی آرام و بدون قضاوت تا مراجع
                بتواند با اطمینان احساسات خود را بیان کند.
              </p>

            </div>

            <div className="rounded-[32px] bg-white border border-[#E3E8DF] p-10 text-center shadow-sm">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EEF4EC]">
                <Award className="text-[#6D8364]" size={36} />
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                تخصص
              </h3>

              <p className="mt-5 leading-9 text-[#6C7971]">
                استفاده از دانش روز، تجربه حرفه‌ای و
                روش‌های علمی معتبر در درمان.
              </p>

            </div>

            <div className="rounded-[32px] bg-white border border-[#E3E8DF] p-10 text-center shadow-sm">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EEF4EC]">
                <Sparkles className="text-[#6D8364]" size={36} />
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                اعتماد
              </h3>

              <p className="mt-5 leading-9 text-[#6C7971]">
                حفظ محرمانگی اطلاعات، احترام به مراجع
                و ایجاد رابطه‌ای مبتنی بر اعتماد متقابل.
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* ========================================================= */}
      {/* FAQ */}
      {/* ========================================================= */}

      <section className="bg-[#F5F8F3] py-28">

        <div className="mx-auto max-w-screen-xl px-6">

          <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-[5px] text-[#809276]">
              FAQ
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#2F3A30]">
              سوالات متداول
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-9 text-[#6C7971]">
              پاسخ برخی از سوالات رایج مراجعان پیش از رزرو جلسه.
            </p>

          </div>

          <div className="mx-auto mt-16 max-w-5xl space-y-6">

            <div className="rounded-[28px] border border-[#E3E8DF] bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#354236]">
                هر جلسه مشاوره چه مدت زمان دارد؟
              </h3>

              <p className="mt-4 leading-9 text-[#6C7971]">
                مدت زمان هر جلسه معمولاً بین ۴۵ تا ۶۰ دقیقه است و
                بسته به شرایط درمان ممکن است متفاوت باشد.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#E3E8DF] bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#354236]">
                آیا جلسات به صورت آنلاین نیز برگزار می‌شوند؟
              </h3>

              <p className="mt-4 leading-9 text-[#6C7971]">
                بله، امکان برگزاری جلسات آنلاین برای مراجعانی که
                امکان حضور ندارند فراهم است.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#E3E8DF] bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#354236]">
                آیا اطلاعات مراجع محرمانه باقی می‌ماند؟
              </h3>

              <p className="mt-4 leading-9 text-[#6C7971]">
                بله، حفظ محرمانگی اطلاعات یکی از مهم‌ترین اصول
                حرفه‌ای در فرآیند درمان است و تمامی اطلاعات
                کاملاً محرمانه باقی خواهد ماند.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#E3E8DF] bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#354236]">
                چگونه می‌توانم جلسه رزرو کنم؟
              </h3>

              <p className="mt-4 leading-9 text-[#6C7971]">
                از طریق صفحه رزرو نوبت می‌توانید خدمت مورد نظر،
                تاریخ و ساعت دلخواه خود را انتخاب کرده و به
                صورت آنلاین رزرو انجام دهید.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* CTA */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden py-32">

        {/* Background */}

        <div className="absolute inset-0 bg-gradient-to-br from-[#6D8364] via-[#788D6F] to-[#8A9E82]" />

        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-screen-xl px-6">

          <div className="mx-auto max-w-4xl text-center text-white">

            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur">
              Ready To Start?
            </span>

            <h2 className="mt-8 text-5xl font-bold leading-tight">

              اولین قدم برای ایجاد تغییر،
              <br />
              همین امروز آغاز می‌شود.

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/85">

              اگر احساس می‌کنید زمان ایجاد تغییر در زندگی،
              روابط یا سلامت روان شما فرا رسیده است،
              خوشحال می‌شوم در این مسیر همراهتان باشم.

            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

              <Link
                href="/booking"
                className="rounded-full bg-white px-10 py-4 font-medium text-[#5F7357] transition hover:scale-105"
              >
                رزرو جلسه
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/30 px-10 py-4 font-medium text-white transition hover:bg-white hover:text-[#5F7357]"
              >
                تماس با من
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  GraduationCap,
  Award,
  BadgeCheck,
  ArrowLeft,
} from "lucide-react";

export default function Certificates() {
  return (
    <main className="overflow-hidden bg-[#FCFCF8]">

      {/* ========================================================= */}
      {/* Hero */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden">

        {/* Background */}

        <div className="absolute inset-0">

          <Image
            src="/certificates-hero.png"
            alt="Certificates"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#20311F]/60" />

          <div className="absolute inset-0 bg-gradient-to-b from-[#20311F]/30 via-[#20311F]/60 to-[#FCFCF5]" />

        </div>





        <div className="relative mx-auto flex min-h-[85vh] max-w-screen-xl items-center px-6">

          <div className="max-w-3xl text-white">

            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm uppercase tracking-[4px] backdrop-blur-md">

              LICENSES & CERTIFICATES

            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">

              مجوزها و
              <br />
              گواهینامه‌های حرفه‌ای

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/85">

              اعتماد مراجعان بر پایه تخصص، آموزش مستمر و
              رعایت استانداردهای حرفه‌ای شکل می‌گیرد.
              مدارک و گواهینامه‌های ارائه‌شده، بخشی از مسیر
              علمی و حرفه‌ای هدی مرادی را نشان می‌دهند.

            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/about"
                className="rounded-full bg-white px-8 py-4 font-medium text-[#5E7456] transition duration-300 hover:scale-105"
              >
                درباره من
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 font-medium text-white transition duration-300 hover:bg-white hover:text-[#5E7456]"
              >
                ارتباط با من
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

              PROFESSIONAL QUALIFICATIONS

            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#2F3A30]">

              تخصصی که بر پایه دانش شکل گرفته است

            </h2>

            <p className="mt-10 text-lg leading-[2.4] text-[#67756C]">

              ارائه خدمات روانشناسی مسئولیتی مهم است و نیازمند
              دانش تخصصی، آموزش مستمر و پایبندی به اصول حرفه‌ای.
              تمامی مدارک، مجوزها و گواهینامه‌های این صفحه
              نشان‌دهنده مسیر علمی، تجربه و توسعه مداوم مهارت‌ها
              در حوزه روانشناسی و مشاوره هستند.

            </p>

          </div>





          {/* Statistics */}

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-[30px] border border-[#E2E7DF] bg-white p-8 text-center shadow-sm">

              <ShieldCheck
                className="mx-auto text-[#6D8364]"
                size={42}
              />

              <h3 className="mt-6 text-4xl font-bold text-[#2F3A30]">
                +10
              </h3>

              <p className="mt-3 text-[#6C7971]">
                مجوز و گواهینامه
              </p>

            </div>





            <div className="rounded-[30px] border border-[#E2E7DF] bg-white p-8 text-center shadow-sm">

              <GraduationCap
                className="mx-auto text-[#6D8364]"
                size={42}
              />

              <h3 className="mt-6 text-4xl font-bold text-[#2F3A30]">
                +5
              </h3>

              <p className="mt-3 text-[#6C7971]">
                دوره تخصصی
              </p>

            </div>





            <div className="rounded-[30px] border border-[#E2E7DF] bg-white p-8 text-center shadow-sm">

              <Award
                className="mx-auto text-[#6D8364]"
                size={42}
              />

              <h3 className="mt-6 text-4xl font-bold text-[#2F3A30]">
                +8
              </h3>

              <p className="mt-3 text-[#6C7971]">
                کارگاه آموزشی
              </p>

            </div>





            <div className="rounded-[30px] border border-[#E2E7DF] bg-white p-8 text-center shadow-sm">

              <BadgeCheck
                className="mx-auto text-[#6D8364]"
                size={42}
              />

              <h3 className="mt-6 text-4xl font-bold text-[#2F3A30]">
                100%
              </h3>

              <p className="mt-3 text-[#6C7971]">
                تعهد حرفه‌ای
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* ========================================================= */}
      {/* Featured Certificates */}
      {/* ========================================================= */}

      <section className="bg-[#F7F9F5] py-28">

        <div className="mx-auto max-w-screen-xl px-6">

          {/* Section Header */}

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[5px] text-[#809276]">
              FEATURED CERTIFICATES
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#2F3A30]">
              مهم‌ترین مدارک و مجوزها
            </h2>

            <p className="mt-6 leading-9 text-[#6C7971]">
              مجموعه‌ای از مهم‌ترین مدارک، مجوزها و گواهینامه‌های
              حرفه‌ای که بیانگر مسیر علمی، تجربه و توسعه مداوم
              مهارت‌های تخصصی هستند.
            </p>

          </div>





          {/* Cards */}

          <div className="mt-20 grid gap-8 lg:grid-cols-2">

            {/* Card */}

            <div className="group overflow-hidden rounded-[36px] bg-white border border-[#E2E7DF] shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">

              <div className="relative h-[380px] overflow-hidden">

                <Image
                  src="/certificate-1.png"
                  alt="Professional License"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-10">

                <span className="rounded-full bg-[#EEF4EC] px-4 py-2 text-xs font-semibold tracking-[3px] text-[#6D8364]">
                  OFFICIAL LICENSE
                </span>

                <h3 className="mt-6 text-3xl font-semibold text-[#2F3A30]">
                  پروانه فعالیت حرفه‌ای
                </h3>

                <p className="mt-5 leading-9 text-[#6C7971]">
                  مجوز رسمی فعالیت در حوزه روانشناسی و مشاوره که
                  بر اساس ضوابط و استانداردهای حرفه‌ای صادر شده است.
                </p>

              </div>

            </div>





            {/* Card */}

            <div className="group overflow-hidden rounded-[36px] bg-white border border-[#E2E7DF] shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">

              <div className="relative h-[380px] overflow-hidden">

                <Image
                  src="/certificate-2.jpg"
                  alt="Academic Degree"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-10">

                <span className="rounded-full bg-[#EEF4EC] px-4 py-2 text-xs font-semibold tracking-[3px] text-[#6D8364]">
                  ACADEMIC DEGREE
                </span>

                <h3 className="mt-6 text-3xl font-semibold text-[#2F3A30]">
                  مدرک دانشگاهی
                </h3>

                <p className="mt-5 leading-9 text-[#6C7971]">
                  تحصیلات دانشگاهی در رشته روانشناسی و کسب دانش
                  تخصصی برای ارائه خدمات علمی و حرفه‌ای.
                </p>

              </div>

            </div>





            {/* Card */}

            <div className="group overflow-hidden rounded-[36px] bg-white border border-[#E2E7DF] shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">

              <div className="relative h-[380px] overflow-hidden">

                <Image
                  src="/certificate-3.jpg"
                  alt="Specialized Certificate"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-10">

                <span className="rounded-full bg-[#EEF4EC] px-4 py-2 text-xs font-semibold tracking-[3px] text-[#6D8364]">
                  SPECIALIZED COURSE
                </span>

                <h3 className="mt-6 text-3xl font-semibold text-[#2F3A30]">
                  گواهینامه تخصصی
                </h3>

                <p className="mt-5 leading-9 text-[#6C7971]">
                  شرکت در دوره‌های تخصصی، کارگاه‌های آموزشی و
                  برنامه‌های علمی برای توسعه مهارت‌های حرفه‌ای.
                </p>

              </div>

            </div>





            {/* Card */}

            <div className="group overflow-hidden rounded-[36px] bg-white border border-[#E2E7DF] shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">

              <div className="relative h-[380px] overflow-hidden">

                <Image
                  src="/certificate-4.jpg"
                  alt="Professional Development"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-10">

                <span className="rounded-full bg-[#EEF4EC] px-4 py-2 text-xs font-semibold tracking-[3px] text-[#6D8364]">
                  CONTINUOUS LEARNING
                </span>

                <h3 className="mt-6 text-3xl font-semibold text-[#2F3A30]">
                  آموزش و یادگیری مستمر
                </h3>

                <p className="mt-5 leading-9 text-[#6C7971]">
                  به‌روزرسانی مداوم دانش و مهارت‌ها برای ارائه
                  خدمات روانشناسی بر پایه جدیدترین رویکردهای علمی.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ========================================================= */}
      {/* Licenses & Certificates Gallery */}
      {/* ========================================================= */}

      <section className="py-28 bg-[#FCFCF8]">

        <div className="mx-auto max-w-screen-xl px-6">

          {/* Header */}

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[5px] text-[#809276]">
              GALLERY
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#2F3A30]">
              گالری مدارک و گواهینامه‌ها
            </h2>

            <p className="mt-6 leading-9 text-[#6C7971]">
              مجموعه‌ای از مدارک دانشگاهی، مجوزهای فعالیت و
              گواهینامه‌های تخصصی که مسیر حرفه‌ای و علمی هدی مرادی
              را به نمایش می‌گذارند.
            </p>

          </div>





          {/* Gallery */}

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {/* Item 1 */}

            <div className="group overflow-hidden rounded-[30px] bg-white border border-[#E2E7DF] shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">

              <div className="relative h-[470px] overflow-hidden">

                <Image
                  src="/gallery-1.jpeg"
                  alt="Certificate"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

            </div>





            {/* Item 2 */}

            <div className="group overflow-hidden rounded-[30px] bg-white border border-[#E2E7DF] shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">

              <div className="relative h-[470px] overflow-hidden">

                <Image
                  src="/gallery-2.jpeg"
                  alt="Certificate"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

            </div>





            {/* Item 3 */}

            <div className="group overflow-hidden rounded-[30px] bg-white border border-[#E2E7DF] shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">

              <div className="relative h-[470px] overflow-hidden">

                <Image
                  src="/gallery-3.jpeg"
                  alt="Certificate"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

            </div>





            {/* Item 4 */}

            <div className="group overflow-hidden rounded-[30px] bg-white border border-[#E2E7DF] shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">

              <div className="relative h-[470px] overflow-hidden">

                <Image
                  src="/gallery-4.jpeg"
                  alt="Certificate"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

            </div>





            {/* Item 5 */}

            <div className="group overflow-hidden rounded-[30px] bg-white border border-[#E2E7DF] shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">

              <div className="relative h-[470px] overflow-hidden">

                <Image
                  src="/gallery-5.jpeg"
                  alt="Certificate"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

            </div>





            {/* Item 6 */}

            <div className="group overflow-hidden rounded-[30px] bg-white border border-[#E2E7DF] shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">

              <div className="relative h-[470px] overflow-hidden">

                <Image
                  src="/gallery-6.jpeg"
                  alt="Certificate"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ========================================================= */}
      {/* Contact CTA */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden py-28">

        {/* Background */}

        <div className="absolute inset-0 bg-[#5E7456]" />

        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />





        <div className="relative mx-auto max-w-screen-xl px-6">

          <div className="mx-auto max-w-4xl text-center text-white">

            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm uppercase tracking-[4px] backdrop-blur-md">

              CONTACT

            </span>

            <h2 className="mt-8 text-4xl font-bold leading-relaxed md:text-5xl">

              برای کسب اطلاعات بیشتر
              <br />
              در ارتباط باشید.

            </h2>

            <p className="mx-auto mt-8 max-w-2xl leading-9 text-white/85">

              اگر درباره مدارک، خدمات مشاوره یا نحوه برگزاری جلسات
              پرسشی دارید، می‌توانید از طریق صفحه تماس با من
              ارتباط برقرار کنید. پاسخگویی با احترام، دقت و
              حفظ محرمانگی انجام خواهد شد.

            </p>





            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-4 font-medium text-[#5E7456] transition duration-300 hover:scale-105"
              >
                ارتباط با من
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-white/30 px-8 py-4 font-medium text-white transition duration-300 hover:bg-white hover:text-[#5E7456]"
              >
                درباره من
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
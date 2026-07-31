"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  User,
  Phone,
  Mail,
  BriefcaseMedical,
  Monitor,
  CalendarDays,
  Clock3,
  MessageSquare,
  ClipboardList,
  CircleCheckBig,
  ShieldCheck,
  CalendarX2,
  CircleHelp,
} from "lucide-react";

export default function Booking() {
    return (
        <main className="overflow-hidden bg-[#FCFCF8]">

            {/* ========================================================= */}
            {/* Hero */}
            {/* ========================================================= */}

            <section className="relative overflow-hidden">

                {/* Background */}

                <div className="absolute inset-0">

                    <Image
                        src="/booking-hero.jpg"
                        alt="Book an Appointment"
                        fill
                        priority
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-[#20311F]/50" />

                    <div className="absolute inset-0 bg-gradient-to-b from-[#20311F]/20 via-[#20311F]/60 to-[#FCFCF5]" />

                </div>





                <div className="relative mx-auto flex min-h-[85vh] max-w-screen-xl items-center px-6">

                    <div className="max-w-3xl text-white">

                        <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm uppercase tracking-[4px] backdrop-blur-md">

                            BOOK AN APPOINTMENT

                        </span>

                        <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">

                            رزرو
                            <br />
                            جلسه مشاوره

                        </h1>

                        <p className="mt-8 max-w-2xl text-lg leading-9 text-white/85">

                            نخستین گام برای ایجاد تغییر، تصمیم به آغاز مسیر است.
                            از طریق این صفحه می‌توانید درخواست خود را برای
                            رزرو جلسه مشاوره ثبت کنید تا در محیطی امن، آرام
                            و حرفه‌ای همراه شما باشم.

                        </p>

                        <div className="mt-12 flex flex-wrap gap-5">

                            <Link
                                href="/services"
                                className="rounded-full bg-white px-8 py-4 font-medium text-[#5E7456] transition duration-300 hover:scale-105"
                            >
                                مشاهده خدمات
                            </Link>

                            <Link
                                href="/contact"
                                className="flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 font-medium text-white transition duration-300 hover:bg-white hover:text-[#5E7456]"
                            >
                                تماس با من
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

                            APPOINTMENT

                        </span>

                        <h2 className="mt-5 text-4xl font-bold text-[#2F3A30]">

                            آغاز مسیری برای سلامت روان

                        </h2>

                        <p className="mt-10 text-lg leading-[2.4] text-[#67756C]">

                            هر جلسه مشاوره فرصتی برای شناخت بهتر خود،
                            مدیریت احساسات، بهبود روابط و ایجاد تغییرات
                            مثبت در زندگی است. فرآیند رزرو به گونه‌ای
                            طراحی شده تا در کوتاه‌ترین زمان و با سادگی
                            کامل بتوانید درخواست خود را ثبت کنید.

                        </p>

                        <p className="mt-8 leading-9 text-[#6F7C73]">

                            پس از ثبت درخواست، اطلاعات شما بررسی شده و
                            در اولین فرصت جهت هماهنگی نهایی زمان جلسه،
                            نحوه برگزاری و سایر جزئیات با شما تماس گرفته
                            خواهد شد.

                        </p>

                    </div>

                </div>

            </section>
            {/* ========================================================= */}
            {/* Booking Process */}
            {/* ========================================================= */}

            <section className="bg-[#F7F9F5] py-28">

                <div className="mx-auto max-w-screen-xl px-6">

                    {/* Header */}

                    <div className="mx-auto max-w-3xl text-center">

                        <span className="text-sm font-semibold uppercase tracking-[5px] text-[#809276]">
                            HOW IT WORKS
                        </span>

                        <h2 className="mt-5 text-4xl font-bold text-[#2F3A30]">
                            مراحل رزرو جلسه
                        </h2>

                        <p className="mt-6 leading-9 text-[#6C7971]">
                            تنها در چند مرحله ساده می‌توانید درخواست جلسه
                            مشاوره خود را ثبت کنید. پس از بررسی اطلاعات،
                            برای هماهنگی نهایی با شما تماس گرفته خواهد شد.
                        </p>

                    </div>





                    {/* Cards */}

                    <div className="mt-20 grid gap-8 lg:grid-cols-3">

                        {/* Step 1 */}

                        <div className="relative rounded-[34px] border border-[#E2E7DF] bg-white p-10 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">

                            <div className="absolute left-8 top-8 text-6xl font-bold text-[#EEF4EC]">
                                01
                            </div>

                            <div className="relative">

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4EC]">

                                    <ClipboardList
                                        size={30}
                                        className="text-[#6D8364]"
                                    />

                                </div>

                                <h3 className="mt-8 text-2xl font-semibold text-[#2F3A30]">
                                    انتخاب خدمت
                                </h3>

                                <p className="mt-5 leading-9 text-[#6C7971]">
                                    نوع جلسه موردنظر خود را انتخاب کنید؛
                                    مانند مشاوره کودک، نوجوان، خانواده،
                                    جلسات فردی یا آنلاین.

                                </p>

                            </div>

                        </div>





                        {/* Step 2 */}

                        <div className="relative rounded-[34px] border border-[#E2E7DF] bg-white p-10 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">

                            <div className="absolute left-8 top-8 text-6xl font-bold text-[#EEF4EC]">
                                02
                            </div>

                            <div className="relative">

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4EC]">

                                    <CalendarDays
                                        size={30}
                                        className="text-[#6D8364]"
                                    />

                                </div>

                                <h3 className="mt-8 text-2xl font-semibold text-[#2F3A30]">
                                    ثبت اطلاعات
                                </h3>

                                <p className="mt-5 leading-9 text-[#6C7971]">
                                    اطلاعات تماس و درخواست خود را در فرم
                                    رزرو وارد کنید تا امکان هماهنگی و
                                    بررسی درخواست فراهم شود.

                                </p>

                            </div>

                        </div>





                        {/* Step 3 */}

                        <div className="relative rounded-[34px] border border-[#E2E7DF] bg-white p-10 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">

                            <div className="absolute left-8 top-8 text-6xl font-bold text-[#EEF4EC]">
                                03
                            </div>

                            <div className="relative">

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4EC]">

                                    <CircleCheckBig
                                        size={30}
                                        className="text-[#6D8364]"
                                    />

                                </div>

                                <h3 className="mt-8 text-2xl font-semibold text-[#2F3A30]">
                                    تأیید نهایی
                                </h3>

                                <p className="mt-5 leading-9 text-[#6C7971]">
                                    پس از بررسی درخواست، برای هماهنگی
                                    زمان جلسه، نحوه برگزاری و سایر
                                    جزئیات با شما تماس گرفته خواهد شد.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* ========================================================= */}
            {/* Booking Form */}
            {/* ========================================================= */}

            <section className="py-28 bg-[#FCFCF8]">

                <div className="mx-auto max-w-screen-xl px-6">

                    <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">

                        {/* Left Content */}

                        <div>

                            <span className="text-sm font-semibold uppercase tracking-[5px] text-[#809276]">
                                BOOK NOW
                            </span>

                            <h2 className="mt-5 text-4xl font-bold text-[#2F3A30]">
                                فرم درخواست جلسه
                            </h2>

                            <p className="mt-8 leading-9 text-[#6C7971]">
                                لطفاً اطلاعات زیر را با دقت تکمیل کنید تا
                                درخواست شما بررسی شده و در اولین فرصت برای
                                هماهنگی نهایی با شما تماس گرفته شود.
                            </p>

                            <div className="mt-10 rounded-[30px] border border-[#E2E7DF] bg-[#F7F9F5] p-8">

                                <h3 className="text-2xl font-semibold text-[#2F3A30]">
                                    یادآوری
                                </h3>

                                <p className="mt-5 leading-9 text-[#6C7971]">
                                    ثبت این فرم به معنای رزرو قطعی نیست.
                                    پس از بررسی اطلاعات، زمان نهایی جلسه
                                    از طریق تماس یا پیام به شما اطلاع داده خواهد شد.
                                </p>

                            </div>

                        </div>





                        {/* Form */}

                        <form className="rounded-[36px] border border-[#E2E7DF] bg-white p-10 shadow-sm">

                            <div className="grid gap-6 md:grid-cols-2">

                                {/* Name */}

                                <div>

                                    <label className="mb-3 flex items-center gap-2 font-medium text-[#2F3A30]">
                                        <User size={18} />
                                        نام و نام خانوادگی
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="نام خود را وارد کنید"
                                        className="w-full rounded-2xl border border-[#D9DED6] bg-[#FCFCF8] px-5 py-4 outline-none transition focus:border-[#6D8364]"
                                    />

                                </div>





                                {/* Phone */}

                                <div>

                                    <label className="mb-3 flex items-center gap-2 font-medium text-[#2F3A30]">
                                        <Phone size={18} />
                                        شماره تماس
                                    </label>

                                    <input
                                        type="tel"
                                        placeholder="09xxxxxxxxx"
                                        className="w-full rounded-2xl border border-[#D9DED6] bg-[#FCFCF8] px-5 py-4 outline-none transition focus:border-[#6D8364]"
                                    />

                                </div>





                                {/* Email */}

                                <div>

                                    <label className="mb-3 flex items-center gap-2 font-medium text-[#2F3A30]">
                                        <Mail size={18} />
                                        ایمیل (اختیاری)
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="example@email.com"
                                        className="w-full rounded-2xl border border-[#D9DED6] bg-[#FCFCF8] px-5 py-4 outline-none transition focus:border-[#6D8364]"
                                    />

                                </div>





                                {/* Service */}

                                <div>

                                    <label className="mb-3 flex items-center gap-2 font-medium text-[#2F3A30]">
                                        <BriefcaseMedical size={18} />
                                        نوع خدمت
                                    </label>

                                    <select className="w-full rounded-2xl border border-[#D9DED6] bg-[#FCFCF8] px-5 py-4 outline-none transition focus:border-[#6D8364]">

                                        <option>مشاوره کودک</option>
                                        <option>مشاوره نوجوان</option>
                                        <option>مشاوره خانواده</option>
                                        <option>جلسه فردی</option>
                                        <option>زوج‌درمانی</option>

                                    </select>

                                </div>





                                {/* Session Type */}

                                <div>

                                    <label className="mb-3 flex items-center gap-2 font-medium text-[#2F3A30]">
                                        <Monitor size={18} />
                                        نوع جلسه
                                    </label>

                                    <select className="w-full rounded-2xl border border-[#D9DED6] bg-[#FCFCF8] px-5 py-4 outline-none transition focus:border-[#6D8364]">

                                        <option>حضوری</option>
                                        <option>آنلاین</option>

                                    </select>

                                </div>





                                {/* Date */}

                                <div>

                                    <label className="mb-3 flex items-center gap-2 font-medium text-[#2F3A30]">
                                        <CalendarDays size={18} />
                                        تاریخ پیشنهادی
                                    </label>

                                    <input
                                        type="date"
                                        className="w-full rounded-2xl border border-[#D9DED6] bg-[#FCFCF8] px-5 py-4 outline-none transition focus:border-[#6D8364]"
                                    />

                                </div>





                                {/* Time */}

                                <div>

                                    <label className="mb-3 flex items-center gap-2 font-medium text-[#2F3A30]">
                                        <Clock3 size={18} />
                                        ساعت پیشنهادی
                                    </label>

                                    <input
                                        type="time"
                                        className="w-full rounded-2xl border border-[#D9DED6] bg-[#FCFCF8] px-5 py-4 outline-none transition focus:border-[#6D8364]"
                                    />

                                </div>

                            </div>





                            {/* Message */}

                            <div className="mt-6">

                                <label className="mb-3 flex items-center gap-2 font-medium text-[#2F3A30]">
                                    <MessageSquare size={18} />
                                    توضیحات
                                </label>

                                <textarea
                                    rows={6}
                                    placeholder="در صورت تمایل توضیحات خود را وارد کنید..."
                                    className="w-full resize-none rounded-2xl border border-[#D9DED6] bg-[#FCFCF8] px-5 py-4 outline-none transition focus:border-[#6D8364]"
                                />

                            </div>





                            <button
                                type="submit"
                                className="mt-8 w-full rounded-full bg-[#5E7456] py-4 text-lg font-medium text-white transition duration-300 hover:bg-[#4E6248]"
                            >
                                ثبت درخواست جلسه
                            </button>

                        </form>

                    </div>

                </div>

            </section>
            {/* ========================================================= */}
            {/* Important Information */}
            {/* ========================================================= */}

            <section className="bg-[#F7F9F5] py-28">

                <div className="mx-auto max-w-screen-xl px-6">

                    {/* Header */}

                    <div className="mx-auto max-w-3xl text-center">

                        <span className="text-sm font-semibold uppercase tracking-[5px] text-[#809276]">
                            IMPORTANT INFORMATION
                        </span>

                        <h2 className="mt-5 text-4xl font-bold text-[#2F3A30]">
                            نکات مهم پیش از رزرو
                        </h2>

                        <p className="mt-6 leading-9 text-[#6C7971]">
                            لطفاً پیش از ثبت درخواست، موارد زیر را مطالعه کنید.
                            این اطلاعات به برگزاری بهتر جلسات و هماهنگی سریع‌تر کمک می‌کند.
                        </p>

                    </div>





                    {/* Cards */}

                    <div className="mt-20 grid gap-8 md:grid-cols-2">

                        {/* Card */}

                        <div className="rounded-[30px] border border-[#E2E7DF] bg-white p-8 shadow-sm">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4EC]">

                                <ShieldCheck
                                    size={28}
                                    className="text-[#6D8364]"
                                />

                            </div>

                            <h3 className="mt-6 text-2xl font-semibold text-[#2F3A30]">
                                محرمانگی اطلاعات
                            </h3>

                            <p className="mt-4 leading-9 text-[#6C7971]">
                                تمامی اطلاعات و گفت‌وگوهای مراجعان کاملاً محرمانه
                                بوده و مطابق اصول حرفه‌ای روانشناسی نگهداری می‌شود.
                            </p>

                        </div>





                        {/* Card */}

                        <div className="rounded-[30px] border border-[#E2E7DF] bg-white p-8 shadow-sm">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4EC]">

                                <Clock3
                                    size={28}
                                    className="text-[#6D8364]"
                                />

                            </div>

                            <h3 className="mt-6 text-2xl font-semibold text-[#2F3A30]">
                                حضور به‌موقع
                            </h3>

                            <p className="mt-4 leading-9 text-[#6C7971]">
                                لطفاً چند دقیقه پیش از زمان تعیین‌شده آماده حضور
                                در جلسه باشید تا زمان مشاوره به بهترین شکل استفاده شود.
                            </p>

                        </div>





                        {/* Card */}

                        <div className="rounded-[30px] border border-[#E2E7DF] bg-white p-8 shadow-sm">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4EC]">

                                <CalendarX2
                                    size={28}
                                    className="text-[#6D8364]"
                                />

                            </div>

                            <h3 className="mt-6 text-2xl font-semibold text-[#2F3A30]">
                                تغییر یا لغو جلسه
                            </h3>

                            <p className="mt-4 leading-9 text-[#6C7971]">
                                در صورت نیاز به تغییر یا لغو زمان جلسه،
                                لطفاً در اولین فرصت اطلاع دهید تا امکان
                                هماهنگی مجدد فراهم شود.
                            </p>

                        </div>





                        {/* Card */}

                        <div className="rounded-[30px] border border-[#E2E7DF] bg-white p-8 shadow-sm">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4EC]">

                                <CircleHelp
                                    size={28}
                                    className="text-[#6D8364]"
                                />

                            </div>

                            <h3 className="mt-6 text-2xl font-semibold text-[#2F3A30]">
                                نیاز به راهنمایی؟
                            </h3>

                            <p className="mt-4 leading-9 text-[#6C7971]">
                                اگر پیش از ثبت درخواست سؤال یا ابهامی دارید،
                                می‌توانید از طریق صفحه تماس با من ارتباط برقرار کنید.
                            </p>

                        </div>

                    </div>

                </div>

            </section>
            {/* ========================================================= */}
            {/* Final CTA */}
            {/* ========================================================= */}

            <section className="relative overflow-hidden bg-[#5E7456] py-28">

                {/* Background Blur */}

                <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

                <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl" />





                <div className="relative mx-auto max-w-screen-xl px-6">

                    <div className="mx-auto max-w-4xl text-center">

                        <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm uppercase tracking-[4px] text-white backdrop-blur-md">

                            YOUR JOURNEY STARTS HERE

                        </span>





                        <h2 className="mt-8 text-4xl font-bold leading-relaxed text-white md:text-5xl">

                            اولین قدم برای تغییر،
                            <br />
                            امروز برداشته می‌شود.

                        </h2>





                        <p className="mx-auto mt-8 max-w-3xl leading-9 text-white/85">

                            تصمیم برای آغاز مسیر مشاوره، تصمیمی ارزشمند برای
                            سلامت روان، آرامش و رشد فردی است. اگر احساس می‌کنید
                            اکنون زمان مناسبی برای شروع این مسیر است،
                            خوشحال می‌شوم در کنار شما باشم.

                        </p>





                        {/* Quote */}

                        <div className="mx-auto mt-14 max-w-3xl rounded-[30px] border border-white/15 bg-white/5 p-8 backdrop-blur-sm">

                            <p className="text-lg leading-9 italic text-white/90">

                                « هر تغییر مثبت، از یک تصمیم کوچک آغاز می‌شود؛
                                تصمیمی برای شنیدن، درک شدن و ساختن آینده‌ای آرام‌تر. »

                            </p>

                        </div>





                        {/* Buttons */}

                        <div className="mt-14 flex flex-wrap justify-center gap-5">

                            <Link
                                href="/contact"
                                className="rounded-full bg-white px-8 py-4 font-medium text-[#5E7456] transition duration-300 hover:scale-105"
                            >
                                تماس با من
                            </Link>

                            <Link
                                href="/services"
                                className="rounded-full border border-white/30 px-8 py-4 font-medium text-white transition duration-300 hover:bg-white hover:text-[#5E7456]"
                            >
                                مشاهده خدمات
                            </Link>

                        </div>





                        {/* Bottom Text */}

                        <p className="mt-12 text-sm leading-8 tracking-wide text-white/70">

                            پس از ثبت درخواست، در کوتاه‌ترین زمان ممکن برای
                            هماهنگی نهایی جلسه با شما تماس گرفته خواهد شد.

                        </p>

                    </div>

                </div>

            </section>

        </main>
    );
}

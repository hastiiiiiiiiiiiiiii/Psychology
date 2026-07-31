"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Baby,
  School,
  Users,
  UserRound,
  MonitorSmartphone,
  HeartHandshake,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  CalendarCheck,
} from "lucide-react";

export default function Services() {
  return (
    <main className="overflow-hidden bg-[#FCFCF8]">

      {/* ========================================================= */}
      {/* Hero */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden">

        {/* Background Image */}

        <div className="absolute inset-0">

          <Image
            src="/services.png"
            alt="Psychology Services"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#20311F]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#20311F]/40 via-[#20311F]/60 to-[#FCFCF6]" />

        </div>

        <div className="relative mx-auto flex min-h-[85vh] max-w-screen-xl items-center px-6">

          <div className="max-w-3xl text-white">

            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm uppercase tracking-[4px] backdrop-blur-md">

              SERVICES

            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">

              خدمات مشاوره
              <br />
              برای آرامش و رشد

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/85">

              هر فرد داستان، دغدغه و مسیر متفاوتی دارد.
              خدمات مشاوره با توجه به نیازهای هر مراجع،
              در محیطی امن، آرام و بدون قضاوت ارائه می‌شود
              تا بتوانید با اطمینان مسیر رشد و سلامت روان
              خود را آغاز کنید.

            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/booking"
                className="rounded-full bg-white px-8 py-4 font-medium text-[#5E7456] transition duration-300 hover:scale-105"
              >
                رزرو جلسه
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/30 px-8 py-4 font-medium text-white transition duration-300 hover:bg-white hover:text-[#5E7456]"
              >
                تماس با من
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

              INTRODUCTION

            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#2F3A30]">

              همراه شما در مسیر سلامت روان

            </h2>

            <p className="mt-10 text-lg leading-[2.4] text-[#67756C]">

              هدف از جلسات مشاوره، تنها کاهش مشکلات نیست؛
              بلکه ایجاد فضایی برای شناخت بهتر خود،
              مدیریت احساسات، بهبود روابط و ساختن
              زندگی متعادل‌تر است.

            </p>

            <p className="mt-8 leading-9 text-[#6F7C73]">

              تمامی خدمات با رویکردی علمی، انسانی و
              متناسب با شرایط هر مراجع ارائه می‌شوند.
              در این مسیر، احترام، محرمانگی اطلاعات،
              همدلی و ایجاد احساس امنیت،
              مهم‌ترین اصول جلسات درمان خواهند بود.

            </p>

          </div>

        </div>

      </section>
      {/* ========================================================= */}
      {/* Services Grid */}
      {/* ========================================================= */}

      <section className="bg-[#F7F9F5] py-28">

        <div className="mx-auto max-w-screen-xl px-6">

          <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-[5px] text-[#809276]">
              OUR SERVICES
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#2F3A30]">
              خدمات تخصصی مشاوره
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-9 text-[#6C7971]">
              خدمات متناسب با نیازهای هر مراجع طراحی شده‌اند تا
              بتوانید در فضایی امن، آرام و حرفه‌ای مسیر درمان و
              رشد فردی خود را آغاز کنید.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {/* Card */}

            <div className="group rounded-[34px] border border-[#E2E7DF] bg-white p-9 transition duration-500 hover:-translate-y-3 hover:border-[#9CAF91] hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4EC] transition group-hover:bg-[#6D8364]">

                <Baby
                  size={32}
                  className="text-[#6D8364] transition group-hover:text-white"
                />

              </div>

              <h3 className="mt-8 text-2xl font-semibold text-[#2F3A30]">
                مشاوره کودک
              </h3>

              <p className="mt-5 leading-9 text-[#6C7971]">
                کمک به رشد هیجانی، رفتاری و اجتماعی کودکان،
                افزایش اعتمادبه‌نفس و حل مشکلات رفتاری
                با روش‌های علمی و بازی‌محور.
              </p>

            </div>

            {/* Card */}

            <div className="group rounded-[34px] border border-[#E2E7DF] bg-white p-9 transition duration-500 hover:-translate-y-3 hover:border-[#9CAF91] hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4EC] transition group-hover:bg-[#6D8364]">

                <School
                  size={30}
                  className="text-[#6D8364] transition group-hover:text-white"
                />

              </div>

              <h3 className="mt-8 text-2xl font-semibold text-[#2F3A30]">
                مشاوره نوجوان
              </h3>

              <p className="mt-5 leading-9 text-[#6C7971]">
                همراهی نوجوانان برای مدیریت استرس،
                مشکلات تحصیلی، روابط، هویت فردی
                و افزایش مهارت‌های زندگی.
              </p>

            </div>

            {/* Card */}

            <div className="group rounded-[34px] border border-[#E2E7DF] bg-white p-9 transition duration-500 hover:-translate-y-3 hover:border-[#9CAF91] hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4EC] transition group-hover:bg-[#6D8364]">

                <Users
                  size={30}
                  className="text-[#6D8364] transition group-hover:text-white"
                />

              </div>

              <h3 className="mt-8 text-2xl font-semibold text-[#2F3A30]">
                مشاوره خانواده
              </h3>

              <p className="mt-5 leading-9 text-[#6C7971]">
                بهبود روابط خانوادگی، مدیریت تعارض‌ها،
                تقویت مهارت‌های ارتباطی و ایجاد
                محیطی سالم‌تر برای خانواده.
              </p>

            </div>

            {/* Card */}

            <div className="group rounded-[34px] border border-[#E2E7DF] bg-white p-9 transition duration-500 hover:-translate-y-3 hover:border-[#9CAF91] hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4EC] transition group-hover:bg-[#6D8364]">

                <UserRound
                  size={30}
                  className="text-[#6D8364] transition group-hover:text-white"
                />

              </div>

              <h3 className="mt-8 text-2xl font-semibold text-[#2F3A30]">
                جلسات فردی
              </h3>

              <p className="mt-5 leading-9 text-[#6C7971]">
                درمان اضطراب، افسردگی، وسواس،
                افزایش خودآگاهی و کمک به رشد
                شخصی و سلامت روان.
              </p>

            </div>

            {/* Card */}

            <div className="group rounded-[34px] border border-[#E2E7DF] bg-white p-9 transition duration-500 hover:-translate-y-3 hover:border-[#9CAF91] hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4EC] transition group-hover:bg-[#6D8364]">

                <MonitorSmartphone
                  size={30}
                  className="text-[#6D8364] transition group-hover:text-white"
                />

              </div>

              <h3 className="mt-8 text-2xl font-semibold text-[#2F3A30]">
                جلسات آنلاین
              </h3>

              <p className="mt-5 leading-9 text-[#6C7971]">
                دریافت خدمات مشاوره از هر نقطه
                با همان کیفیت جلسات حضوری
                و حفظ کامل محرمانگی.
              </p>

            </div>

            {/* Card */}

            <div className="group rounded-[34px] border border-[#E2E7DF] bg-white p-9 transition duration-500 hover:-translate-y-3 hover:border-[#9CAF91] hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4EC] transition group-hover:bg-[#6D8364]">

                <HeartHandshake
                  size={30}
                  className="text-[#6D8364] transition group-hover:text-white"
                />

              </div>

              <h3 className="mt-8 text-2xl font-semibold text-[#2F3A30]">
                زوج‌درمانی
              </h3>

              <p className="mt-5 leading-9 text-[#6C7971]">
                کمک به زوج‌ها برای افزایش
                کیفیت ارتباط، حل تعارض‌ها،
                تقویت اعتماد و درک متقابل.
              </p>

            </div>

          </div>

        </div>

      </section>
      {/* ========================================================= */}
      {/* Why Choose */}
      {/* ========================================================= */}

      <section className="bg-[#FCFCF8] py-28">

        <div className="mx-auto max-w-screen-xl px-6">


          <div className="grid items-center gap-16 lg:grid-cols-2">


            {/* Text */}

            <div>


              <span className="text-sm font-semibold uppercase tracking-[5px] text-[#809276]">
                WHY CHOOSE ME
              </span>


              <h2 className="mt-6 text-4xl font-bold leading-relaxed text-[#2F3A30]">

                چرا انتخاب هدی مرادی؟

              </h2>


              <p className="mt-8 leading-9 text-[#6C7971]">

                جلسات مشاوره در فضایی امن، حرفه‌ای و همراه با
                همدلی برگزار می‌شوند. هدف، ایجاد مسیری روشن
                برای شناخت بهتر خود، حل چالش‌ها و رسیدن به
                آرامش پایدار است.

              </p>



              <div className="mt-10 space-y-5">


                <div className="flex items-center gap-4">

                  <CheckCircle2
                    className="text-[#6D8364]"
                    size={25}
                  />

                  <span className="text-[#4F5C52]">
                    رویکرد علمی و تخصصی در جلسات درمان
                  </span>

                </div>



                <div className="flex items-center gap-4">

                  <ShieldCheck
                    className="text-[#6D8364]"
                    size={25}
                  />

                  <span className="text-[#4F5C52]">
                    حفظ کامل محرمانگی و احساس امنیت
                  </span>

                </div>



                <div className="flex items-center gap-4">

                  <Sparkles
                    className="text-[#6D8364]"
                    size={25}
                  />

                  <span className="text-[#4F5C52]">
                    توجه به شرایط و نیازهای هر فرد
                  </span>

                </div>


              </div>


            </div>




            {/* Card */}


            <div className="rounded-[40px] bg-[#EEF4EC] p-10">


              <div className="rounded-[32px] bg-white p-10">


                <h3 className="text-2xl font-bold text-[#2F3A30]">

                  شروع مسیر تغییر

                </h3>


                <p className="mt-5 leading-9 text-[#6C7971]">

                  هر تغییر بزرگی با یک قدم کوچک آغاز می‌شود.
                  اولین جلسه می‌تواند شروعی برای شناخت بهتر
                  خود و رسیدن به آرامش بیشتر باشد.

                </p>


                <div className="mt-8 flex items-center gap-4">


                  <CalendarCheck
                    size={30}
                    className="text-[#6D8364]"
                  />


                  <span className="text-[#4F5C52]">

                    رزرو آسان جلسات مشاوره

                  </span>


                </div>


              </div>


            </div>



          </div>


        </div>


      </section>





      {/* ========================================================= */}
      {/* Consultation Process */}
      {/* ========================================================= */}


      <section className="bg-[#F7F9F5] py-28">


        <div className="mx-auto max-w-screen-xl px-6">


          <div className="text-center">


            <span className="text-sm font-semibold uppercase tracking-[5px] text-[#809276]">

              PROCESS

            </span>


            <h2 className="mt-5 text-4xl font-bold text-[#2F3A30]">

              روند شروع جلسات مشاوره

            </h2>


          </div>




          <div className="mt-16 grid gap-8 md:grid-cols-3">



            <div className="rounded-[32px] bg-white p-8 text-center">


              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E8F0E4] text-[#6D8364]">

                01

              </div>


              <h3 className="mt-6 text-xl font-bold text-[#2F3A30]">

                انتخاب خدمت

              </h3>


              <p className="mt-4 leading-8 text-[#6C7971]">

                نوع مشاوره مناسب با نیاز خود را انتخاب کنید.

              </p>


            </div>




            <div className="rounded-[32px] bg-white p-8 text-center">


              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E8F0E4] text-[#6D8364]">

                02

              </div>


              <h3 className="mt-6 text-xl font-bold text-[#2F3A30]">

                رزرو جلسه

              </h3>


              <p className="mt-4 leading-8 text-[#6C7971]">

                زمان مناسب را انتخاب کرده و درخواست خود را ثبت کنید.

              </p>


            </div>




            <div className="rounded-[32px] bg-white p-8 text-center">


              <div className="mx-auto flex h-14 w-14 ایجاد-کن justify-center rounded-full bg-[#E8F0E4] text-[#6D8364]">

                03

              </div>


              <h3 className="mt-6 text-xl font-bold text-[#2F3A30]">

                شروع مسیر درمان

              </h3>


              <p className="mt-4 leading-8 text-[#6C7971]">

                در فضایی امن و حرفه‌ای جلسات خود را آغاز کنید.

              </p>


            </div>



          </div>


        </div>


      </section>
      {/* ========================================================= */}
      {/* CTA Booking */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden py-28">


        <div className="absolute inset-0">

          <div className="absolute inset-0 bg-[#5E7456]" />

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-20 -left-20 h-72 h-72 rounded-full bg-white/10 blur-3xl" />

        </div>



        <div className="relative mx-auto max-w-screen-xl px-6">


          <div className="mx-auto max-w-3xl text-center text-white">


            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm tracking-[4px] backdrop-blur-md">

              BOOK A SESSION

            </span>



            <h2 className="mt-8 text-4xl font-bold leading-relaxed md:text-5xl">

              آماده شروع مسیر آرامش هستید؟

            </h2>



            <p className="mt-8 leading-9 text-white/85">


              اولین قدم برای ایجاد تغییر،
              صحبت کردن و دریافت حمایت تخصصی است.
              می‌توانید همین امروز جلسه مشاوره خود را رزرو کنید.


            </p>



            <div className="mt-10 flex flex-wrap justify-center gap-5">


              <Link
                href="/booking"
                className="
                flex
                items-center
                gap-3
                rounded-full
                bg-white
                px-8
                py-4
                font-medium
                text-[#5E7456]
                transition
                duration-300
                hover:scale-105
                "
              >

                رزرو جلسه مشاوره

                <ArrowLeft size={18} />

              </Link>



              <Link
                href="/contact"
                className="
                rounded-full
                border
                border-white/30
                px-8
                py-4
                text-white
                transition
                duration-300
                hover:bg-white
                hover:text-[#5E7456]
                "
              >

                تماس با من

              </Link>


            </div>


          </div>


        </div>


      </section>





      {/* ========================================================= */}
      {/* FAQ Preview */}
      {/* ========================================================= */}


      <section className="bg-[#FCFCF8] py-24">


        <div className="mx-auto max-w-screen-xl px-6">


          <div className="text-center">


            <span className="text-sm font-semibold uppercase tracking-[5px] text-[#809276]">

              FAQ

            </span>



            <h2 className="mt-5 text-4xl font-bold text-[#2F3A30]">

              سوالات متداول

            </h2>


          </div>




          <div className="mx-auto mt-14 max-w-4xl space-y-5">


            <div
              className="
              rounded-3xl
              border
              border-[#E2E7DF]
              bg-white
              p-7
              "
            >

              <h3 className="text-lg font-semibold text-[#2F3A30]">

                جلسات مشاوره چگونه برگزار می‌شوند؟

              </h3>


              <p className="mt-4 leading-8 text-[#6C7971]">

                جلسات به صورت حضوری و آنلاین برگزار می‌شوند
                و با توجه به شرایط هر مراجع برنامه‌ریزی خواهند شد.

              </p>


            </div>





            <div
              className="
              rounded-3xl
              border
              border-[#E2E7DF]
              bg-white
              p-7
              "
            >

              <h3 className="text-lg font-semibold text-[#2F3A30]">

                آیا اطلاعات جلسات محرمانه هستند؟

              </h3>


              <p className="mt-4 leading-8 text-[#6C7971]">

                بله، حفظ حریم شخصی و محرمانگی اطلاعات،
                یکی از اصول اصلی جلسات مشاوره است.

              </p>


            </div>





            <div
              className="
              rounded-3xl
              border
              border-[#E2E7DF]
              bg-white
              p-7
              "
            >

              <h3 className="text-lg font-semibold text-[#2F3A30]">

                چگونه می‌توانم وقت مشاوره رزرو کنم؟

              </h3>


              <p className="mt-4 leading-8 text-[#6C7971]">

                از طریق صفحه رزرو نوبت می‌توانید
                زمان مناسب خود را انتخاب و درخواست خود را ثبت کنید.

              </p>


            </div>



          </div>


        </div>


      </section>
    </main>
  );
}
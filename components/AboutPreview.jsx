"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, GraduationCap, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <section className="bg-[#F3EEE4] py-28">
      <div className="mx-auto grid max-w-screen-xl items-center gap-16 px-6 lg:grid-cols-2">
        
        {/* Image */}
        <div className="relative flex justify-center">
          <div className="absolute h-[560px] w-[420px] rounded-[70px] bg-[#D9E4D3]" />

          <div className="relative overflow-hidden rounded-[70px] shadow-2xl">
            <Image
              src="/about.jpg"
              alt="Hoda Moradi"
              width={460}
              height={620}
              className="h-[560px] w-[420px] object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-right">
          <span className="rounded-full bg-[#E8DFC9] px-5 py-2 text-sm text-[#5F7354]">
            درباره من
          </span>

          <h2 className="mt-6 text-4xl font-black leading-relaxed text-[#364033]">
            همراه شما در مسیر آرامش،
            رشد و سلامت روان
          </h2>

          <p className="mt-8 leading-9 text-[#6F786C]">
            من هدی مرادی، روانشناس و مشاور کودک، نوجوان و خانواده هستم.
            باور دارم هر انسانی شایسته شنیده شدن، درک شدن و تجربه آرامش است.
            تلاش من ایجاد فضایی امن و حرفه‌ای برای همراهی شما در مسیر حل
            چالش‌های زندگی و رشد فردی است.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <Award className="mx-auto mb-4 text-[#7D9B76]" size={34} />
              <h4 className="font-bold text-[#364033]">
                گواهینامه‌ها
              </h4>
            </div>

            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <GraduationCap
                className="mx-auto mb-4 text-[#7D9B76]"
                size={34}
              />
              <h4 className="font-bold text-[#364033]">
                تخصص علمی
              </h4>
            </div>

            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <HeartHandshake
                className="mx-auto mb-4 text-[#7D9B76]"
                size={34}
              />
              <h4 className="font-bold text-[#364033]">
                همراهی حرفه‌ای
              </h4>
            </div>
          </div>

          <Link
            href="/about"
            className="mt-10 inline-flex rounded-full bg-[#5F7354] px-8 py-4 text-white transition hover:bg-[#4E6248]"
          >
            مشاهده رزومه کامل
          </Link>
        </div>
      </div>
    </section>
  );
}
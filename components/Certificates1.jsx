"use client";

import Image from "next/image";


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
            src="/certificates.jpg"
            alt="Professional Certificates"
            fill
            priority
            className="object-cover"
          />


          <div className="absolute inset-0 bg-[#20311F]/65" />


          <div className="absolute inset-0 bg-gradient-to-b from-[#20311F]/40 via-[#20311F]/60 to-[#FCFCF8]" />


        </div>




        <div className="relative mx-auto flex min-h-[85vh] max-w-screen-xl items-center px-6">


          <div className="max-w-3xl text-white">


            <span
              className="
              rounded-full
              border
              border-white/20
              bg-white/10
              px-5
              py-2
              text-sm
              tracking-[4px]
              backdrop-blur-md
              "
            >

              CERTIFICATES

            </span>




            <h1
              className="
              mt-8
              text-5xl
              font-bold
              leading-tight
              md:text-7xl
              "
            >

              مدارک و سوابق
              <br />
              حرفه‌ای

            </h1>




            <p
              className="
              mt-8
              max-w-2xl
              text-lg
              leading-9
              text-white/85
              "
            >

              تخصص، دانش و تجربه پایه‌های اصلی
              یک فرآیند درمانی موفق هستند.
              در این بخش می‌توانید مدارک،
              گواهینامه‌ها و مسیر حرفه‌ای هدی مرادی
              را مشاهده کنید.

            </p>



          </div>


        </div>


      </section>





      {/* ========================================================= */}
      {/* Introduction */}
      {/* ========================================================= */}


      <section className="py-28">


        <div className="mx-auto max-w-screen-xl px-6">


          <div className="mx-auto max-w-4xl text-center">


            <span
              className="
              text-sm
              font-semibold
              uppercase
              tracking-[5px]
              text-[#809276]
              "
            >

              PROFESSIONAL BACKGROUND

            </span>




            <h2
              className="
              mt-5
              text-4xl
              font-bold
              leading-relaxed
              text-[#2F3A30]
              "
            >

              تخصص و تجربه، پایه اعتماد شما

            </h2>




            <p
              className="
              mt-10
              text-lg
              leading-[2.4]
              text-[#67756C]
              "
            >

              انتخاب یک روانشناس مناسب،
              نیازمند اطمینان از دانش،
              تجربه و مسیر حرفه‌ای اوست.
              مدارک علمی و سوابق کاری،
              نشان‌دهنده تعهد به یادگیری،
              رشد حرفه‌ای و ارائه خدمات
              تخصصی هستند.

            </p>




            <p
              className="
              mt-8
              leading-9
              text-[#6F7C73]
              "
            >

              تمامی فعالیت‌های حرفه‌ای بر اساس
              اصول اخلاقی، رویکرد علمی و حفظ
              محرمانگی مراجعان انجام می‌شود
              تا فضایی امن و قابل اعتماد
              برای دریافت خدمات مشاوره ایجاد شود.

            </p>



          </div>


        </div>


      </section>
            {/* ========================================================= */}
      {/* Certificate Cards */}
      {/* ========================================================= */}

      <section className="bg-[#F7F9F5] py-28">

        <div className="mx-auto max-w-screen-xl px-6">

          {/* Section Header */}

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[5px] text-[#809276]">
              QUALIFICATIONS
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#2F3A30]">
              مدارک و گواهینامه‌های حرفه‌ای
            </h2>

            <p className="mt-6 leading-9 text-[#6C7971]">
              دانش تخصصی و آموزش مستمر، پایه ارائه خدمات حرفه‌ای
              در حوزه روانشناسی و مشاوره است.
            </p>

          </div>





          {/* Cards */}

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">


            {/* Card 1 */}

            <div className="group rounded-[34px] border border-[#E2E7DF] bg-white p-8 transition duration-500 hover:-translate-y-3 hover:border-[#9CAF91] hover:shadow-xl">

              <div className="overflow-hidden rounded-2xl">

                <Image
                  src="/certificate-1.jpg"
                  alt="University Degree"
                  width={500}
                  height={650}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              <h3 className="mt-7 text-2xl font-semibold text-[#2F3A30]">
                مدرک دانشگاهی
              </h3>

              <p className="mt-4 leading-8 text-[#6C7971]">
                مدرک کارشناسی یا کارشناسی ارشد روانشناسی
                از دانشگاه معتبر.
              </p>

            </div>





            {/* Card 2 */}

            <div className="group rounded-[34px] border border-[#E2E7DF] bg-white p-8 transition duration-500 hover:-translate-y-3 hover:border-[#9CAF91] hover:shadow-xl">

              <div className="overflow-hidden rounded-2xl">

                <Image
                  src="/certificate-2.jpg"
                  alt="Professional License"
                  width={500}
                  height={650}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              <h3 className="mt-7 text-2xl font-semibold text-[#2F3A30]">
                پروانه فعالیت
              </h3>

              <p className="mt-4 leading-8 text-[#6C7971]">
                مجوز رسمی فعالیت در حوزه روانشناسی
                و ارائه خدمات مشاوره.
              </p>

            </div>





            {/* Card 3 */}

            <div className="group rounded-[34px] border border-[#E2E7DF] bg-white p-8 transition duration-500 hover:-translate-y-3 hover:border-[#9CAF91] hover:shadow-xl">

              <div className="overflow-hidden rounded-2xl">

                <Image
                  src="/certificate-3.jpg"
                  alt="Specialized Courses"
                  width={500}
                  height={650}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              <h3 className="mt-7 text-2xl font-semibold text-[#2F3A30]">
                دوره‌های تخصصی
              </h3>

              <p className="mt-4 leading-8 text-[#6C7971]">
                شرکت در کارگاه‌ها و دوره‌های
                تخصصی روانشناسی و درمان.
              </p>

            </div>





            {/* Card 4 */}

            <div className="group rounded-[34px] border border-[#E2E7DF] bg-white p-8 transition duration-500 hover:-translate-y-3 hover:border-[#9CAF91] hover:shadow-xl">

              <div className="overflow-hidden rounded-2xl">

                <Image
                  src="/certificate-4.jpg"
                  alt="Workshops"
                  width={500}
                  height={650}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              <h3 className="mt-7 text-2xl font-semibold text-[#2F3A30]">
                گواهینامه‌های حرفه‌ای
              </h3>

              <p className="mt-4 leading-8 text-[#6C7971]">
                دریافت گواهینامه‌های معتبر
                از دوره‌ها و آموزش‌های تخصصی.
              </p>

            </div>


          </div>


        </div>

      </section>
            {/* ========================================================= */}
      {/* Professional Journey */}
      {/* ========================================================= */}

      <section className="bg-[#FCFCF8] py-28">

        <div className="mx-auto max-w-screen-xl px-6">

          {/* Section Header */}

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[5px] text-[#809276]">
              PROFESSIONAL JOURNEY
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#2F3A30]">
              مسیر حرفه‌ای
            </h2>

            <p className="mt-6 leading-9 text-[#6C7971]">
              رشد حرفه‌ای یک مسیر پیوسته است. یادگیری مداوم،
              تجربه عملی و تعهد به ارائه خدمات باکیفیت،
              بخش مهمی از این مسیر را تشکیل می‌دهد.
            </p>

          </div>





          {/* Timeline */}

          <div className="mx-auto mt-20 max-w-5xl">

            {/* Item */}

            <div className="relative flex gap-8 pb-14">

              <div className="flex flex-col items-center">

                <div className="h-5 w-5 rounded-full bg-[#6D8364]" />

                <div className="mt-2 h-full w-px bg-[#D8E0D3]" />

              </div>

              <div>

                <span className="text-sm font-medium text-[#809276]">
                  آغاز مسیر
                </span>

                <h3 className="mt-2 text-2xl font-semibold text-[#2F3A30]">
                  تحصیلات دانشگاهی
                </h3>

                <p className="mt-4 leading-9 text-[#6C7971]">
                  آغاز فعالیت علمی با تمرکز بر روانشناسی و
                  شناخت عمیق‌تر رفتار، هیجانات و سلامت روان.
                </p>

              </div>

            </div>





            {/* Item */}

            <div className="relative flex gap-8 pb-14">

              <div className="flex flex-col items-center">

                <div className="h-5 w-5 rounded-full bg-[#6D8364]" />

                <div className="mt-2 h-full w-px bg-[#D8E0D3]" />

              </div>

              <div>

                <span className="text-sm font-medium text-[#809276]">
                  توسعه تخصص
                </span>

                <h3 className="mt-2 text-2xl font-semibold text-[#2F3A30]">
                  شرکت در دوره‌های تخصصی
                </h3>

                <p className="mt-4 leading-9 text-[#6C7971]">
                  حضور در کارگاه‌ها، دوره‌های آموزشی و برنامه‌های
                  تخصصی با هدف به‌روز نگه داشتن دانش و مهارت‌های
                  حرفه‌ای.
                </p>

              </div>

            </div>





            {/* Item */}

            <div className="relative flex gap-8 pb-14">

              <div className="flex flex-col items-center">

                <div className="h-5 w-5 rounded-full bg-[#6D8364]" />

                <div className="mt-2 h-full w-px bg-[#D8E0D3]" />

              </div>

              <div>

                <span className="text-sm font-medium text-[#809276]">
                  تجربه حرفه‌ای
                </span>

                <h3 className="mt-2 text-2xl font-semibold text-[#2F3A30]">
                  ارائه خدمات مشاوره
                </h3>

                <p className="mt-4 leading-9 text-[#6C7971]">
                  ارائه خدمات روانشناسی و مشاوره با رویکردی
                  علمی، انسانی و متناسب با شرایط هر مراجع
                  در محیطی امن و قابل اعتماد.
                </p>

              </div>

            </div>





            {/* Item */}

            <div className="relative flex gap-8">

              <div className="flex flex-col items-center">

                <div className="h-5 w-5 rounded-full bg-[#6D8364]" />

              </div>

              <div>

                <span className="text-sm font-medium text-[#809276]">
                  امروز
                </span>

                <h3 className="mt-2 text-2xl font-semibold text-[#2F3A30]">
                  یادگیری و رشد مستمر
                </h3>

                <p className="mt-4 leading-9 text-[#6C7971]">
                  توسعه مداوم دانش، مطالعه منابع علمی و شرکت در
                  آموزش‌های جدید برای ارائه خدمات به‌روز و مؤثر
                  به مراجعان.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ========================================================= */}
      {/* Professional Values */}
      {/* ========================================================= */}

      <section className="bg-[#F7F9F5] py-28">

        <div className="mx-auto max-w-screen-xl px-6">

          {/* Header */}

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[5px] text-[#809276]">
              PROFESSIONAL VALUES
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#2F3A30]">
              اصول حرفه‌ای در جلسات مشاوره
            </h2>

            <p className="mt-6 leading-9 text-[#6C7971]">
              تمامی جلسات بر پایه احترام، اعتماد و استانداردهای
              حرفه‌ای برگزار می‌شوند تا مراجعان با آرامش و اطمینان،
              مسیر درمان خود را آغاز کنند.
            </p>

          </div>





          {/* Values */}

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {/* Card */}

            <div className="rounded-[34px] bg-white border border-[#E2E7DF] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4EC] text-3xl">
                🔒
              </div>

              <h3 className="mt-7 text-2xl font-semibold text-[#2F3A30]">
                محرمانگی
              </h3>

              <p className="mt-5 leading-9 text-[#6C7971]">
                تمامی اطلاعات و گفتگوهای جلسات با حفظ کامل
                حریم خصوصی و محرمانگی نگهداری می‌شوند.
              </p>

            </div>





            {/* Card */}

            <div className="rounded-[34px] bg-white border border-[#E2E7DF] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4EC] text-3xl">
                🤝
              </div>

              <h3 className="mt-7 text-2xl font-semibold text-[#2F3A30]">
                همدلی
              </h3>

              <p className="mt-5 leading-9 text-[#6C7971]">
                ایجاد فضایی امن، بدون قضاوت و همراه با احترام
                برای بیان احساسات و دغدغه‌های مراجع.
              </p>

            </div>





            {/* Card */}

            <div className="rounded-[34px] bg-white border border-[#E2E7DF] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4EC] text-3xl">
                📚
              </div>

              <h3 className="mt-7 text-2xl font-semibold text-[#2F3A30]">
                دانش به‌روز
              </h3>

              <p className="mt-5 leading-9 text-[#6C7971]">
                استفاده از روش‌های علمی و به‌روز روانشناسی
                برای ارائه خدمات مؤثر و تخصصی.
              </p>

            </div>





            {/* Card */}

            <div className="rounded-[34px] bg-white border border-[#E2E7DF] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4EC] text-3xl">
                🌿
              </div>

              <h3 className="mt-7 text-2xl font-semibold text-[#2F3A30]">
                رشد مستمر
              </h3>

              <p className="mt-5 leading-9 text-[#6C7971]">
                یادگیری مداوم، توسعه مهارت‌ها و ارتقای کیفیت
                خدمات، بخشی جدانشدنی از مسیر حرفه‌ای است.
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* ========================================================= */}
      {/* Contact CTA */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden py-28">

        {/* Background */}

        <div className="absolute inset-0">

          <div className="absolute inset-0 bg-[#5E7456]" />

          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        </div>



        <div className="relative mx-auto max-w-screen-xl px-6">


          <div className="mx-auto max-w-3xl text-center text-white">


            <span
              className="
              rounded-full
              border
              border-white/20
              bg-white/10
              px-5
              py-2
              text-sm
              tracking-[4px]
              backdrop-blur-md
              "
            >
              CONTACT
            </span>



            <h2
              className="
              mt-8
              text-4xl
              font-bold
              leading-relaxed
              md:text-5xl
              "
            >
              اگر سؤال یا ابهامی دارید،
              خوشحال می‌شوم همراهتان باشم.
            </h2>



            <p
              className="
              mt-8
              leading-9
              text-white/85
              "
            >
              اگر درباره خدمات، مدارک حرفه‌ای یا روند جلسات
              پرسشی دارید، می‌توانید از طریق صفحه تماس
              با من در ارتباط باشید.
            </p>



            <div className="mt-12 flex flex-wrap justify-center gap-5">


              <Link
                href="/contact"
                className="
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
                ارتباط با من
              </Link>



              <Link
                href="/about"
                className="
                rounded-full
                border
                border-white/30
                px-8
                py-4
                font-medium
                text-white
                transition
                duration-300
                hover:bg-white
                hover:text-[#5E7456]
                "
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
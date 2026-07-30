import localFont from "next/font/local";

export const vazirmatn = localFont({
  src: [
    {
      path: "../public/fonts/vazirmatn/Vazirmatn/Vazirmatn-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/vazirmatn/Vazirmatn/Vazirmatn-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/vazirmatn/Vazirmatn/Vazirmatn-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/vazirmatn/Vazirmatn/Vazirmatn-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});
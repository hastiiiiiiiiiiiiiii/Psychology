import "../globals.css";
import Header from "@/components/Header";
import Footer from '@/components/Footer'

export const metadata = {
  title: "Hoda Moradi",
  description: "Psychology Counseling Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
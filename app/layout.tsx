import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { PopupProvider } from "@/components/PopupProvider";
import { ProductModalProvider } from "@/components/ProductModalProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  style: ["italic", "normal"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Саган Зам — меховое онлайн-ателье",
  description:
    "Дизайнерский перешив шуб, пошив премиальных пальто double-face и изделий из меха соболя.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="font-sans text-espresso bg-cream overflow-x-hidden">
        <PopupProvider>
          <ProductModalProvider>{children}</ProductModalProvider>
        </PopupProvider>
      </body>
    </html>
  );
}

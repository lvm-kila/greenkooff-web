import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "GVC | Arquitectura Comercial Premium",
  description:
    "GVC diseña sistemas de marketing, automatización y tecnología para empresas que buscan escalar con control comercial.",
  metadataBase: new URL("https://gvc.cl"),
  openGraph: {
    title: "GVC | Arquitectura Comercial Premium",
    description:
      "Alineamos marketing, tecnología y operación para crear crecimiento comercial sostenible en empresas de Chile y LATAM.",
    url: "/",
    siteName: "GVC",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}

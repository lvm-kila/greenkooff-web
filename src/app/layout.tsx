import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GVC | Marketing, Automatización y Tecnología",
  description: "Web corporativa premium de servicios digitales para emprendedores, pymes y empresas en Chile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

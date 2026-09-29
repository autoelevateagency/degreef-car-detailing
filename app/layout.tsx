import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { LocaleProvider } from "@/context/LocaleContext";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: "DEGREEF Mobile Car Detailing",
  description: "Studio-grade mobile car detailing, delivered to your driveway.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement => {
  return (
    <html lang="en" className={`${archivo.variable} h-full antialiased`}>
      <body className="min-h-full">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
};

export default RootLayout;

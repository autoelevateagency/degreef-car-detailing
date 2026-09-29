"use client";

import { useEffect } from "react";
import { useLocale } from "@/context/LocaleContext";
import { About } from "@/components/sections/About/About";
import { Contact } from "@/components/sections/Contact/Contact";
import { FinalCta } from "@/components/sections/FinalCta/FinalCta";
import { Footer } from "@/components/sections/Footer/Footer";
import { Hero } from "@/components/sections/Hero/Hero";
import { Nav } from "@/components/sections/Nav/Nav";
import { ServiceArea } from "@/components/sections/ServiceArea/ServiceArea";
import { Services } from "@/components/sections/Services/Services";
import { Showcase } from "@/components/sections/Showcase/Showcase";
import { Testimonials } from "@/components/sections/Testimonials/Testimonials";
export const HomePage = (): React.ReactElement => {
  const { dir } = useLocale();

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = dir === "rtl" ? "ur" : "en";
  }, [dir]);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <Testimonials />
        <About />
        <ServiceArea />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
};

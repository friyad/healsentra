import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import LogoCloud from "./logo-cloud";
import { IconArrowUpRight, IconPlayerPlayFilled } from "@tabler/icons-react";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center py-20 px-6">
      <div className="md:mt-6 flex items-center justify-center">
        <div className="text-center max-w-2xl flex flex-col items-center justify-center">
          <h1 className="max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
            Healsentra - Smart Healthcare Dashboard
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg">
            Monitor patients, manage records, and track real-time healthcare
            data with ease. Healsentra provides a centralized hub for doctors
            and administrators to deliver efficient, data-driven care.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center sm:justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full text-base"
            >
              Get Started <IconArrowUpRight className="!h-5 !w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base shadow-none"
            >
              <IconPlayerPlayFilled className="!h-5 !w-5" /> Watch Demo
            </Button>
          </div>
        </div>
      </div>
      <LogoCloud className="mt-24 max-w-3xl mx-auto" />
    </div>
  );
};

export default Hero;

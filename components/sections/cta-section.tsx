"use client";
import React from "react";
import { BackgroundBeams } from "../global/background-beams";
import Link from "next/link";
import { HoverBorderGradient } from "../global/hover-border-gradient";
import { motion } from "motion/react";

export function CtaSection() {
  return (
    <div className="h-[30rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Ready to Accelerate Your Career?
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-lg text-center relative z-10">
          Join thousands of professionals who are advancing their careers with
          AI-powered guidance.
        </p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/dashboard">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span>Start Your Journey Today</span>
            </HoverBorderGradient>
          </Link>
        </motion.div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

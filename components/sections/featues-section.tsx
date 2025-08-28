"use client";
import React, { useId, useEffect, useState } from "react";

export function FeaturesSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
        Powerful Features for Your Career Growth
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "AI Career Navigator",
    description:
      "Smart, personalized guidance that maps your ideal career path with AI-driven insights.",
  },
  {
    title: "Next-Gen Resume Builder",
    description:
      "Create sleek, ATS-proof resumes designed to grab recruiter attention instantly.",
  },
  {
    title: "Resume Intelligence",
    description:
      "Analyze your resume with AI to detect gaps, boost keywords, and optimize impact.",
  },
  {
    title: "Cover Letter AI",
    description:
      "Generate tailored, professional cover letters that adapt to every job role.",
  },
  {
    title: "Future Pathway Generator",
    description:
      "AI-crafted roadmaps showing the exact skills, tools, and steps for your dream role.",
  },
  {
    title: "Interview Q&A AI",
    description:
      "Practice role-specific questions with instant AI feedback on clarity and depth.",
  },
  {
    title: "Voice Interview Simulator",
    description:
      "Train with AI voice sessions that refine tone, pace, and communication confidence.",
  },
  {
    title: "Live Industry Pulse",
    description:
      "Stay ahead with real-time trends, salary insights, and evolving skill demands.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const [p, setP] = useState<number[][]>([]);

  useEffect(() => {
    if (!pattern) {
      setP([
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      ]);
    }
  }, [pattern]);

  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={pattern ?? p}
          className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {(
            Array.from(
              new Set(squares.map(([x, y]: any) => `${x}-${y}`))
            ) as string[]
          ).map((key) => {
            const [xVal, yVal] = key.split("-").map(Number);
            return (
              <rect
                strokeWidth="0"
                key={key}
                width={width + 1}
                height={height + 1}
                x={xVal * width}
                y={yVal * height}
              />
            );
          })}
        </svg>
      )}
    </svg>
  );
}

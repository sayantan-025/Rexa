"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const statsData = [
  { value: 50, suffix: "+", label: "Industries Covered" },
  { value: 1000, suffix: "+", label: "Interview Questions" },
  { value: 95, suffix: "%", label: "Success Rate" },
  { value: 24, suffix: "/7", label: "AI Support" },
];

const StatsSection = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals: ReturnType<typeof setInterval>[] = [];

    statsData.forEach((stat, index) => {
      const increment = Math.ceil(stat.value / 100);
      intervals[index] = setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.value) {
            newCounts[index] += increment;
            if (newCounts[index] > stat.value) newCounts[index] = stat.value;
          }
          return newCounts;
        });
      }, 20); // Adjust speed
    });

    return () => intervals.forEach((i) => clearInterval(i));
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-6 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center"
      >
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-4xl font-bold">
              {counts[index]}
              {stat.suffix}
            </h3>
            <p className="text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default StatsSection;

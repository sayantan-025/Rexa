import { cn } from "@/lib/utils";
import {
  UserPlus,
  FileEdit,
  Mic,
  ChartLine,
  Eye,
  Map,
  BookOpen,
  Zap,
} from "lucide-react";

export function HowItWorks() {
  const features = [
    {
      title: "Professional Onboarding",
      description:
        "Share your skills, experience, and goals to receive personalized AI career guidance.",
      icon: <UserPlus className="w-8 h-8 text-primary" />,
    },
    {
      title: "Craft Your Documents",
      description:
        "Create ATS-optimized resumes and tailored cover letters for your target roles.",
      icon: <FileEdit className="w-8 h-8 text-primary" />,
    },
    {
      title: "Mock Interview Prep",
      description:
        "Practice role-specific interview questions with instant AI feedback on clarity and depth.",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
    },
    {
      title: "Voice Interview Simulator",
      description:
        "Train with voice-based AI sessions to refine tone, pace, and confidence.",
      icon: <Mic className="w-8 h-8 text-primary" />,
    },
    {
      title: "Track Your Progress",
      description:
        "Monitor your improvement with detailed analytics and skill gap insights.",
      icon: <ChartLine className="w-8 h-8 text-primary" />,
    },
    {
      title: "Future Pathway Generator",
      description:
        "Get AI-generated roadmaps with the exact skills, courses, and projects to reach your dream role.",
      icon: <Map className="w-8 h-8 text-primary" />,
    },
    {
      title: "Industry Insights",
      description:
        "Stay ahead with live industry trends, salary benchmarks, and evolving skill demands.",
      icon: <Eye className="w-8 h-8 text-primary" />,
    },
    {
      title: "Rapid Skill Boost",
      description:
        "Learn critical skills quickly with AI-curated mini-tasks and hands-on exercises.",
      icon: <Zap className="w-8 h-8 text-primary" />,
    },
  ];
  return (
    <div>
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-muted-foreground">
          Four simple steps to accelerate your career growth
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10  max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

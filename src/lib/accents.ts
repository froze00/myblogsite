type AccentName =
  | "emerald"
  | "teal"
  | "amber"
  | "orange"
  | "rose"
  | "violet"
  | "cyan";

interface AccentStyles {
  /** Solid background gradient for cover */
  gradient: string;
  /** Soft tinted background */
  soft: string;
  /** Border color */
  border: string;
  /** Text color */
  text: string;
  /** Badge background */
  badge: string;
  /** Ring color for focus */
  ring: string;
  /** Solid bg for dots/icons */
  solid: string;
  /** Hex for inline styles */
  hex: string;
}

export const accentMap: Record<AccentName, AccentStyles> = {
  emerald: {
    gradient: "from-emerald-500 to-teal-600",
    soft: "bg-emerald-50 dark:bg-emerald-950/40",
    border: "border-emerald-200 dark:border-emerald-900",
    text: "text-emerald-700 dark:text-emerald-300",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
    ring: "ring-emerald-500/30",
    solid: "bg-emerald-500",
    hex: "#10b981",
  },
  teal: {
    gradient: "from-teal-500 to-cyan-600",
    soft: "bg-teal-50 dark:bg-teal-950/40",
    border: "border-teal-200 dark:border-teal-900",
    text: "text-teal-700 dark:text-teal-300",
    badge: "bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300",
    ring: "ring-teal-500/30",
    solid: "bg-teal-500",
    hex: "#14b8a6",
  },
  amber: {
    gradient: "from-amber-500 to-orange-600",
    soft: "bg-amber-50 dark:bg-amber-950/40",
    border: "border-amber-200 dark:border-amber-900",
    text: "text-amber-700 dark:text-amber-300",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    ring: "ring-amber-500/30",
    solid: "bg-amber-500",
    hex: "#f59e0b",
  },
  orange: {
    gradient: "from-orange-500 to-red-600",
    soft: "bg-orange-50 dark:bg-orange-950/40",
    border: "border-orange-200 dark:border-orange-900",
    text: "text-orange-700 dark:text-orange-300",
    badge: "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
    ring: "ring-orange-500/30",
    solid: "bg-orange-500",
    hex: "#f97316",
  },
  rose: {
    gradient: "from-rose-500 to-pink-600",
    soft: "bg-rose-50 dark:bg-rose-950/40",
    border: "border-rose-200 dark:border-rose-900",
    text: "text-rose-700 dark:text-rose-300",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
    ring: "ring-rose-500/30",
    solid: "bg-rose-500",
    hex: "#f43f5e",
  },
  violet: {
    gradient: "from-violet-500 to-purple-600",
    soft: "bg-violet-50 dark:bg-violet-950/40",
    border: "border-violet-200 dark:border-violet-900",
    text: "text-violet-700 dark:text-violet-300",
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
    ring: "ring-violet-500/30",
    solid: "bg-violet-500",
    hex: "#8b5cf6",
  },
  cyan: {
    gradient: "from-cyan-500 to-sky-600",
    soft: "bg-cyan-50 dark:bg-cyan-950/40",
    border: "border-cyan-200 dark:border-cyan-900",
    text: "text-cyan-700 dark:text-cyan-300",
    badge: "bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300",
    ring: "ring-cyan-500/30",
    solid: "bg-cyan-500",
    hex: "#06b6d4",
  },
};

export function getAccent(name: string): AccentStyles {
  return accentMap[(name as AccentName) ?? "emerald"] ?? accentMap.emerald;
}

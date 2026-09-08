"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { getAccent } from "@/lib/accents";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export interface PostSummary {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  weekNumber: number;
  startDate: string;
  endDate: string;
  totalHours: number;
  remainingHours: number;
  coverAccent: string;
  tags: string;
  highlights: string;
  publishedAt: string;
}

interface PostCardProps {
  post: PostSummary;
  index: number;
  onOpen: (slug: string) => void;
}

export function PostCard({ post, index, onOpen }: PostCardProps) {
  const accent = getAccent(post.coverAccent);
  const tags = post.tags.split(",").filter(Boolean);
  const highlights = post.highlights.split(";").filter(Boolean);

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(post.slug)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.4), ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group block w-full text-left focus:outline-none"
      aria-label={`Read ${post.title}`}
    >
      <Card
        className={cn(
          "relative overflow-hidden rounded-2xl border bg-card p-0 shadow-sm transition-shadow duration-300",
          "group-hover:shadow-xl group-focus-visible:ring-2 group-focus-visible:ring-offset-2",
          accent.border,
          accent.ring
        )}
      >
        {/* Cover strip */}
        <div className={cn("relative h-28 w-full bg-gradient-to-br", accent.gradient)}>
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:16px_16px]" />
          <div className="absolute left-5 top-5 flex items-center gap-2">
            <span className="rounded-full bg-white/25 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              Week {post.weekNumber}
            </span>
          </div>
          <div className="absolute bottom-4 right-5 text-5xl font-black leading-none text-white/90">
            {String(post.weekNumber).padStart(2, "0")}
          </div>
        </div>

        {/* Body */}
        <div className="space-y-4 p-5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Calendar className="size-3.5" />
              {post.startDate}
            </span>
            <span className="text-muted-foreground/40">→</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3.5" />
              {post.totalHours} hrs
            </span>
          </div>

          <h3 className="line-clamp-2 text-lg font-bold leading-snug tracking-tight text-foreground">
            {post.title}
          </h3>

          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>

          {/* Highlights */}
          {highlights.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {highlights.slice(0, 2).map((h, i) => (
                <span
                  key={i}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-medium",
                    accent.badge
                  )}
                >
                  <span className={cn("size-1.5 rounded-full", accent.solid)} />
                  {h}
                </span>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between border-t pt-3">
            <div className="flex flex-wrap gap-1">
              {tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="outline" className="text-[10px] font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
            <span
              className={cn(
                "inline-flex items-center gap-1 text-xs font-semibold transition-transform group-hover:translate-x-0.5",
                accent.text
              )}
            >
              Read
              <ArrowRight className="size-3.5" />
            </span>
          </div>

          {/* Remaining hours indicator */}
          {post.remainingHours > 0 && (
            <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <TrendingDown className="size-3" />
              {post.remainingHours} hrs remaining
            </div>
          )}
        </div>
      </Card>
    </motion.button>
  );
}

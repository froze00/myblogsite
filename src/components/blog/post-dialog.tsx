"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  X,
  TrendingDown,
  CheckCircle2,
  Tag,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getAccent } from "@/lib/accents";
import { Badge } from "@/components/ui/badge";
import { Markdown } from "@/components/blog/markdown";
import { Skeleton } from "@/components/ui/skeleton";

export interface PostDetail {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
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

interface PostDialogProps {
  slug: string | null;
  onClose: () => void;
}

export function PostDialog({ slug, onClose }: PostDialogProps) {
  const [post, setPost] = useState<PostDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    let cancelled = false;
    const controller = new AbortController();

    // Defer state updates to a microtask so they are not synchronous
    // within the effect body (avoids cascading renders).
    Promise.resolve().then(() => {
      if (cancelled) return;
      setLoading(true);
      setError(null);
    });

    fetch(`/api/posts/${slug}`, { signal: controller.signal })
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to load post");
        const data = await res.json();
        if (cancelled) return;
        setPost(data.post);
      })
      .catch((e) => {
        if (cancelled || controller.signal.aborted) return;
        setError(e?.message || "Something went wrong");
      })
      .finally(() => {
        if (cancelled) return;
        setLoading(false);
      });

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [slug]);

  // Only show post content if it matches the currently selected slug.
  const currentPost = post && post.slug === slug ? post : null;

  // Lock body scroll when open
  useEffect(() => {
    if (!slug) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [slug]);

  // Escape to close
  useEffect(() => {
    if (!slug) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [slug, onClose]);

  const accent = currentPost ? getAccent(currentPost.coverAccent) : getAccent("emerald");
  const tags = currentPost?.tags.split(",").filter(Boolean) ?? [];
  const highlights = currentPost?.highlights.split(";").filter(Boolean) ?? [];

  return (
    <AnimatePresence>
      {slug && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={post?.title ?? "Post detail"}
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "relative z-10 flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-2xl bg-background shadow-2xl sm:max-h-[88vh] sm:max-w-2xl sm:rounded-2xl"
            )}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 inline-flex size-9 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Close post"
            >
              <X className="size-4" />
            </button>

            {/* Loading state */}
            {loading && (
              <div className="space-y-4 p-6">
                <Skeleton className="h-32 w-full rounded-xl" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <div className="space-y-2 pt-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </div>
            )}

            {/* Error state */}
            {error && !loading && (
              <div className="flex flex-col items-center justify-center gap-3 p-12 text-center">
                <p className="text-sm text-destructive">{error}</p>
                <button
                  onClick={onClose}
                  className="text-sm font-medium text-foreground underline underline-offset-2"
                >
                  Close
                </button>
              </div>
            )}

            {/* Content */}
            {currentPost && !loading && (
              <>
                {/* Cover */}
                <div
                  className={cn(
                    "relative shrink-0 bg-gradient-to-br px-6 pb-6 pt-8 sm:px-8 sm:pt-10",
                    accent.gradient
                  )}
                >
                  <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />
                  <div className="relative">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-white/25 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                        Week {currentPost.weekNumber}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        <Clock className="size-3" />
                        {currentPost.totalHours} hrs
                      </span>
                    </div>
                    <h2 className="max-w-xl text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl">
                      {currentPost.title}
                    </h2>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/80">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="size-3.5" />
                        {currentPost.startDate} — {currentPost.endDate}
                      </span>
                      {currentPost.remainingHours > 0 && (
                        <span className="inline-flex items-center gap-1">
                          <TrendingDown className="size-3.5" />
                          {currentPost.remainingHours} hrs remaining
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Scrollable body */}
                <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
                  {/* Highlights */}
                  {highlights.length > 0 && (
                    <div className="mb-6 rounded-xl border border-border bg-muted/40 p-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Week Highlights
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {highlights.map((h, i) => (
                          <span
                            key={i}
                            className={cn(
                              "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium",
                              accent.badge
                            )}
                          >
                            <CheckCircle2 className="size-3.5" />
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Markdown content */}
                  <Markdown content={currentPost.content} />

                  {/* Tags */}
                  {tags.length > 0 && (
                    <div className="mt-8 flex flex-wrap items-center gap-2 border-t pt-6">
                      <Tag className="size-4 text-muted-foreground" />
                      {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

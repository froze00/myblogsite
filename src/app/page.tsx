"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  Code2,
  GraduationCap,
  MapPin,
  Briefcase,
  User,
  Award,
  PenLine,
  ArrowDown,
  Sparkles,
} from "lucide-react";
import { PostCard, type PostSummary } from "@/components/blog/post-card";
import { PostDialog } from "@/components/blog/post-dialog";
import { Skeleton } from "@/components/ui/skeleton";

export default function HomePage() {
  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/posts");
      if (!res.ok) throw new Error("Failed to load posts");
      const data = await res.json();
      setPosts(data.posts ?? []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const totalHours = posts.reduce((sum, p) => sum + p.totalHours, 0);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-sm">
              <Code2 className="size-5" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold tracking-tight text-foreground">
                OJT Journal
              </p>
              <p className="text-[11px] text-muted-foreground">
                Aquila Software Corp.
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground sm:flex">
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a href="#stats" className="transition-colors hover:text-foreground">
              Stats
            </a>
            <a href="#journal" className="transition-colors hover:text-foreground">
              Journal
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60">
          {/* Decorative background */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-24 -top-24 size-72 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -right-24 top-20 size-72 rounded-full bg-amber-500/10 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.4] [background-image:linear-gradient(to_right,transparent_0,transparent_calc(100%-1px),hsl(var(--border)/0.5)_calc(100%-1px)),linear-gradient(to_bottom,transparent_0,transparent_calc(100%-1px),hsl(var(--border)/0.5)_calc(100%-1px))] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          </div>

          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-3xl text-center"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300">
                <Sparkles className="size-3.5" />
                Internship Accomplishment Journal
              </div>

              <h1 className="text-balance text-4xl font-black leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                My{" "}
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  OJT Journey
                </span>{" "}
                at Aquila Software
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                A week-by-week chronicle of my 8-week internship as a{" "}
                <span className="font-semibold text-foreground">
                  Frontend Developer
                </span>{" "}
                — from passing the intern exam to merging my final pull request.
                Real tasks, real bugs, real growth.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#journal"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  Read the Journal
                  <ArrowDown className="size-4" />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  About the Intern
                </a>
              </div>

              {/* Quick meta */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-4" />
                  June 15 – Aug 7, 2026
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-4" />
                  {totalHours.toFixed(1)} total hours
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-4" />
                  Davao City, Philippines
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section id="stats" className="border-b border-border/60 bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                {
                  label: "Weeks Completed",
                  value: "8",
                  icon: CalendarDays,
                  accent: "text-emerald-600 dark:text-emerald-400",
                },
                {
                  label: "Total Hours",
                  value: totalHours > 0 ? totalHours.toFixed(1) : "324",
                  suffix: "hrs",
                  icon: Clock,
                  accent: "text-amber-600 dark:text-amber-400",
                },
                {
                  label: "Journal Entries",
                  value: String(posts.length || 8),
                  icon: PenLine,
                  accent: "text-rose-600 dark:text-rose-400",
                },
                {
                  label: "Role",
                  value: "Frontend",
                  suffix: "Dev",
                  icon: Code2,
                  accent: "text-violet-600 dark:text-violet-400",
                },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-background p-5 text-center shadow-sm"
                >
                  <stat.icon className={`mx-auto mb-2 size-5 ${stat.accent}`} />
                  <div className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                    {stat.value}
                    {stat.suffix && (
                      <span className="ml-1 text-sm font-medium text-muted-foreground">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
              {/* Left: narrative */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  About this Journal
                </p>
                <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                  From intern exam to final merge.
                </h2>
                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                  <p>
                    This blog documents my On-the-Job Training at{" "}
                    <span className="font-semibold text-foreground">
                      AQUILA Software Corporation
                    </span>
                    , where I worked as a Frontend Developer intern for eight
                    weeks. Each week I was given real responsibilities — fixing
                    production bugs, refactoring UI, building systems from
                    scratch, and even editing tutorial videos.
                  </p>
                  <p>
                    What started as a nervous first-day exam turned into a
                    journey of merging pull requests, polishing payroll UIs,
                    attending an AI automation training, and joining a business
                    advertising event at Sploop Arcade Davao.
                  </p>
                  <p>
                    These entries are based on my official accomplishment
                    report — a record of what I actually did, hour by hour,
                    week by week.
                  </p>
                </div>
              </motion.div>

              {/* Right: intern card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl border border-border bg-gradient-to-br from-emerald-50 to-teal-50 p-6 shadow-sm dark:from-emerald-950/30 dark:to-teal-950/30"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow">
                    <User className="size-6" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-foreground">
                      Lynus B. Fabroa
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Frontend Developer Intern
                    </p>
                  </div>
                </div>

                <dl className="space-y-3 text-sm">
                  {[
                    { icon: Briefcase, label: "Office", value: "AQUILA Software Comp." },
                    { icon: GraduationCap, label: "Coordinator", value: "Virgilio F. Tuga Jr., MSCS (CAR)" },
                    { icon: CalendarDays, label: "Duration", value: "June 15 – Aug 7, 2026" },
                    { icon: Award, label: "Total Hours", value: "324 hours (8 weeks)" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <item.icon className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                      <div className="min-w-0">
                        <dt className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </dt>
                        <dd className="font-semibold text-foreground">
                          {item.value}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Journal entries */}
        <section id="journal" className="bg-muted/20">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  The Journal
                </p>
                <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                  8 Weeks, 8 Stories
                </h2>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                  Tap any week to read the full entry — tasks, reflections, and
                  what I learned along the way.
                </p>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6 text-center">
                <p className="text-sm text-destructive">{error}</p>
                <button
                  onClick={fetchPosts}
                  className="mt-3 text-sm font-semibold text-foreground underline underline-offset-2"
                >
                  Try again
                </button>
              </div>
            )}

            {/* Loading skeletons */}
            {loading && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="overflow-hidden rounded-2xl border border-border bg-card">
                    <Skeleton className="h-28 w-full rounded-none" />
                    <div className="space-y-3 p-5">
                      <Skeleton className="h-3 w-1/2" />
                      <Skeleton className="h-5 w-4/5" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Posts grid */}
            {!loading && !error && posts.length > 0 && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, i) => (
                  <PostCard
                    key={post.id}
                    post={post}
                    index={i}
                    onOpen={setSelectedSlug}
                  />
                ))}
              </div>
            )}

            {!loading && !error && posts.length === 0 && (
              <div className="rounded-xl border border-dashed border-border p-12 text-center">
                <p className="text-sm text-muted-foreground">
                  No journal entries yet.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer (sticky to bottom) */}
      <footer className="mt-auto border-t border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                <Code2 className="size-4" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-bold text-foreground">
                  OJT Journal
                </p>
                <p className="text-[11px] text-muted-foreground">
                  © 2026 Lynus B. Fabroa · Aquila Software Corp.
                </p>
              </div>
            </div>
            <p className="max-w-md text-xs text-muted-foreground">
              A personal chronicle of my frontend developer internship —
              documented from my official accomplishment report.
            </p>
          </div>
        </div>
      </footer>

      {/* Post detail dialog */}
      <PostDialog
        slug={selectedSlug}
        onClose={() => setSelectedSlug(null)}
      />
    </div>
  );
}

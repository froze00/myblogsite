"use client";

import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

interface MarkdownProps {
  content: string;
  className?: string;
}

export function Markdown({ content, className }: MarkdownProps) {
  return (
    <div
      className={cn(
        "prose-blog space-y-4 text-[15px] leading-relaxed text-foreground/90",
        className
      )}
    >
      <ReactMarkdown
        components={{
          h2: ({ children }) => (
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-[15px] leading-relaxed text-foreground/80">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-foreground/70">{children}</em>
          ),
          ul: ({ children }) => (
            <ul className="ml-5 list-disc space-y-1.5 text-foreground/80 marker:text-foreground/40">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="ml-5 list-decimal space-y-1.5 text-foreground/80 marker:text-foreground/40">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          a: ({ children, href }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-emerald-600 underline decoration-emerald-600/30 underline-offset-2 hover:decoration-emerald-600 dark:text-emerald-400"
            >
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-emerald-400 bg-emerald-50/50 py-2 pl-4 pr-3 text-sm italic text-foreground/70 dark:bg-emerald-950/20">
              {children}
            </blockquote>
          ),
          code: ({ children, className }) => {
            const isInline = !className;
            return isInline ? (
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">
                {children}
              </code>
            ) : (
              <code className={className}>{children}</code>
            );
          },
          hr: () => <hr className="border-border" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

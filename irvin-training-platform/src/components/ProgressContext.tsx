"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ProgressContextType = {
  visitedPages: string[];
  markPageVisited: (page: string) => void;
  progress: number;
  totalPages: number;
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const ALL_PAGES = [
  "/",
  "/technical",
  "/technical/audit-checklist",
  "/technical/devtools",
  "/technical/wp-vulnerabilities",
  "/technical/headers-analysis",
  "/technical/real-cases",
  "/technical/risks",
  "/technical/documentation",
  "/legal-pitch",
  "/legal-pitch/legal-reference",
  "/legal-pitch/pdf-verifier",
  "/legal-pitch/pitch-scripts",
  "/legal-pitch/objection-handling",
  "/legal-pitch/pricing",
  "/legal-pitch/execution",
  "/legal-pitch/closing",
  "/war-room",
  "/lagos-prep",
];

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [visitedPages, setVisitedPages] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("training-progress");
    if (saved) {
      try {
        setVisitedPages(JSON.parse(saved));
      } catch {
        setVisitedPages([]);
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("training-progress", JSON.stringify(visitedPages));
    }
  }, [visitedPages, mounted]);

  const markPageVisited = (page: string) => {
    setVisitedPages((prev) => {
      if (prev.includes(page)) return prev;
      return [...prev, page];
    });
  };

  const progress = Math.round((visitedPages.length / ALL_PAGES.length) * 100);

  return (
    <ProgressContext.Provider
      value={{
        visitedPages,
        markPageVisited,
        progress,
        totalPages: ALL_PAGES.length,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
}

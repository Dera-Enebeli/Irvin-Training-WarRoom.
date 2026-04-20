"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useProgress } from "./ProgressContext";

export default function PageTracker() {
  const pathname = usePathname();
  const { markPageVisited } = useProgress();

  useEffect(() => {
    if (pathname) {
      markPageVisited(pathname);
    }
  }, [pathname, markPageVisited]);

  return null;
}
"use client";

import { useProgress } from "./ProgressContext";
import Link from "next/link";

export default function ProgressBar() {
  const { progress, visitedPages, totalPages } = useProgress();

  const recentPages = visitedPages.slice(-3);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 p-3 z-50">
      <div className="max-w-4xl mx-auto flex items-center gap-4">
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-slate-400">Training Progress</span>
            <span className="text-xs text-cyan-400 font-medium">{progress}%</span>
          </div>
          <div className="bg-slate-700 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="text-xs text-slate-500 hidden sm:block">
          {visitedPages.length}/{totalPages} pages
        </div>
        {visitedPages.length > 0 && (
          <div className="hidden md:flex gap-1">
            {recentPages.map((page) => (
              <Link
                key={page}
                href={page}
                className="text-xs px-2 py-1 bg-slate-800 rounded text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {page.split("/").pop() || "Home"}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

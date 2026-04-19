"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, ExternalLink, Target, ChevronDown, ChevronUp } from "lucide-react";
import { realCases } from "@/lib/data";

export default function RealCasesPage() {
  const [expandedCases, setExpandedCases] = useState<Set<string>>(new Set());

  const toggleCase = (id: string) => {
    setExpandedCases(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="flex-1 p-4 md:p-8 bg-slate-900 min-h-screen overflow-x-hidden">
      <div className="max-w-4xl mx-auto overflow-x-hidden">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-cyan-400 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/technical" className="hover:text-white">Technical</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Real Cases</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Real-World Data Breach Cases</h1>
          <p className="text-slate-400">Case studies to kill the story and prove your point</p>
        </div>

        {/* Risk Scale Explanation */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-cyan-400" />
            The Risk Scale (For Your Pitch)
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-4">
              <h3 className="font-semibold text-red-400 text-sm mb-2">Level 7-10 (HIGH)</h3>
              <p className="text-slate-300 text-xs">API leaks, exposed admin IDs, active data broadcasting. Irvin Global is here.</p>
            </div>
            <div className="bg-amber-900/30 border border-amber-700/50 rounded-lg p-4">
              <h3 className="font-semibold text-amber-400 text-sm mb-2">Level 4-6 (MEDIUM)</h3>
              <p className="text-slate-300 text-xs">Misconfigured folders, outdated plugins, dormant backdoors.</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="font-semibold text-slate-400 text-sm mb-2">Level 1-3 (LOW)</h3>
              <p className="text-slate-400 text-xs">Minor coding errors, isolated issues, quickly caught.</p>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="space-y-6 mb-8">
          {realCases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{caseItem.name}</h3>
                    <p className="text-slate-400 text-sm">{caseItem.date}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    caseItem.riskLevel === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    Level 7 ({caseItem.riskLevel})
                  </div>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-cyan-400 mb-2">What Happened:</h4>
                  <p className="text-slate-300 text-sm">{caseItem.description}</p>
                </div>

                <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-red-400 mb-2">Damage:</h4>
                  <p className="text-slate-300 text-sm">{caseItem.damage}</p>
                </div>

                <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-cyan-400 mb-2">Why It Relates to Irvin:</h4>
                  <p className="text-slate-300 text-sm">{caseItem.relevance}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-sm">Source: {caseItem.source}</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleCase(caseItem.id)}
                      className="flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm"
                    >
                      {expandedCases.has(caseItem.id) ? (
                        <>
                          Hide Summary <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          Read Summary <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <a 
                      href={caseItem.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm"
                    >
                      View Source <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Summary Section */}
                {expandedCases.has(caseItem.id) && (
                  <div className="mt-4 p-4 bg-amber-900/20 border border-amber-700/50 rounded-lg">
                    <h4 className="font-semibold text-amber-400 mb-2">Summary from Source:</h4>
                    <p className="text-slate-300 text-sm">
                      {caseItem.summary || "No summary available"}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* The Killer Pitch */}
        <div className="bg-gradient-to-r from-red-900/30 to-slate-800 rounded-xl p-6 mb-8 border border-red-700">
          <h2 className="text-lg font-semibold text-white mb-4">The Killer Close</h2>
          <div className="space-y-3 text-slate-300 text-sm">
            <p>"Sir, a wealth management firm (Pathstone) handling $170 Billion was breached last month because of an API leak like yours. A crypto exchange (CEX.IO) with higher security standards than you had the exact same vulnerability. Even a government agency (Illinois DHS) with a 'Level 4' mistake - just wrong privacy settings - exposed 700,000 people's data."</p>
            <p className="text-white font-semibold mt-4">"Your issue is a Level 7. If Level 4 mistakes cause disasters, what do you think Level 7 does?"</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/technical/wp-vulnerabilities"
            className="flex items-center gap-2 text-slate-400 hover:text-white"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to WP Vulnerabilities
          </Link>
          <Link
            href="/technical/risks"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
          >
            Next: Risks & Disadvantages
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, Search, Scale, AlertTriangle, FileText } from "lucide-react";
import { legalReferences } from "@/lib/data";
import { useState } from "react";

export default function LegalReferencePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRefs = legalReferences.filter(ref => 
    ref.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ref.law.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ref.keyPoints.some(point => point.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="flex-1 p-4 md:p-8 bg-slate-900 min-h-screen overflow-x-hidden">
      <div className="max-w-4xl mx-auto overflow-x-hidden">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-purple-400 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/legal-pitch" className="hover:text-white">Legal & Pitch</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Legal Reference</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Legal Reference</h1>
          <p className="text-slate-400">Know the laws you&apos;re citing when pitching</p>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search laws, sections, penalties..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
          />
        </div>

        {/* Legal References */}
        <div className="space-y-6 mb-8">
          {filteredRefs.map((ref) => (
            <div
              key={ref.id}
              className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-4">
                  <div className="flex flex-col md:flex-row items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Scale className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{ref.title}</h3>
                      <span className="text-purple-400 text-sm font-medium">{ref.law}</span>
                    </div>
                  </div>
                  {ref.id === 'gaid-2025' && (
                    <Link
                      href="/legal-pitch/pdf-verifier"
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm bg-cyan-900/30 px-3 py-2 rounded-lg border border-cyan-700/50"
                    >
                      <FileText className="w-4 h-4" />
                      Verify in PDF
                    </Link>
                  )}
                </div>

                <div className="bg-slate-700/50 rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Key Points:</h4>
                  <ul className="space-y-2">
                    {ref.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span className="text-purple-400">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-900/20 rounded-lg p-4 border border-red-700/50">
                  <h4 className="text-sm font-semibold text-red-400 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Penalty:
                  </h4>
                  <p className="text-white font-semibold">{ref.penalty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Comparison */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4">NDPR 2019 vs NDPA 2023</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="font-semibold text-slate-400 mb-2">NDPR 2019 (Original)</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Basic consent requirements</li>
                <li>• Up to ₦10M fines</li>
                <li>• Less enforcement</li>
              </ul>
            </div>
            <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-700/50">
              <h3 className="font-semibold text-purple-400 mb-2">NDPA 2023 (Current)</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Strict &quot;Privacy by Design&quot;</li>
                <li>• 2% revenue or ₦10M (whichever higher)</li>
                <li>• Full NDPC enforcement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/legal-pitch"
            className="flex items-center gap-2 text-slate-400 hover:text-white"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Legal & Pitch
          </Link>
          <Link
            href="/legal-pitch/pitch-scripts"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
          >
            Next: Pitch Scripts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
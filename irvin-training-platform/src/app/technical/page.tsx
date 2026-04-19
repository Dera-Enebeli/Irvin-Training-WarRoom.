import Link from "next/link";
import { ArrowRight, CheckCircle, ChevronRight, AlertTriangle, Target } from "lucide-react";
import { technicalChecklist } from "@/lib/data";

export default function TechnicalPage() {
  return (
    <div className="flex-1 p-4 md:p-8 bg-slate-900 min-h-screen overflow-x-hidden">
      <div className="max-w-4xl mx-auto overflow-x-hidden">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-cyan-400 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Technical</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Technical Track</h1>
          <p className="text-slate-400">Your section - Learn to find and document vulnerabilities</p>
        </div>

        {/* Progress Overview */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4">What You&apos;ll Learn</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-slate-300">6-Step Audit Checklist</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-slate-300">DevTools Network Tab Mastery</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-slate-300">WordPress Vulnerability Detection</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-slate-300">Real-World Case Studies</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-slate-300">HTTP Headers Analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-slate-300">Risks & Disadvantages</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-slate-300">Live Boardroom Demo</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-slate-300">Professional Documentation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modules - Core */}
        <div className="space-y-4 mb-6">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Core Training</h3>
          {technicalChecklist.map((item, index) => (
            <Link
              key={item.id}
              href={`/technical/${item.id === 'wp-version' ? 'wp-vulnerabilities' : item.id === 'referer-leak' ? 'headers-analysis' : item.id === 'document-findings' ? 'documentation' : item.id === 'schema-fetch' ? 'devtools' : item.id === 'api-enumeration' ? 'wp-vulnerabilities' : item.id === 'form-exposure' ? 'wp-vulnerabilities' : item.id}`}
              className="block"
            >
              <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-cyan-500 transition-all group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Modules - Additional */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Advanced</h3>
          
          <Link href="/technical/real-cases" className="block">
            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-cyan-500 transition-all group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      Real-World Case Studies
                    </h3>
                    <p className="text-slate-400 text-sm">CEX.IO, Illinois DHS, Pathstone - cases to kill the story</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Link>

          <Link href="/technical/risks" className="block">
            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-cyan-500 transition-all group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      Risks & Disadvantages
                    </h3>
                    <p className="text-slate-400 text-sm">What could go wrong - be honest about the deal</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Link>
        </div>

        {/* Quick Reference */}
        <div className="mt-8 bg-slate-800/50 rounded-lg p-4 border border-slate-700">
          <h3 className="text-sm font-semibold text-slate-400 mb-2">Quick Tip</h3>
          <p className="text-slate-300 text-sm">
            Start with the <strong>Audit Checklist</strong> first to understand the complete process. 
            Then study <strong>Real Cases</strong> to see how to pitch them. Check <strong>Risks</strong> before you close.
          </p>
        </div>
      </div>
    </div>
  );
}
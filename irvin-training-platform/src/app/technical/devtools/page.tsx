import Link from "next/link";
import { ArrowRight, ChevronRight, Monitor, Terminal, Eye, Camera } from "lucide-react";
import { devtoolsSteps } from "@/lib/data";

export default function DevtoolsPage() {
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
            <span>DevTools Guide</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">DevTools Network Tab Guide</h1>
          <p className="text-slate-400">Master the browser developer tools to find vulnerabilities</p>
        </div>

        {/* Overview */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4">What You&apos;ll Find</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-700/50 rounded-lg p-4 text-center">
              <Monitor className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white text-sm">Version Leaks</h3>
              <p className="text-slate-400 text-xs mt-1">WordPress version in URLs</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4 text-center">
              <Eye className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white text-sm">Referer Headers</h3>
              <p className="text-slate-400 text-xs mt-1">User intent broadcasting</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4 text-center">
              <Terminal className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white text-sm">API Calls</h3>
              <p className="text-slate-400 text-xs mt-1">Third-party data leaks</p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4 mb-8">
          {devtoolsSteps.map((step) => (
            <div
              key={step.step}
              className="bg-slate-800 rounded-xl p-5 border border-slate-700"
            >
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 font-bold flex-shrink-0 md:order-1 order-2">
                  {step.step}
                </div>
                <div className="flex-1 md:order-2 order-1">
                  <h3 className="text-lg font-semibold text-white mb-2">{step.action}</h3>
                  <p className="text-slate-400 text-sm">{step.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Findings to Look For */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Camera className="w-5 h-5 text-cyan-400" />
            Key Findings to Screenshot
          </h2>
          <div className="space-y-3">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="font-semibold text-cyan-400 mb-2">Referer Header</h3>
<code className="text-slate-300 text-sm block break-all">Referer: https://www.irvinglobalgroup.com/payday-loan/</code>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="font-semibold text-cyan-400 mb-2">Version in URL</h3>
              <code className="text-slate-300 text-sm block break-all">index.js?ver=6.1.5:1</code>
              <p className="text-slate-400 text-xs mt-2">This reveals the exact WordPress version - a roadmap for hackers</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/technical/audit-checklist"
            className="flex items-center gap-2 text-slate-400 hover:text-white"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Checklist
          </Link>
          <Link
            href="/technical/wp-vulnerabilities"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
          >
            Next: WP Vulnerabilities
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
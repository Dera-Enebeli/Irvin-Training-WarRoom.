import Link from "next/link";
import { ArrowRight, Shield, Scale, Target, Users, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex-1 p-4 md:p-8 bg-slate-900 min-h-screen overflow-x-hidden">
      <div className="max-w-6xl mx-auto overflow-x-hidden">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Irvin Security Training Platform</h1>
          <p className="text-slate-400">Master security auditing and sales for Nigerian financial institutions</p>
        </div>

        {/* Quick Start Section */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-cyan-400" />
            Quick Start (30 Seconds)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-slate-700 rounded-lg p-4">
              <h3 className="font-semibold text-cyan-400 mb-2">The 3-Step Process</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">1.</span>
                  <span><strong>Audit</strong> - Use DevTools to find vulnerabilities (WP leaks, Referer headers, API exposure)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">2.</span>
                  <span><strong>Legal Pitch</strong> - Present as NDPA 2023 / GAID 2025 compliance violations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">3.</span>
                  <span><strong>Close</strong> - Sell Next.js migration for ₦4-5M</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-700 rounded-lg p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Role Split</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span><strong>You (Technical):</strong> Find vulnerabilities, run DevTools, live boardroom demos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-purple-400 mt-0.5" />
                  <span><strong>Partner (Legal/Pitch):</strong> NDPA citations, objection handling, closing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Two Main Tracks */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Technical Track */}
          <Link href="/technical" className="group">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Scale className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">Technical Track</h2>
                  <p className="text-slate-400 text-sm">Your section - Vulnerability auditing</p>
                </div>
              </div>
              
              <ul className="space-y-2 text-slate-300 mb-4">
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  6-Step Audit Checklist
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  DevTools Network Tab Guide
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  WordPress Vulnerabilities
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  Headers Analysis (Referer, Initiator)
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  Documentation & Boardroom Demo
                </li>
              </ul>
              
              <div className="flex items-center gap-2 text-cyan-400 font-medium">
                Start Technical Track <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Legal & Pitch Track */}
          <Link href="/legal-pitch" className="group">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">Legal & Pitch Track</h2>
                  <p className="text-slate-400 text-sm">Partner section - Sales & compliance</p>
                </div>
              </div>
              
              <ul className="space-y-2 text-slate-300 mb-4">
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  Legal Reference (NDPA, GAID, NDPR)
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  Pitch Scripts (WhatsApp + Meeting)
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  Objection Handling (4 main objections)
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  Closing (₦5M, NDA, Walk Away)
                </li>
              </ul>
              
              <div className="flex items-center gap-2 text-purple-400 font-medium">
                Start Legal Track <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* War Room Quick Access */}
        <div className="mt-6">
          <Link href="/war-room" className="block">
            <div className="bg-gradient-to-r from-amber-900/30 to-slate-800 rounded-xl p-6 border border-amber-700/50 hover:border-amber-500 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-amber-400" />
                  <div>
                    <h2 className="text-lg font-semibold text-white">War Room</h2>
                    <p className="text-slate-400 text-sm">All defense strategies in one place</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* Progress Section */}
        <div className="mt-8 bg-slate-800/50 rounded-lg p-4 border border-slate-700">
          <h3 className="text-sm font-medium text-slate-400 mb-3">Your Progress</h3>
          <div className="flex gap-2">
            <div className="flex-1 bg-slate-700 rounded-full h-2">
              <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <span className="text-slate-400 text-sm">Start learning to track progress</span>
          </div>
        </div>
      </div>
    </div>
  );
}
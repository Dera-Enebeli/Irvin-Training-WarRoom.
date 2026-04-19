import Link from "next/link";
import { ChevronRight, Target, Shield, AlertTriangle, CheckCircle, DollarSign, Users } from "lucide-react";
import { warRoomSummary, toughQuestions } from "@/lib/data";

export default function WarRoomPage() {
  return (
    <div className="flex-1 p-4 md:p-8 bg-slate-900 min-h-screen overflow-x-hidden">
      <div className="max-w-4xl mx-auto overflow-x-hidden">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-amber-400 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>War Room</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">War Room</h1>
          <p className="text-slate-400">All defense strategies in one place - quick reference during calls</p>
        </div>

        {/* The 3-Point Attack */}
        <div className="bg-gradient-to-r from-red-900/30 to-slate-800 rounded-xl p-6 mb-8 border border-red-700">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-red-400" />
            The 3-Point Attack (Present This in Order)
          </h2>
          <div className="space-y-3">
            {warRoomSummary.threePoints.map((point, index) => (
              <div key={index} className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                <p className="text-white font-semibold">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Master Plan */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-400" />
            Your Master Plan
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {warRoomSummary.masterPlan.map((step, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 font-bold">
                  {index + 1}
                </div>
                <span className="text-slate-300">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Strategy */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-purple-700">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-purple-400" />
            Closing Strategy Summary
          </h2>
          <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-4">
            <p className="text-slate-300 text-sm">{warRoomSummary.closingStrategy}</p>
          </div>
        </div>

        {/* Tough Questions */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            Tough Questions & Answers
          </h2>
          <div className="space-y-4">
            {toughQuestions.map((item, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-4">
                <p className="text-white font-semibold mb-2">&quot;{item.question}&quot;</p>
                <p className="text-slate-400 text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Reference Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-slate-800 rounded-xl p-5 border border-cyan-700">
            <h3 className="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Role Split
            </h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p><strong className="text-cyan-400">You:</strong> Technical - find vulnerabilities, run DevTools, live demos</p>
              <p><strong className="text-purple-400">Partner:</strong> Legal/Pitch - NDPA citations, objection handling, closing</p>
            </div>
          </div>
          <div className="bg-slate-800 rounded-xl p-5 border border-green-700">
            <h3 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Price Points
            </h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p><strong className="text-green-400">Target:</strong> ₦5,000,000</p>
              <p><strong className="text-green-400">Minimum:</strong> ₦4,000,000</p>
              <p><strong className="text-red-400">Walk away below ₦4M</strong></p>
            </div>
          </div>
        </div>

        {/* Key Legal Points */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-purple-400" />
            Key Legal Points to Remember
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-400 mb-2">NDPA 2023</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Section 24: Duty of Care</li>
                <li>• 2% revenue or ₦10M penalty</li>
                <li>• Privacy by Design required</li>
              </ul>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-400 mb-2">GAID 2025</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• March 31, 2026 deadline passed</li>
                <li>• Type-1 violations enforced</li>
                <li>• Full NDPC enforcement active</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex flex-col md:flex-row justify-between gap-3">
          <Link
            href="/legal-pitch/closing"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to Closing
          </Link>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <Link
              href="/legal-pitch/execution"
              className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300"
            >
              Detailed Scripts
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/technical"
              className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300"
            >
              Start Technical Track
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
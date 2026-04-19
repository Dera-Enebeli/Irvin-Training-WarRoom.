"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Copy, Check, DollarSign, FileText, Shield, DoorOpen } from "lucide-react";
import { pitchScripts } from "@/lib/data";

export default function ClosingPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const closeScript = pitchScripts.find(s => s.id === 'the-close');
  const ndaScript = pitchScripts.find(s => s.id === 'nda-script');
  const walkAwayScript = pitchScripts.find(s => s.id === 'walk-away');

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
            <span>Closing</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Closing</h1>
          <p className="text-slate-400">Price justification, NDA strategy, and when to walk away</p>
        </div>

        {/* Price Justification */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-400" />
            The ₦5M Price Justification
          </h2>
          <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4 mb-4">
            <p className="text-white font-semibold mb-2">The Core Message:</p>
            <p className="text-slate-300 text-sm">
              &quot;I&apos;m asking for ₦5 Million to save the firm from a ₦300 Million exposure. 
              This isn&apos;t an expense - it&apos;s the cheapest insurance policy you&apos;ll ever buy.&quot;
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-700/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-green-400">₦5M</p>
              <p className="text-slate-400 text-sm">Your Fee</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-red-400">₦100M+</p>
              <p className="text-slate-400 text-sm">Potential NDPC Fine</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-cyan-400">20x</p>
              <p className="text-slate-400 text-sm">ROI</p>
            </div>
          </div>
        </div>

        {/* The Close Script */}
        {closeScript && (
          <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-green-700">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-green-400" />
              The ₦5M Close Script
            </h2>
            <div className="flex justify-end mb-4">
              <button
                onClick={() => handleCopy('the-close', closeScript.content)}
                className="flex items-center gap-2 px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors"
              >
                {copiedId === 'the-close' ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <p className="text-slate-300 text-sm whitespace-pre-wrap">{closeScript.content}</p>
            </div>
          </div>
        )}

        {/* NDA Strategy */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-amber-700">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-amber-400" />
            NDA Strategy - Don&apos;t Get Robbed
          </h2>
          <div className="space-y-4">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="font-semibold text-amber-400 mb-2">The Problem</h3>
              <p className="text-slate-300 text-sm">
                Big firms often take free advice and give it to their &quot;in-house&quot; IT guy to fix 
                instead of paying you.
              </p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="font-semibold text-amber-400 mb-2">The Solution</h3>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>• Show the &quot;Symptoms&quot; but NOT the &quot;Cure&quot;</li>
                <li>• Before showing full vulnerability roadmap, say:</li>
                <li className="ml-4">&quot;To protect Irvin Global from these vulnerabilities being made public during 
                our discussion, I&apos;ve prepared a standard NDA.&quot;</li>
                <li>• Make it clear your Next.js framework is proprietary</li>
              </ul>
            </div>
          </div>
        </div>

        {/* NDA Script */}
        {ndaScript && (
          <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-amber-700">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => handleCopy('nda-script', ndaScript.content)}
                className="flex items-center gap-2 px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-sm rounded-lg transition-colors"
              >
                {copiedId === 'nda-script' ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <p className="text-slate-300 text-sm whitespace-pre-wrap">{ndaScript.content}</p>
            </div>
          </div>
        )}

        {/* Walk Away */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-red-700">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <DoorOpen className="w-5 h-5 text-red-400" />
            The Walk Away - Ultimate Power Move
          </h2>
          <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 mb-4">
            <p className="text-slate-300 text-sm">
              Use when they try to haggle below ₦4M. Standing up and walking away signals 
              that you know your worth. They&apos;ll often call you back.
            </p>
          </div>
          {walkAwayScript && (
            <>
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => handleCopy('walk-away', walkAwayScript.content)}
                  className="flex items-center gap-2 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors"
                >
                  {copiedId === 'walk-away' ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <p className="text-slate-300 text-sm whitespace-pre-wrap">{walkAwayScript.content}</p>
              </div>
            </>
          )}
        </div>

        {/* Certification Defense */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-purple-700">
          <h2 className="text-lg font-semibold text-white mb-4">Certification Defense</h2>
          <p className="text-slate-400 text-sm mb-4">
            If they ask &quot;Are you a certified auditor?&quot; - here&apos;s how to answer:
          </p>
          <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-4">
            <p className="text-slate-300 text-sm">
              &quot;I am a Web Architect and Security Specialist. I perform Technical Vulnerability Assessments. 
              While I am not a DPCO filing your annual returns, I am the one who remediates the technical 
              failures that the DPCOs would flag in their report. Most DPCOs are lawyers - they tell you 
              that you are breaking the law. I am the engineer who tells you how you are breaking it and 
              provides the technical framework to stop it.&quot;
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/legal-pitch/objection-handling"
            className="flex items-center gap-2 text-slate-400 hover:text-white"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Objection Handling
          </Link>
          <Link
            href="/war-room"
            className="flex items-center gap-2 text-amber-400 hover:text-amber-300"
          >
            Next: War Room (All Defense)
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
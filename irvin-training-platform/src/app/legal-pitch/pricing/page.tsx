"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, DollarSign, FileText, Shield, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { pricingTiers } from "@/lib/data";

export default function PricingPage() {
  const [expandedTier, setExpandedTier] = useState<number | null>(null);

  return (
    <div className="flex-1 p-4 md:p-8 bg-slate-900 min-h-screen overflow-x-hidden">
      <div className="max-w-5xl mx-auto overflow-x-hidden">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-purple-400 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/legal-pitch" className="hover:text-white">Legal & Pitch</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Pricing</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Pricing & Service Tiers</h1>
          <p className="text-slate-400">What to charge and what's included</p>
        </div>

        {/* Service Tiers Table */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden mb-8">
          <div className="p-6 border-b border-slate-700">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-400" />
              Service Tiers
            </h2>
          </div>
          
          {/* Table Header */}
          <div className="grid grid-cols-4 bg-slate-700/50 p-4 text-sm font-semibold text-slate-300">
            <div>Tier</div>
            <div>Name</div>
            <div>Price</div>
            <div>Timeline</div>
          </div>

          {/* Table Rows */}
          {pricingTiers.map((tier) => (
            <div key={tier.id}>
              <div 
                className="grid grid-cols-4 p-4 border-b border-slate-700 hover:bg-slate-700/30 cursor-pointer transition-colors"
                onClick={() => setExpandedTier(expandedTier === tier.id ? null : tier.id)}
              >
                <div className="text-cyan-400 font-bold">Tier {tier.id}</div>
                <div className="text-white font-medium">{tier.name}</div>
                <div className="text-green-400 font-bold">{tier.price}</div>
                <div className="text-slate-400">{tier.timeline}</div>
              </div>
              
              {/* Expanded Details */}
              {expandedTier === tier.id && (
                <div className="bg-slate-700/20 p-6 border-b border-slate-700">
                  <h4 className="text-purple-400 font-semibold mb-3">What's Included:</h4>
                  <ul className="space-y-2 mb-4">
                    {tier.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {tier.notIncludes && tier.notIncludes.length > 0 && (
                    <>
                      <h4 className="text-red-400 font-semibold mb-3">NOT Included:</h4>
                      <ul className="space-y-2">
                        {tier.notIncludes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-400 text-sm">
                            <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Payment Terms */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden mb-8">
          <div className="p-6 border-b border-slate-700">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-400" />
              Payment Terms
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Standard Payment (Tiers 1-3)</h4>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>• <span className="text-green-400">50% upfront</span> - Before work begins</li>
                <li>• <span className="text-green-400">50% on completion</span> - Before final deliverables</li>
              </ul>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Staged Payment (Tier 4 - Migration)</h4>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>• <span className="text-green-400">30%</span> - Project start</li>
                <li>• <span className="text-green-400">40%</span> - Midpoint (database migrated)</li>
                <li>• <span className="text-green-400">30%</span> - Completion & handover</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pitch Strategy */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden mb-8">
          <div className="p-6 border-b border-slate-700">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-cyan-400" />
              Pitch Strategy
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4">
              <h4 className="text-cyan-400 font-semibold mb-2">Start at Tier 3 (₦4-5M)</h4>
              <p className="text-slate-300 text-sm">
                Lead with your full value proposition. If they push back, negotiate down to Tier 2. 
                This positions you as a problem-solver, not just a problem-finder.
              </p>
            </div>
            <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4">
              <h4 className="text-amber-400 font-semibold mb-2">Never Lead with the Cheapest Option</h4>
              <p className="text-slate-300 text-sm">
                Always start high and let them negotiate down. If you start at ₦1.5M, 
                there's no room to move and you seem desperate.
              </p>
            </div>
            <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
              <h4 className="text-green-400 font-semibold mb-2">The Value Frame</h4>
              <p className="text-slate-300 text-sm">
                "This ₦5M investment prevents a ₦30M problem. If your database is compromised, 
                you're looking at migration costs + NDPA penalties + client lawsuits."
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex flex-col md:flex-row justify-between gap-3">
          <Link
            href="/legal-pitch/closing"
            className="flex items-center gap-2 text-slate-400 hover:text-white"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Closing
          </Link>
          <Link
            href="/legal-pitch/execution"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
          >
            Next: Execution
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
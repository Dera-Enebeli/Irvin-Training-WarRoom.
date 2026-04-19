import Link from "next/link";
import { ArrowRight, ChevronRight, XCircle, Users, TriangleAlert } from "lucide-react";
import { disadvantages } from "@/lib/data";

export default function RisksPage() {
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
            <span>Risks & Disadvantages</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">What Could Go Wrong</h1>
          <p className="text-slate-400">The honest truth about this deal - be prepared for these risks</p>
        </div>

        {/* Honest Warning */}
        <div className="bg-amber-900/30 border border-amber-700/50 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <TriangleAlert className="w-6 h-6 text-amber-400 flex-shrink-0 md:order-1 order-2" />
            <div className="md:order-2 order-1">
              <h2 className="text-lg font-semibold text-white mb-2">The Goldmine Has Cracks</h2>
              <p className="text-slate-300 text-sm">
                This deal feels "too good to be true" because you've found a Value Gap. Most developers sell websites - you're selling Compliance and Asset Protection. But with ₦5 Million comes ₦5 Million risks. Know these before you walk in.
              </p>
            </div>
          </div>
        </div>

        {/* Disadvantages */}
        <div className="space-y-4 mb-8">
          {disadvantages.map((disadv, index) => (
            <div
              key={disadv.id}
              className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden"
            >
              <div className="p-5">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 md:order-1 order-2">
                    {index === 4 ? <Users className="w-5 h-5 text-red-400" /> : <XCircle className="w-5 h-5 text-red-400" />}
                  </div>
                  <div className="flex-1 md:order-2 order-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{disadv.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{disadv.description}</p>
                    
                    {/* Risk */}
                    <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 mb-4">
                      <h4 className="text-sm font-semibold text-red-400 mb-2">What Could Go Wrong:</h4>
                      <p className="text-slate-300 text-sm">{disadv.risk}</p>
                    </div>
                    
                    {/* Mitigation */}
                    <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">How to Protect Yourself:</h4>
                      <p className="text-slate-300 text-sm">{disadv.mitigation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Realizations */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4">What to Tell the Client</h2>
          <div className="space-y-3 text-slate-300 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>"I cannot guarantee you haven't been breached already" - don't promise a clean slate</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>"This migration will be disruptive" - be honest about downtime/learning curves</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>"Security is a process, not a product" - if they get phished later, it's not your fault</span>
            </div>
          </div>
        </div>

        {/* The Professional Approach */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-slate-800 rounded-xl p-6 border border-cyan-700">
          <h2 className="text-lg font-semibold text-white mb-4">How to Position Yourself</h2>
          <div className="space-y-3 text-slate-300 text-sm">
            <p className="text-white font-semibold">Instead of:</p>
            <p className="text-red-400">"You are breaking the law"</p>
            <p className="text-white font-semibold">Say:</p>
            <p className="text-cyan-400">"Our initial external audit suggests high-risk patterns. We need to move you to a Sovereign Engine to ensure these patterns don't trigger an NDPC audit."</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex flex-col md:flex-row justify-between gap-3">
          <Link
            href="/technical/real-cases"
            className="flex items-center gap-2 text-slate-400 hover:text-white"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Real Cases
          </Link>
          <Link
            href="/technical/documentation"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
          >
            Back to Documentation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
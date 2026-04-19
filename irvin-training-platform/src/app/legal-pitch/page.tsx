import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle, Scale, Shield, MessageSquare, XCircle, DollarSign } from "lucide-react";

export default function LegalPitchPage() {
  return (
    <div className="flex-1 p-4 md:p-8 bg-slate-900 min-h-screen overflow-x-hidden">
      <div className="max-w-4xl mx-auto overflow-x-hidden">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-purple-400 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Legal & Pitch</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Legal & Pitch Track</h1>
          <p className="text-slate-400">Partner section - Sales, compliance, and closing</p>
        </div>

        {/* Progress Overview */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4">What You&apos;ll Learn</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Scale className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-slate-300">NDPA 2023, GAID 2025, NDPR References</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-slate-300">Pitch Scripts (WhatsApp + Meeting)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <XCircle className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-slate-300">Objection Handling (4 main objections)</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-slate-300">Closing (₦5M justification, NDA, Walk Away)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-slate-300">Certification Defense</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-slate-300">Tough Questions & Answers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modules */}
        <div className="space-y-4">
          <Link href="/legal-pitch/legal-reference" className="block">
            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-purple-500 transition-all group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Scale className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                      Legal Reference
                    </h3>
                    <p className="text-slate-400 text-sm">NDPA 2023, GAID 2025, NDPR - Know the laws you&apos;re citing</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Link>

          <Link href="/legal-pitch/pitch-scripts" className="block">
            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-purple-500 transition-all group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                      Pitch Scripts
                    </h3>
                    <p className="text-slate-400 text-sm">WhatsApp hook, in-person intro, the ₦5M close</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Link>

          <Link href="/legal-pitch/objection-handling" className="block">
            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-purple-500 transition-all group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                      Objection Handling
                    </h3>
                    <p className="text-slate-400 text-sm">Counters for &quot;We use Instagram&quot;, &quot;We&apos;ll fix it ourselves&quot;, &quot;Too expensive&quot;</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Link>

          <Link href="/legal-pitch/closing" className="block">
            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-purple-500 transition-all group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                      Closing
                    </h3>
                    <p className="text-slate-400 text-sm">₦5M price justification, NDA strategy, when to walk away</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Link>
        </div>

        {/* Quick Reference */}
        <div className="mt-8 bg-slate-800/50 rounded-lg p-4 border border-slate-700">
          <h3 className="text-sm font-semibold text-slate-400 mb-2">Quick Tip</h3>
          <p className="text-slate-300 text-sm">
            Start with <strong>Legal Reference</strong> to understand the laws you&apos;re citing. 
            Then study the <strong>Pitch Scripts</strong> to see exactly what to say. 
            Use <strong>Objection Handling</strong> when they push back.
          </p>
        </div>
      </div>
    </div>
  );
}
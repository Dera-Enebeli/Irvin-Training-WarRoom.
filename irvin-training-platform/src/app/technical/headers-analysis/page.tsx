import Link from "next/link";
import { ArrowRight, ChevronRight, Eye } from "lucide-react";
import { headersAnalysis } from "@/lib/data";

export default function HeadersAnalysisPage() {
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
            <span>Headers Analysis</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">HTTP Headers Analysis</h1>
          <p className="text-slate-400">Understanding what data your audits expose</p>
        </div>

        {/* Overview */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4">What Are HTTP Headers?</h2>
          <p className="text-slate-400 mb-4">
            When a browser loads a website, it sends and receives &quot;headers&quot; - small pieces of data that 
            control how the page loads. These headers can leak sensitive information.
          </p>
          <div className="bg-slate-700/50 rounded-lg p-4">
            <p className="text-slate-300 text-sm">
              <strong className="text-cyan-400">Key Point:</strong> The &quot;Referer&quot; header (spelled with one &apos;r&apos;) 
              tells third parties exactly what page a user is viewing. This is your smoking gun for financial sites.
            </p>
          </div>
        </div>

        {/* Headers Detail */}
        <div className="space-y-4 mb-8">
          {headersAnalysis.map((header, index) => (
            <div
              key={header.header}
              className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden"
            >
              <div className="p-5">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 font-bold flex-shrink-0 md:order-1 order-2">
                    {index + 1}
                  </div>
                  <div className="flex-1 md:order-2 order-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{header.header}</h3>
                    <p className="text-slate-400 text-sm mb-4">{header.explanation}</p>
                    
                    {/* Example */}
                    <div className="bg-slate-700/50 rounded-lg p-4 mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Example:</h4>
                      <code className="text-slate-300 text-sm block break-all">{header.example}</code>
                    </div>
                    
                    {/* Risk */}
                    <div className="bg-red-900/20 rounded-lg p-4 border border-red-700/50">
                      <h4 className="text-sm font-semibold text-red-400 mb-2">Risk:</h4>
                      <p className="text-slate-300 text-sm">{header.risk}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-amber-700">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Eye className="w-5 h-5 text-amber-400" />
            Important Notes
          </h2>
          <div className="space-y-3 text-slate-300">
            <div className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span><strong className="text-white">Referer vs Referrer:</strong> The HTTP spec actually has a typo - it&apos;s &quot;Referer&quot; (one &apos;r&apos;) everywhere, not &quot;Referrer&quot;</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span><strong className="text-white">Protocol matters:</strong> h2 (HTTP/2) is common but h3 (QUIC) is faster. Slow sites lose customers.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span><strong className="text-white">SSL doesn&apos;t stop leaks:</strong> SSL encrypts the tunnel but doesn&apos;t stop the site from &quot;snitching&quot; via headers</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex flex-col md:flex-row justify-between gap-3">
          <Link
            href="/technical/wp-vulnerabilities"
            className="flex items-center gap-2 text-slate-400 hover:text-white"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to WP Vulnerabilities
          </Link>
          <Link
            href="/technical/documentation"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
          >
            Next: Documentation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
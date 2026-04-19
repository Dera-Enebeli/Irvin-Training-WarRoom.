import Link from "next/link";
import { ArrowRight, ChevronRight, Camera, Monitor, FileText } from "lucide-react";

export default function DocumentationPage() {
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
            <span>Documentation</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Documentation & Boardroom Demo</h1>
          <p className="text-slate-400">How to document findings and present them live</p>
        </div>

        {/* Screenshot Guide */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Camera className="w-5 h-5 text-cyan-400" />
            Screenshot Capture Guide
          </h2>
          <div className="space-y-4">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="font-semibold text-cyan-400 mb-2">1. Version Leak Screenshot</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Open Network tab → Refresh page</li>
                <li>• Look for Initiator column with <code className="text-cyan-400">ver=6.1.5</code></li>
                <li>• Screenshot the specific line showing the version</li>
              </ul>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="font-semibold text-cyan-400 mb-2">2. Referer Header Screenshot</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Click on a fetch/XHR request</li>
                <li>• Go to Headers tab → scroll to Request Headers</li>
                <li>• Screenshot the Referer line showing <code className="text-cyan-400">/payday-loan/</code></li>
              </ul>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="font-semibold text-cyan-400 mb-2">3. User Enumeration Screenshot</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Open new tab, go to <code className="text-cyan-400">/wp-json/wp/v2/users</code></li>
                <li>• Screenshot the JSON response showing usernames</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Boardroom Demo */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Monitor className="w-5 h-5 text-cyan-400" />
            Live Boardroom Demo (The ₦5M Move)
          </h2>
          <p className="text-slate-400 mb-4">
            Don&apos;t just show screenshots - do the audit live in the meeting. This is much more powerful.
          </p>
          <div className="bg-slate-700/50 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-3">The Demo Walkthrough:</h3>
            <ol className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">1.</span>
                <span>Open their site on your laptop</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">2.</span>
                <span>Right-click &gt; Inspect &gt; Network tab</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">3.</span>
                <span>Refresh the page with Network tab open</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">4.</span>
                <span>Filter for &quot;fetch&quot; or &quot;google&quot;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">5.</span>
                <span>Click a request &gt; Headers &gt; Point to the Referer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">6.</span>
                <span>Close laptop and deliver the close</span>
              </li>
            </ol>
          </div>
        </div>

        {/* The 3-Point Summary */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            The 3-Point Summary (Present This)
          </h2>
          <div className="space-y-3">
            <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
              <h3 className="font-semibold text-red-400 mb-1">1. Software Exposure</h3>
              <p className="text-slate-300 text-sm">You are telling hackers exactly how to attack you (v6.1.5)</p>
            </div>
            <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
              <h3 className="font-semibold text-red-400 mb-1">2. Privacy Breach</h3>
              <p className="text-slate-300 text-sm">You are giving away your clients&apos; financial secrets to ad networks</p>
            </div>
            <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
              <h3 className="font-semibold text-red-400 mb-1">3. Performance Failure</h3>
              <p className="text-slate-300 text-sm">Your slow &quot;Network Waterfall&quot; is losing you customers in real-time</p>
            </div>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
          <h3 className="text-sm font-semibold text-slate-400 mb-2">Pro Tips</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• Practice the live demo until you can do it in under 2 minutes</li>
            <li>• Have the site pre-loaded in a tab before the meeting</li>
            <li>• Bring a printed PDF audit report as backup</li>
            <li>• Wear professional attire - ₦5M doesn&apos;t go to someone in a t-shirt</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/technical/headers-analysis"
            className="flex items-center gap-2 text-slate-400 hover:text-white"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Headers Analysis
          </Link>
          <Link
            href="/legal-pitch"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
          >
            Next: Legal & Pitch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
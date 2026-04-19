import Link from "next/link";
import { ArrowRight, ChevronRight, AlertTriangle, Key } from "lucide-react";
import { wpVulnerabilities } from "@/lib/data";

export default function WPVulnerabilitiesPage() {
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
            <span>WP Vulnerabilities</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">WordPress Vulnerabilities</h1>
          <p className="text-slate-400">Common security issues found on WordPress financial sites</p>
        </div>

        {/* Overview */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4">Why WordPress is Risky for Finance</h2>
          <div className="space-y-3 text-slate-300">
            <p>WordPress powers 40% of websites but was not designed for financial institutions handling sensitive data.</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>Built-in REST API exposes user data by default</li>
              <li>Plugin ecosystem creates security holes</li>
              <li>Version numbers visible in URLs</li>
              <li>Third-party trackers often installed by default</li>
            </ul>
          </div>
        </div>

        {/* Vulnerabilities */}
        <div className="space-y-4 mb-8">
          {wpVulnerabilities.map((vuln) => (
            <div
              key={vuln.id}
              className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden"
            >
              <div className="p-5">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 md:order-1 order-2">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                  </div>
                  <div className="flex-1 md:order-2 order-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{vuln.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{vuln.description}</p>
                    
                    {/* Evidence */}
                    <div className="bg-slate-700/50 rounded-lg p-4 mb-4">
                      <h4 className="text-sm font-semibold text-red-400 mb-2">Evidence (Screenshot This):</h4>
                      <code className="text-cyan-400 text-sm block break-all">{vuln.evidence}</code>
                    </div>
                    
                    {/* Pitch */}
                    <div className="bg-cyan-900/20 rounded-lg p-4 border border-cyan-700/50">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">How to Explain to Client:</h4>
                      <p className="text-slate-300 text-sm">{vuln.pitch}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How to Test */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Key className="w-5 h-5 text-cyan-400" />
            How to Test Each Vulnerability
          </h2>
          <div className="space-y-4">
            <div className="border-l-2 border-cyan-500 pl-4">
              <h3 className="font-semibold text-white">Version Broadcast</h3>
<p className="text-slate-400 text-sm">Open Network tab, look for <code className="text-cyan-400 break-all">ver=X.X.X</code> in URLs</p>
            </div>
            <div className="border-l-2 border-cyan-500 pl-4">
              <h3 className="font-semibold text-white">User Enumeration</h3>
              <p className="text-slate-400 text-sm">Visit <code className="text-cyan-400 break-all">/wp-json/wp/v2/users</code> in browser - if it returns JSON with usernames, it&apos;s vulnerable</p>
            </div>
            <div className="border-l-2 border-cyan-500 pl-4">
              <h3 className="font-semibold text-white">Referer Leak</h3>
              <p className="text-slate-400 text-sm">In Network tab, filter for external requests, check Headers for Referer showing /payday-loan/</p>
            </div>
            <div className="border-l-2 border-cyan-500 pl-4">
              <h3 className="font-semibold text-white">Form Exposure</h3>
              <p className="text-slate-400 text-sm">Look for <code className="text-cyan-400 break-all">/contact-forms/ID/feedback/schema</code> in Network requests</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex flex-col md:flex-row justify-between gap-3">
          <Link
            href="/technical/devtools"
            className="flex items-center gap-2 text-slate-400 hover:text-white"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to DevTools
          </Link>
          <Link
            href="/technical/headers-analysis"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
          >
            Next: Headers Analysis
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
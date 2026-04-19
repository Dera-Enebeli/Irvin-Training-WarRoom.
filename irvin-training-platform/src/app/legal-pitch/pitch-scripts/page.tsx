"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Copy, Check, MessageSquare, Phone, Users } from "lucide-react";
import { pitchScripts } from "@/lib/data";

export default function PitchScriptsPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

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
            <span>Pitch Scripts</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Pitch Scripts</h1>
          <p className="text-slate-400">Copy and paste these scripts for WhatsApp and meetings</p>
        </div>

        {/* Script Categories */}
        <div className="space-y-6 mb-8">
          {/* WhatsApp Scripts */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-400" />
              WhatsApp Scripts
            </h2>
            <div className="space-y-4">
              {pitchScripts.filter(s => s.id.includes('whatsapp')).map((script) => (
                <div
                  key={script.id}
                  className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden"
                >
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{script.title}</h3>
                        <p className="text-slate-400 text-sm">{script.context}</p>
                      </div>
                      <button
                        onClick={() => handleCopy(script.id, script.content)}
                        className="flex items-center gap-2 px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors"
                      >
                        {copiedId === script.id ? (
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
                      <p className="text-slate-300 text-sm whitespace-pre-wrap">{script.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* In-Person Scripts */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-400" />
              In-Person / Boardroom Scripts
            </h2>
            <div className="space-y-4">
              {pitchScripts.filter(s => s.id.includes('in-person') || s.id.includes('close')).map((script) => (
                <div
                  key={script.id}
                  className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden"
                >
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{script.title}</h3>
                        <p className="text-slate-400 text-sm">{script.context}</p>
                      </div>
                      <button
                        onClick={() => handleCopy(script.id, script.content)}
                        className="flex items-center gap-2 px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition-colors"
                      >
                        {copiedId === script.id ? (
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
                      <p className="text-slate-300 text-sm whitespace-pre-wrap">{script.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NDA Script */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-amber-400" />
              NDA Script
            </h2>
            <div className="space-y-4">
              {pitchScripts.filter(s => s.id === 'nda-script').map((script) => (
                <div
                  key={script.id}
                  className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden"
                >
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{script.title}</h3>
                        <p className="text-slate-400 text-sm">{script.context}</p>
                      </div>
                      <button
                        onClick={() => handleCopy(script.id, script.content)}
                        className="flex items-center gap-2 px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-sm rounded-lg transition-colors"
                      >
                        {copiedId === script.id ? (
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
                      <p className="text-slate-300 text-sm whitespace-pre-wrap">{script.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Walk Away */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-red-400" />
              The Walk Away (Use Sparingly)
            </h2>
            <div className="space-y-4">
              {pitchScripts.filter(s => s.id === 'walk-away').map((script) => (
                <div
                  key={script.id}
                  className="bg-slate-800 rounded-xl border border-red-700/50 overflow-hidden"
                >
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{script.title}</h3>
                        <p className="text-slate-400 text-sm">{script.context}</p>
                      </div>
                      <button
                        onClick={() => handleCopy(script.id, script.content)}
                        className="flex items-center gap-2 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors"
                      >
                        {copiedId === script.id ? (
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
                      <p className="text-slate-300 text-sm whitespace-pre-wrap">{script.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How to Avoid Sounding Like Extortion */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden mb-8">
          <div className="p-6 border-b border-slate-700">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-amber-400" />
              How to Avoid Sounding Like Extortion
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Position the law as their protection, not your weapon. Use these techniques:
            </p>
          </div>
          
          <div className="p-6 space-y-6">
            {/* Key Principles */}
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Key Principles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                  <h4 className="text-red-400 font-semibold text-sm mb-2">Wrong Framing</h4>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>• "Pay me or I'll report you"</li>
                    <li>• "You're breaking the law"</li>
                    <li>• "Give me money to stay quiet"</li>
                    <li>• "Fix it OR get fined"</li>
                  </ul>
                </div>
                <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                  <h4 className="text-green-400 font-semibold text-sm mb-2">Right Framing</h4>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>• "I found these issues - here's how we fix them"</li>
                    <li>• "The NDPA has requirements - here's how you meet them"</li>
                    <li>• "This is my professional service - here's what you get"</li>
                    <li>• "I can help you fix this AND become compliant"</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Specific Techniques */}
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-4">Specific Techniques</h3>
              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">1. Lead with Value, Not Threats</h4>
                  <p className="text-slate-300 text-sm">
                    Show the vulnerabilities first, offer solutions second. "Here's what I found, 
                    here's what it means for your clients, here's how we solve it."
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">2. Use "And" Not "Or"</h4>
                  <p className="text-slate-300 text-sm">
                    Instead of "Fix it OR get fined" → "We can fix these vulnerabilities AND 
                    set up your NDPA compliance."
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">3. Position as Their Advisor</h4>
                  <p className="text-slate-300 text-sm">
                    "I'm helping you avoid a problem" not "I'm threatening you with one." 
                    Be the consultant they need, not the lawyer they fear.
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">4. Separate Yourself from the Law</h4>
                  <p className="text-slate-300 text-sm">
                    "The law requires this - I'm showing you how to meet it." You're the 
                    implementer, not the enforcer. NDPC is the bad guy, not you.
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">5. Make It About Their Clients</h4>
                  <p className="text-slate-300 text-sm">
                    "Your clients trust you with their data - this protects that trust." 
                    It's not about you getting paid, it's about them protecting their customers.
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">6. Show What They're Getting</h4>
                  <p className="text-slate-300 text-sm">
                    Don't just name a price - explain the value. "For ₦4M you get: vulnerabilities 
                    fixed, compliance set up, 3 months of support, and peace of mind."
                  </p>
                </div>
              </div>
            </div>

            {/* The Reframe Script */}
            <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4">
              <h4 className="text-cyan-400 font-semibold mb-2">The Reframe Script</h4>
              <p className="text-slate-300 text-sm mb-3">
                When they look at you suspiciously:
              </p>
              <div className="bg-slate-800 rounded-lg p-4">
                <p className="text-white text-sm italic">
                  "I'm not here to threaten you. I found real security issues on your site - 
                  issues that could expose your clients' data and create legal liability. 
                  The NDPA has real teeth now (2% of revenue), and I'm the person who can 
                  fix these problems and make you compliant. This is my professional service, 
                  not a shakedown. Here's what I found, here's what it means, and here's what 
                  I can do about it."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex flex-col md:flex-row justify-between gap-3">
          <Link
            href="/legal-pitch/legal-reference"
            className="flex items-center gap-2 text-slate-400 hover:text-white"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Legal Reference
          </Link>
          <Link
            href="/legal-pitch/objection-handling"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
          >
            Next: Objection Handling
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
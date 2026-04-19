"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, CheckCircle, AlertTriangle, FileText, Shield, Users, Target, ArrowRight, Briefcase, Search, Eye, Scale, Gavel } from "lucide-react";

const auditFindings = [
  {
    id: 'user-enum',
    title: 'User Enumeration (/wp-json/wp/v2/users)',
    risk: 'Critical',
    description: 'Admin usernames publicly exposed via WordPress API',
    evidence: 'JSON response showing usernames: irving, puzqqzdurzay, xvbswdwxgeqy',
    impact: 'Enables targeted brute force attacks - hackers know your admin accounts'
  },
  {
    id: 'wp-version',
    title: 'WordPress Version Exposure',
    risk: 'High',
    description: 'Site reveals exact WP version in URLs',
    evidence: 'URLs contain index.js?ver=6.1.5:1',
    impact: 'Automated bots scan for specific versions with known exploits'
  },
  {
    id: 'referer-leak',
    title: 'Referer Header Data Leak',
    risk: 'Medium',
    description: 'User browsing behavior broadcast to third parties',
    evidence: 'Referer: https://irvinglobalgroup.com/payday-loan/',
    impact: 'Every page visit broadcasts what products users are interested in'
  }
];

const legalEvidence = [
  { law: 'NDPA 2023 Section 24', point: 'Duty of Care - data controllers must protect data subjects' },
  { law: 'GAID 2025 Article 7', point: 'Privacy by Design required - trackers without consent violate this' },
  { law: 'GAID 2025 Article 20', point: '72-hour breach notification to NDPC required' },
  { law: 'GAID 2025 Article 24', point: 'Lawful basis required for all data processing' },
  { law: 'GAID 2025 Article 34', point: 'Data Processing Agreement required for vendors' },
  { law: 'Penalty', point: '2% of Annual Gross Revenue or ₦10 Million - whichever is higher' }
];

const comparisonCases = [
  { name: 'CEX.IO Crypto Exchange', issue: 'Same wp-json vulnerability', lesson: 'Higher security sites have same flaw' },
  { name: 'Pathstone Family Office', issue: '$170B firm breached via API', lesson: 'Financial firms are prime targets' },
  { name: 'Illinois DHS', issue: '700k records exposed (Level 4)', lesson: 'Simple mistakes cause disasters' }
];

export default function ExecutionPage() {
  const [activeSection, setActiveSection] = useState(1);

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
            <span>Execution</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Execution Plan</h1>
          <p className="text-slate-400">Step-by-step guide to winning this deal</p>
        </div>

        {/* Section Navigation */}
        <div className="flex gap-2 mb-8">
          {[
            { id: 1, label: '1. Preparation' },
            { id: 2, label: '2. What to Say' },
            { id: 3, label: '3. Your Proof' }
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeSection === section.id
                  ? 'bg-cyan-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* SECTION 1: PREPARATION */}
        {activeSection === 1 && (
          <div className="space-y-8">
            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
              <div className="p-6 border-b border-slate-700 bg-cyan-900/20">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-cyan-400" />
                  Section 1: Before You Go
                </h2>
              </div>
              
              <div className="p-6 space-y-6">
                {/* What to Research */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Search className="w-5 h-5 text-green-400" />
                    What to Research Before the Meeting
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Company Background</h4>
                      <ul className="text-slate-300 text-sm space-y-1">
                        <li>• Irvin Global company history</li>
                        <li>• Services they offer</li>
                        <li>• Target client demographics</li>
                        <li>• Recent news or updates</li>
                      </ul>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Decision Maker Info</h4>
                      <ul className="text-slate-300 text-sm space-y-1">
                        <li>• Who owns/runs the company</li>
                        <li>• Their role in IT decisions</li>
                        <li>• Previous security work</li>
                        <li>• Budget authority</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Your Audit Findings Summary */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-red-400" />
                    Your Audit Findings Summary
                  </h3>
                  <div className="space-y-4">
                    {auditFindings.map((finding) => (
                      <div key={finding.id} className="bg-slate-700/50 rounded-lg p-4 border-l-4 border-red-500">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-white font-semibold">{finding.title}</h4>
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                            finding.risk === 'Critical' ? 'bg-red-500/20 text-red-400' :
                            finding.risk === 'High' ? 'bg-orange-500/20 text-orange-400' :
                            'bg-amber-500/20 text-amber-400'
                          }`}>
                            {finding.risk}
                          </span>
                        </div>
                        <p className="text-slate-400 text-sm mb-2">{finding.description}</p>
                        <p className="text-cyan-400 text-sm"><span className="font-semibold">Impact:</span> {finding.impact}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What to Bring */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-400" />
                    What to Bring
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Equipment</h4>
                      <ul className="text-slate-300 text-sm space-y-1">
                        <li>✅ Laptop with live demo ready</li>
                        <li>✅ Screenshot folder organized by finding</li>
                        <li>✅ Printed summary report (1-2 pages)</li>
                        <li>✅ Backup charger</li>
                      </ul>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Documents</h4>
                      <ul className="text-slate-300 text-sm space-y-1">
                        <li>✅ NDA (signed by you)</li>
                        <li>✅ Business cards</li>
                        <li>✅ Pricing sheet</li>
                        <li>✅ Legal reference cards</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Meeting Strategy */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-400" />
                    Meeting Strategy
                  </h3>
                  <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-purple-400 font-bold">1.</span>
                        <p className="text-slate-300 text-sm">Start with staff member - build internal champion</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-purple-400 font-bold">2.</span>
                        <p className="text-slate-300 text-sm">Use phrase: "This affects company liability" to escalate to decision-maker</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-purple-400 font-bold">3.</span>
                        <p className="text-slate-300 text-sm">Staff becomes your ally, not your blocker</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-purple-400 font-bold">4.</span>
                        <p className="text-slate-300 text-sm">Never let staff say "I'll handle it" - insist on presenting to management</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 2: WHAT TO SAY */}
        {activeSection === 2 && (
          <div className="space-y-8">
            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
              <div className="p-6 border-b border-slate-700 bg-cyan-900/20">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Gavel className="w-5 h-5 text-cyan-400" />
                  Section 2: What to Say + How to Say It
                </h2>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Opening Hook */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-400" />
                    Opening Hook
                  </h3>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-white font-medium mb-2">The icebreaker that gets their attention:</p>
                    <div className="bg-slate-800 rounded-lg p-4 border border-cyan-700/50">
                      <p className="text-cyan-400 text-sm italic">
                        "I was reviewing websites in the Nigerian financial space and noticed something 
                        on yours that I wanted to bring to your attention. It's a security issue that 
                        could affect your client data."
                      </p>
                    </div>
                    <p className="text-slate-400 text-sm mt-3">
                      Why it works: Non-threatening, positions you as helpful, creates curiosity
                    </p>
                  </div>
                </div>

                {/* Problem Presentation */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    Problem Presentation
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Step 1: Show the Live Demo</h4>
                      <ul className="text-slate-300 text-sm space-y-1">
                        <li>• Open their site in Chrome</li>
                        <li>• Right-click &gt; Inspect &gt; Network Tab</li>
                        <li>• Refresh page</li>
                        <li>• Point to the exposed endpoints in real-time</li>
                      </ul>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Step 2: Explain in Plain English</h4>
                      <ul className="text-slate-300 text-sm space-y-1">
                        <li>• "Your admin usernames are visible to anyone who visits"</li>
                        <li>• "Every page visit sends data to third parties"</li>
                        <li>• "Hackers can see exactly what version of software you're using"</li>
                      </ul>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Step 3: Connect to NDPA</h4>
                      <ul className="text-slate-300 text-sm space-y-1">
                        <li>• "Under NDPA 2023, you have a Duty of Care (Section 24)"</li>
                        <li>• "GAID 2025 requires Privacy by Design (Article 7)"</li>
                        <li>• "If breached, you must notify NDPC within 72 hours (Article 20)"</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Solution Offer */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-cyan-400" />
                    Solution Offer
                  </h3>
                  <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4">
                    <p className="text-white font-semibold mb-3">Present pricing tiers - start with Tier 3:</p>
                    <div className="bg-slate-800 rounded-lg p-4 space-y-2">
                      <p className="text-cyan-400 text-sm">"For ₦4-5M, I'll fix these vulnerabilities AND set up your NDPA compliance, with 3 months of support. This prevents a potential ₦30M problem."</p>
                      <p className="text-slate-400 text-sm">"If that's beyond budget, I also have a ₦2.5M option for just fixing the technical issues."</p>
                    </div>
                  </div>
                </div>

                {/* The Close */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    The Close
                  </h3>
                  <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                    <p className="text-white font-semibold mb-3">After showing the problems:</p>
                    <div className="bg-slate-800 rounded-lg p-4 space-y-2">
                      <p className="text-green-400 text-sm">"Would you like me to fix these issues and get you NDPA compliant?"</p>
                      <p className="text-slate-400 text-sm">"Which tier works best for your situation?"</p>
                    </div>
                    <p className="text-slate-400 text-sm mt-3">
                      Never ask "Would you like to schedule another meeting?" - Ask for the commitment NOW
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 3: YOUR PROOF */}
        {activeSection === 3 && (
          <div className="space-y-8">
            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
              <div className="p-6 border-b border-slate-700 bg-cyan-900/20">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Scale className="w-5 h-5 text-cyan-400" />
                  Section 3: Your Proof (Evidence to Show)
                </h2>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Technical Evidence */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-red-400" />
                    Technical Evidence
                  </h3>
                  <div className="space-y-4">
                    {auditFindings.map((finding) => (
                      <div key={finding.id} className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-5 h-5 text-red-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold">{finding.title}</h4>
                            <p className="text-slate-400 text-sm mb-2">{finding.description}</p>
                            <div className="bg-slate-800 rounded p-3 mb-2">
                              <p className="text-cyan-400 text-xs font-mono">{finding.evidence}</p>
                            </div>
                            <p className="text-slate-300 text-sm"><span className="font-semibold">Why it matters:</span> {finding.impact}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legal Evidence */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-purple-400" />
                    Legal Evidence (NDPA References)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {legalEvidence.map((item, idx) => (
                      <div key={idx} className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-4">
                        <h4 className="text-purple-400 font-semibold text-sm mb-1">{item.law}</h4>
                        <p className="text-slate-300 text-sm">{item.point}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Real-World Comparisons */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-amber-400" />
                    Real-World Comparisons
                  </h3>
                  <div className="space-y-4">
                    {comparisonCases.map((caseItem, idx) => (
                      <div key={idx} className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4">
                        <h4 className="text-amber-400 font-semibold">{caseItem.name}</h4>
                        <p className="text-slate-400 text-sm mb-1"><span className="font-semibold">Issue:</span> {caseItem.issue}</p>
                        <p className="text-slate-300 text-sm"><span className="font-semibold">Lesson:</span> {caseItem.lesson}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Reference Card */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-green-400" />
                    Quick Reference - Key Phrases to Use
                  </h3>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-cyan-400 font-semibold mb-2">When showing vulnerabilities:</p>
                        <p className="text-slate-300">"Here's your admin account exposed..."</p>
                        <p className="text-slate-300">"Every visitor's data is being broadcast..."</p>
                      </div>
                      <div>
                        <p className="text-cyan-400 font-semibold mb-2">When citing law:</p>
                        <p className="text-slate-300">"NDPA Section 24 - Duty of Care"</p>
                        <p className="text-slate-300">"GAID Article 7 - Privacy by Design"</p>
                      </div>
                      <div>
                        <p className="text-cyan-400 font-semibold mb-2">When closing:</p>
                        <p className="text-slate-300">"This ₦5M prevents a ₦30M problem"</p>
                        <p className="text-slate-300">"Which tier works for you?"</p>
                      </div>
                      <div>
                        <p className="text-cyan-400 font-semibold mb-2">If they push back:</p>
                        <p className="text-slate-300">"I'm here to help, not threaten"</p>
                        <p className="text-slate-300">"This protects your clients, not just you"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <div className="flex gap-4">
            <Link
              href="/war-room"
              className="flex items-center gap-2 text-amber-400 hover:text-amber-300"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Quick Reference
            </Link>
            <Link
              href="/legal-pitch/pricing"
              className="flex items-center gap-2 text-slate-400 hover:text-white"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Pricing
            </Link>
          </div>
          <Link
            href="/legal-pitch/closing"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
          >
            Next: Closing
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
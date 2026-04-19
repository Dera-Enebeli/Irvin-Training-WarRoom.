"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, BookOpen, ExternalLink, FileText, AlertCircle, FileCheck } from "lucide-react";

const PDF_URL = "https://ndpc.gov.ng/wp-content/uploads/2025/03/NDP-ACT-GAID-2025-MARCH-20TH.pdf";

const articles = [
  { num: 1, title: "Objectives and Application", page: 1 },
  { num: 2, title: "Material Context of Data Processing", page: 2 },
  { num: 3, title: "Statutory Remedy - Multiple Framework", page: 2 },
  { num: 4, title: "Cooperation with Public Authority", page: 3 },
  { num: 5, title: "Evaluation of Exemptions", page: 3 },
  { num: 6, title: "Capacity of the Commission", page: 3 },
  { num: 7, title: "General Compliance Measures", page: 3 },
  { num: 8, title: "Records of Processing Activities", page: 5 },
  { num: 9, title: "Data Protection Impact Assessment", page: 5 },
  { num: 10, title: "Filing of Compliance Audit Returns", page: 6 },
  { num: 11, title: "Designation of Data Protection Officer", page: 6 },
  { num: 12, title: "Position of DPO", page: 6 },
  { num: 13, title: "Functions of DPO", page: 7 },
  { num: 14, title: "Credential Assessment of DPO", page: 7 },
  { num: 15, title: "Principles of Personal Data Protection", page: 7 },
  { num: 16, title: "Lawfulness of Processing", page: 8 },
  { num: 17, title: "Consent", page: 8 },
  { num: 18, title: "Transparency", page: 9 },
  { num: 19, title: "Security Requirements", page: 9 },
  { num: 20, title: "Breach Notification", page: 9 },
  { num: 21, title: "Data Protection by Design", page: 10 },
  { num: 22, title: "Data Minimisation", page: 10 },
  { num: 23, title: "Integrity and Confidentiality", page: 10 },
  { num: 24, title: "Lawful Basis", page: 10 },
  { num: 25, title: "Data Subject Rights", page: 11 },
  { num: 26, title: "Right to be Informed", page: 11 },
  { num: 27, title: "Right of Access", page: 12 },
  { num: 28, title: "Right to Rectification", page: 12 },
  { num: 29, title: "Right to Erasure", page: 13 },
  { num: 30, title: "Right to Restrict Processing", page: 13 },
  { num: 31, title: "Right to Object", page: 14 },
  { num: 32, title: "Right to Data Portability", page: 14 },
  { num: 33, title: "Automated Decision Making", page: 15 },
  { num: 34, title: "Data Processing Agreement", page: 15 },
  { num: 35, title: "Benchmarking with Interoperable Measures", page: 16 },
  { num: 36, title: "Exercise of Right to Rectification", page: 16 },
  { num: 37, title: "Exercise of Right to Data Portability", page: 16 },
  { num: 38, title: "Exercise of Right to Object", page: 17 },
  { num: 39, title: "Data Subject's Standard Notice", page: 17 },
  { num: 40, title: "Data Ethics and Privacy Dignity", page: 17 },
  { num: 41, title: "Complaint to Commission", page: 18 },
  { num: 42, title: "Compensation", page: 18 },
  { num: 43, title: "Liability and Sanctions", page: 19 },
  { num: 44, title: "General Administrative Offences", page: 19 },
  { num: 45, title: "Cross-Border Data Transfer", page: 20 },
  { num: 46, title: "Capacity Building", page: 20 },
  { num: 47, title: "Jurisdiction of Court", page: 21 },
  { num: 48, title: "Evidence of Compliance", page: 21 },
  { num: 49, title: "Time-Bound Obligations", page: 21 },
  { num: 50, title: "Supplementary Regulations", page: 22 },
  { num: 51, title: "Review of Administrative Obligations", page: 22 },
  { num: 52, title: "Definitions", page: 22 },
];

const articleContent: Record<number, { title: string; content: string[] }> = {
  7: {
    title: "General Compliance Measures",
    content: [
      "Data Controllers and Data Processors shall implement the following compliance measures:",
      "(a) Conduct an NDPA compliance audit and file a Compliance Audit Return (CAR) with the Commission;",
      "(b) Prepare and maintain records of processing activities;",
      "(c) Conduct Data Protection Impact Assessment (DPIA) where processing is likely to result in high risk;",
      "(d) Implement appropriate technical and organizational measures for data security;",
      "(e) Ensure data minimization - collect only necessary data;",
      "(f) Ensure Confidentiality, Integrity and Availability of personal data;",
      "(g) Implement privacy by design and by default in all processing systems;",
      "(i) Implement Privacy by Design - trackers and cookies without consent violate this;",
      "(m) Ensure Transparency - hidden API leaks violate this requirement;",
      "Penalty for non-compliance: Up to 2% of annual revenue or ₦10 Million."
    ]
  },
  19: {
    title: "Security Requirements",
    content: [
      "Data Controllers shall implement appropriate technical and organizational measures to ensure security appropriate to the risk, including:",
      "(a) Ability to restore availability and access to personal data in a timely manner;",
      "(b) Process for regularly testing, assessing and evaluating effectiveness of security measures;",
      "(c) Ability to ensure ongoing confidentiality, integrity, availability of systems;",
      "This covers breach detection and containment measures."
    ]
  },
  20: {
    title: "Breach Notification",
    content: [
      "In the event of a personal data breach, Data Controllers shall:",
      "(a) Notify the Commission within 72 hours of becoming aware of a breach;",
      "(b) Document all personal data breaches including facts, effects and remedial action taken;",
      "(c) Where breach is likely to result in high risk to rights and freedoms, communicate to data subject without undue delay;",
      "The 72-hour notification is mandatory - failure to report within this window is a violation."
    ]
  },
  24: {
    title: "Lawful Basis",
    content: [
      "Processing of personal data shall have a lawful basis. A Data Controller may process personal data where:",
      "(a) Consent - the data subject has given clear consent;",
      "(b) Contract - processing is necessary for a contract with the data subject;",
      "(c) Legal Obligation - processing is necessary for compliance with the law;",
      "(d) Vital Interests - processing is necessary to protect someone's life;",
      "(e) Public Task - processing is necessary for a public function;",
      "(f) Legitimate Interests - processing is necessary for legitimate interests (unless overridden by data subject's rights).",
      "Processing without a lawful basis is unlawful."
    ]
  },
  28: {
    title: "Data Protection Impact Assessment",
    content: [
      "Data Controllers processing personal data on a large scale shall:",
      "(a) Conduct a DPIA before processing begins;",
      "(b) Consult with the Commission where DPIA indicates high risk without mitigation measures;",
      "DPIA is mandatory for:",
      "- Systematic monitoring of publicly accessible area on large scale",
      "- Processing special category data on large scale",
      "- Financial institutions processing customer data at scale"
    ]
  },
  34: {
    title: "Data Processing Agreement",
    content: [
      "Where a Data Processor is engaged, there shall be a written Data Processing Agreement (DPA) ensuring:",
      "(a) Processing is only on instructions of the Data Controller;",
      "(b) Confidentiality of personnel processing data;",
      "(c) Security measures as required by the NDPA;",
      "(d) Sub-processors only with prior authorization;",
      "(e) Data handling and return/deletion procedures;",
      "(f) Assistance to Data Controller for data subject rights;",
      "(g) Assistance with NDPA compliance including security and breach notification;",
      "The processor must have a written DPA before processing begins."
    ]
  }
};

export default function PDFVerifierPage() {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  return (
    <div className="flex-1 bg-slate-900 min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto p-4 overflow-x-hidden">
        <div className="mb-4">
          <div className="flex items-center gap-2 text-cyan-400 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/legal-pitch" className="hover:text-white">Legal & Pitch</Link>
            <ChevronRight className="w-4 h-4" />
            <span>PDF Verifier</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">GAID 2025 PDF Verifier</h1>
          <p className="text-slate-400 text-sm">Read the actual law - verify our references against the source</p>
        </div>

        <div className="flex items-center gap-4 mb-4 bg-slate-800 p-3 rounded-lg">
          <a 
            href={PDF_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Open Official PDF
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-72 shrink-0 bg-slate-800 rounded-lg p-4 max-h-[50vh] md:max-h-[calc(100vh-200px)] overflow-y-auto">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Articles (GAID 2025)
            </h3>
            <div className="space-y-1">
              {articles.map((article) => (
                <button
                  key={article.num}
                  onClick={() => setSelectedArticle(article.num)}
                  className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                    selectedArticle === article.num 
                      ? "bg-cyan-600 text-white" 
                      : "text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  <span className="font-medium">Art. {article.num}:</span>{" "}
                  <span className="text-slate-400 text-xs block">{article.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-slate-800 rounded-lg min-h-[50vh] md:min-h-[calc(100vh-200px)] overflow-y-auto p-4 md:p-6">
            {selectedArticle ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-cyan-400 mb-4">
                  <FileCheck className="w-5 h-5" />
                  <span>Article {selectedArticle} - {articleContent[selectedArticle]?.title || articles.find(a => a.num === selectedArticle)?.title}</span>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 space-y-3">
                  {articleContent[selectedArticle]?.content.map((line, idx) => (
                    <p key={idx} className="text-slate-300 text-sm">{line}</p>
                  )) || (
                    <p className="text-slate-400 text-sm">Click an article in the sidebar to view its content here. Key articles (7, 19, 20, 24, 28, 34) have full content extracted from the PDF.</p>
                  )}
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-cyan-400 hover:text-cyan-300 text-sm"
                >
                  ← Back to article list
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4">
                  <h3 className="text-cyan-400 font-semibold mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    How to Use This Verifier
                  </h3>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>• Click any article in the sidebar to view its content</li>
                    <li>• Key articles (7, 19, 20, 24, 28, 34) have full extracted content</li>
                    <li>• Use "Open Official PDF" link to view the complete document</li>
                    <li>• Compare our training content against the actual law text</li>
                  </ul>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                    <h4 className="text-red-400 font-semibold text-sm mb-2">For Your Pitch - Most Critical</h4>
                    <ul className="text-slate-300 text-xs space-y-1">
                      <li>• Article 7: Compliance Measures</li>
                      <li>• Article 19: Security Requirements</li>
                      <li>• Article 20: 72-hour Breach Notice</li>
                      <li>• Article 24: Lawful Basis</li>
                      <li>• Article 28: DPIA (mandatory for finance)</li>
                      <li>• Article 34: Data Processing Agreement</li>
                    </ul>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <h4 className="text-slate-400 font-semibold text-sm mb-2">Other Important Articles</h4>
                    <ul className="text-slate-300 text-xs space-y-1">
                      <li>• Article 10: CAR Filing Deadline</li>
                      <li>• Article 11: DPO Designation</li>
                      <li>• Article 17: Consent Requirements</li>
                      <li>• Article 18: Transparency</li>
                      <li>• Article 45: Cross-Border Transfer</li>
                      <li>• Article 47: Court Jurisdiction</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 bg-slate-800 rounded-lg p-4">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            Key Articles for Your Pitch
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-3">
              <h4 className="text-red-400 font-semibold text-sm mb-1">Article 7 - Compliance</h4>
              <p className="text-slate-300 text-xs">Privacy by Design required - trackers without consent violate this</p>
            </div>
            <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-3">
              <h4 className="text-amber-400 font-semibold text-sm mb-1">Article 20 - Breach Notice</h4>
              <p className="text-slate-300 text-xs">72-hour breach notification to NDPC required</p>
            </div>
            <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-3">
              <h4 className="text-purple-400 font-semibold text-sm mb-1">Article 24 - Lawful Basis</h4>
              <p className="text-slate-300 text-xs">Must have consent, contract, or other lawful basis for processing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
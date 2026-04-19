import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { technicalChecklist } from "@/lib/data";

export default function AuditChecklistPage() {
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
            <span>Audit Checklist</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">6-Step Audit Checklist</h1>
          <p className="text-slate-400">Follow these steps to perform a complete security audit</p>
        </div>

        {/* Checklist */}
        <div className="space-y-4">
          {technicalChecklist.map((item, index) => (
            <div
              key={item.id}
              className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden"
            >
              <div className="p-5">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 font-bold flex-shrink-0 md:order-1 order-2">
                    {index + 1}
                  </div>
                  <div className="flex-1 md:order-2 order-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{item.description}</p>
                    
                    {/* Steps */}
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Steps:</h4>
                      <ol className="space-y-2">
                        {item.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-2 text-slate-300 text-sm">
                            <span className="text-cyan-400 font-bold">{stepIndex + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/technical"
            className="flex items-center gap-2 text-slate-400 hover:text-white"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Technical
          </Link>
          <Link
            href="/technical/devtools"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
          >
            Next: DevTools Guide
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
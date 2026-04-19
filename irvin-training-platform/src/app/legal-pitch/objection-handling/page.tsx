import Link from "next/link";
import { ArrowRight, ChevronRight, MessageCircle, CheckCircle, AlertCircle } from "lucide-react";
import { objections } from "@/lib/data";

export default function ObjectionHandlingPage() {
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
            <span>Objection Handling</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Objection Handling</h1>
          <p className="text-slate-400">Counters for the most common pushbacks you&apos;ll face</p>
        </div>

        {/* Overview */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-400" />
            The 4 Main Objections
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="font-semibold text-cyan-400 mb-1">1. &quot;We use Instagram&quot;</h3>
              <p className="text-slate-400 text-sm">They claim they don&apos;t use the website</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="font-semibold text-cyan-400 mb-1">2. &quot;We&apos;ll fix it ourselves&quot;</h3>
              <p className="text-slate-400 text-sm">They want to take your advice for free</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="font-semibold text-cyan-400 mb-1">3. &quot;We have SSL - we&apos;re secure&quot;</h3>
              <p className="text-slate-400 text-sm">They think the padlock means full security</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="font-semibold text-cyan-400 mb-1">4. &quot;Are you certified?&quot;</h3>
              <p className="text-slate-400 text-sm">Questioning your authority/credentials</p>
            </div>
          </div>
        </div>

        {/* Objection Details */}
        <div className="space-y-6 mb-8">
          {objections.map((obj) => (
            <div
              key={obj.id}
              className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden"
            >
              <div className="p-5 border-b border-slate-700">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 md:order-1 order-2">
                    <MessageCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <div className="md:order-2 order-1">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      &quot;{obj.objection}&quot;
                    </h3>
                    <span className="text-slate-400 text-sm">The most common pushback</span>
                  </div>
                </div>
              </div>
              
              <div className="p-5 space-y-4">
                <h4 className="text-sm font-semibold text-purple-400">Counters:</h4>
                {obj.counters.map((counter, index) => (
                  <div
                    key={index}
                    className="bg-slate-700/30 rounded-lg p-4"
                  >
                    <h5 className="font-semibold text-cyan-400 mb-2">{counter.point}</h5>
                    <p className="text-slate-300 text-sm">{counter.response}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tough Questions Section */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-purple-700">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-purple-400" />
            Tough Questions (From War Room)
          </h2>
          <div className="space-y-4">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <p className="text-white font-semibold mb-2">&quot;But we have an SSL certificate - aren&apos;t we secure?&quot;</p>
              <p className="text-slate-400 text-sm">Answer: SSL only encrypts the tunnel. It doesn&apos;t stop the site from leaking data out the back door.</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <p className="text-white font-semibold mb-2">&quot;Is this really a Data Breach?&quot;</p>
              <p className="text-slate-400 text-sm">Answer: Under NDPR, unauthorized sharing of User Intent with third parties is a compliance risk.</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <p className="text-white font-semibold mb-2">&quot;Why is your Next.js version better?&quot;</p>
              <p className="text-slate-400 text-sm">Answer: Server-Side architecture - user&apos;s browser never talks to third parties directly.</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <p className="text-white font-semibold mb-2">&quot;How do we know you won&apos;t hack us?&quot;</p>
              <p className="text-slate-400 text-sm">Answer: Hackers don&apos;t walk into boardrooms with NDAs and Vercel previews. I&apos;m here to secure, not exploit.</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/legal-pitch/pitch-scripts"
            className="flex items-center gap-2 text-slate-400 hover:text-white"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Pitch Scripts
          </Link>
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
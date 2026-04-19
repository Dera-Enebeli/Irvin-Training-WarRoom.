"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Search, Menu, X, Shield, Scale, ChevronDown } from "lucide-react";
import { searchIndexes } from "@/lib/data";

const technicalLinks = [
  { href: "/technical", label: "Overview", color: "bg-cyan-400" },
  { href: "/technical/audit-checklist", label: "Audit Checklist", color: "bg-cyan-400" },
  { href: "/technical/devtools", label: "DevTools Guide", color: "bg-cyan-400" },
  { href: "/technical/wp-vulnerabilities", label: "WP Vulnerabilities", color: "bg-red-400" },
  { href: "/technical/headers-analysis", label: "Headers Analysis", color: "bg-amber-400" },
  { href: "/technical/real-cases", label: "Real Cases", color: "bg-orange-400" },
  { href: "/technical/risks", label: "Risks", color: "bg-yellow-400" },
  { href: "/technical/documentation", label: "Documentation", color: "bg-purple-400" },
];

const legalLinks = [
  { href: "/legal-pitch", label: "Overview", color: "bg-purple-400" },
  { href: "/legal-pitch/legal-reference", label: "Legal Reference", color: "bg-purple-400" },
  { href: "/legal-pitch/pdf-verifier", label: "PDF Verifier", color: "bg-cyan-400" },
  { href: "/legal-pitch/pitch-scripts", label: "Pitch Scripts", color: "bg-green-400" },
  { href: "/legal-pitch/objection-handling", label: "Objection Handling", color: "bg-red-400" },
  { href: "/legal-pitch/pricing", label: "Pricing", color: "bg-green-400" },
  { href: "/legal-pitch/execution", label: "Execution", color: "bg-amber-400" },
  { href: "/legal-pitch/closing", label: "Closing", color: "bg-orange-400" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(true);
  const [legalOpen, setLegalOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof searchIndexes>([]);
  const pathname = usePathname();
  const router = useRouter();

  const isTechnical = pathname.startsWith("/technical");
  const isLegalPitch = pathname.startsWith("/legal-pitch");
  const isWarRoom = pathname === "/war-room";
  const isLagosPrep = pathname.startsWith("/lagos-prep");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg md:text-xl">
            <Shield className="w-6 h-6 text-cyan-400" />
            <span className="hidden sm:inline">Irvin Training</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Technical Dropdown */}
            <div className="relative">
              <button
                onClick={() => { setTechOpen(!techOpen); setLegalOpen(false); }}
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isTechnical ? "text-cyan-400 bg-slate-800" : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                <Scale className="w-4 h-4" />
                Technical (You)
                <ChevronDown className={`w-4 h-4 transition-transform ${techOpen ? "rotate-180" : ""}`} />
              </button>
              {techOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-slate-800 rounded-md shadow-lg border border-slate-700 py-1 z-[70]">
                  {technicalLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setTechOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      <span className={`w-2 h-2 rounded-full ${link.color}`}></span>
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Legal & Pitch Dropdown */}
            <div className="relative">
              <button
                onClick={() => { setLegalOpen(!legalOpen); setTechOpen(false); }}
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isLegalPitch ? "text-purple-400 bg-slate-800" : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                <Scale className="w-4 h-4" />
                Legal & Pitch (Partner)
                <ChevronDown className={`w-4 h-4 transition-transform ${legalOpen ? "rotate-180" : ""}`} />
              </button>
              {legalOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-slate-800 rounded-md shadow-lg border border-slate-700 py-1 z-[70]">
                  {legalLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setLegalOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      <span className={`w-2 h-2 rounded-full ${link.color}`}></span>
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* War Room */}
            <Link
              href="/war-room"
              className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isWarRoom ? "text-amber-400 bg-slate-800" : "text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Shield className="w-4 h-4" />
              War Room
            </Link>

            {/* Lagos Prep */}
            <Link
              href="/lagos-prep"
              className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isLagosPrep ? "text-amber-400 bg-slate-800" : "text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Shield className="w-4 h-4" />
              Lagos Prep
            </Link>

            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-slate-400 hover:text-white transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="pb-4 relative z-[60]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search checklists, scripts, legal refs..."
                value={searchQuery}
                onChange={(e) => {
                  const query = e.target.value.toLowerCase();
                  setSearchQuery(query);
                  if (query.length > 1) {
                    const results = searchIndexes.filter(item => 
                      item.term.toLowerCase().includes(query) || 
                      item.context.toLowerCase().includes(query)
                    );
                    setSearchResults(results.slice(0, 6));
                  } else {
                    setSearchResults([]);
                  }
                }}
                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500"
              />
            </div>
            {/* Search Results Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute left-0 right-0 mt-2 bg-slate-800 border border-slate-600 rounded-md shadow-lg z-50 max-h-64 overflow-y-auto">
                {searchResults.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      router.push(result.page);
                      setSearchOpen(false);
                      setSearchQuery("");
                      setSearchResults([]);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-slate-700 border-b border-slate-700 last:border-0"
                  >
                    <span className="text-white text-sm font-medium">{result.term}</span>
                    <span className="text-slate-400 text-xs ml-2">- {result.context}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-slate-700 pt-4 max-h-[80vh] overflow-y-auto">
            {/* Mobile Tab Switcher */}
            <div className="flex mb-4 rounded-lg overflow-hidden">
              <button
                onClick={() => { setTechOpen(!techOpen); setLegalOpen(false); }}
                className={`flex-1 py-3 text-sm font-medium text-center transition-colors ${
                  techOpen ? "bg-cyan-600 text-white" : "bg-slate-800 text-slate-300"
                }`}
              >
                Technical
              </button>
              <button
                onClick={() => { setLegalOpen(!legalOpen); setTechOpen(false); }}
                className={`flex-1 py-3 text-sm font-medium text-center transition-colors ${
                  legalOpen ? "bg-purple-600 text-white" : "bg-slate-800 text-slate-300"
                }`}
              >
                Legal & Pitch
              </button>
            </div>

            {techOpen && (
              <div className="space-y-1 animate-fade-in">
                <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider px-3 mb-2">
                  Technical (You)
                </div>
                {technicalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-3 min-h-[44px] text-slate-300 hover:bg-slate-800 hover:text-white rounded-md"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {legalOpen && (
              <div className="space-y-1 animate-fade-in">
                <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider px-3 mb-2">
                  Legal & Pitch (Partner)
                </div>
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-3 min-h-[44px] text-slate-300 hover:bg-slate-800 hover:text-white rounded-md"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Always visible links */}
            <div className="mt-4 pt-4 border-t border-slate-700">
              <Link
                href="/war-room"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 min-h-[44px] text-amber-400 hover:bg-slate-800 rounded-md"
              >
                War Room
              </Link>
              <Link
                href="/lagos-prep"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 min-h-[44px] text-amber-400 hover:bg-slate-800 rounded-md"
              >
                Lagos Prep
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
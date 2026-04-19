export default function LagosPrepPage() {
  return (
    <div className="flex-1 p-4 md:p-8 bg-slate-900 min-h-screen flex items-center justify-center overflow-x-hidden">
      <div className="text-center max-w-md px-4 overflow-x-hidden">
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-amber-500/20 rounded-full mb-6">
          <span className="text-3xl md:text-4xl">🏫</span>
        </div>
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">Lagos Prep Ikoyi</h1>
        <p className="text-slate-400 text-base md:text-lg mb-8">https://lagosprepikoyi.com.ng/</p>
        <div className="inline-block bg-amber-500/20 border border-amber-500/50 rounded-lg px-6 py-3">
          <p className="text-amber-400 font-semibold">Coming Soon</p>
          <p className="text-slate-400 text-sm mt-1">Next Project</p>
        </div>
      </div>
    </div>
  );
}
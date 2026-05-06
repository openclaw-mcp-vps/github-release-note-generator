export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Changelog Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-generate release notes<br />
          <span className="text-[#58a6ff]">from your GitHub commits</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Connect your GitHub repo, pick a version range, and get professional AI-categorized release notes in seconds — ready to publish.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $14/mo
        </a>
        <ul className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#8b949e]">
          <li className="flex items-center gap-1"><span className="text-[#3fb950]">✓</span> GitHub OAuth</li>
          <li className="flex items-center gap-1"><span className="text-[#3fb950]">✓</span> AI categorization</li>
          <li className="flex items-center gap-1"><span className="text-[#3fb950]">✓</span> Markdown export</li>
          <li className="flex items-center gap-1"><span className="text-[#3fb950]">✓</span> PR & commit analysis</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl p-8 bg-[#161b22] max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$14</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Unlimited repositories</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> AI-powered categorization</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> PR & commit analysis</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Markdown & HTML export</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Custom release templates</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does it connect to GitHub?</h3>
            <p className="text-[#8b949e] text-sm">You authenticate via GitHub OAuth. We request read-only access to your repositories, commits, and pull requests — no write permissions needed.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What does AI categorization mean?</h3>
            <p className="text-[#8b949e] text-sm">Commits and PRs are automatically sorted into sections like Features, Bug Fixes, Performance, and Breaking Changes — so your release notes are structured and readable without manual effort.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel your subscription at any time from your billing dashboard. You keep access until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs">
        &copy; {new Date().getFullYear()} Release Notes Generator. All rights reserved.
      </footer>
    </main>
  );
}

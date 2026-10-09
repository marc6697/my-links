import Link from "next/link";
import { Globe, Mail, ArrowUpRight, Code2 } from "lucide-react";

interface SocialLink {
  id: string;
  title: string;
  url: string;
  clicks: string;
  icon: React.ReactNode;
}

const links: SocialLink[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    url: "https://yourportfolio.com",
    clicks: "1.2k",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    id: "github",
    title: "GitHub Profile",
    url: "https://github.com",
    clicks: "850",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    id: "twitter",
    title: "X / Twitter",
    url: "https://twitter.com",
    clicks: "620",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: "youtube",
    title: "YouTube Channel",
    url: "https://youtube.com",
    clicks: "430",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    id: "email",
    title: "Send Email",
    url: "mailto:your.email@example.com",
    clicks: "150",
    icon: <Mail className="w-5 h-5" />,
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-zinc-100 flex flex-col items-center justify-between p-6 sm:p-8 font-sans selection:bg-[#22c55e] selection:text-black overflow-hidden">
      
      {/* 1. Subtle Gradient Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,197,94,0.15),rgba(255,255,255,0))]" />

      {/* Container Utama (Mobile-first, max-width 480px) */}
      <div className="relative z-10 w-full max-w-[480px] mx-auto flex-1 flex flex-col items-center justify-center py-8">
        
        {/* Profile Section */}
        <section className="flex flex-col items-center text-center mb-8 animate-fade-in">
          {/* Avatar Container dengan Glowing Ring */}
          <div className="relative group mb-4">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#22c55e] to-emerald-500 rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-500" />
            <div className="relative w-24 h-24 rounded-full bg-zinc-950 border-2 border-[#22c55e]/40 flex items-center justify-center text-zinc-400 overflow-hidden shadow-2xl">
              <Code2 className="w-10 h-10 text-[#22c55e]" />
            </div>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-white mb-1">
            Your Name
          </h1>
          <p className="text-sm font-medium text-zinc-400 flex items-center gap-1">
            Vibe Coder ✨ | Building cool stuff with AI
          </p>
        </section>

        {/* Links Section */}
        <section className="w-full flex flex-col gap-3.5 mb-10">
          {links.map((link, index) => (
            <Link
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              /* 2 & 3. Hover Effect (Scale Up + Glow) & Click Animation (Press Down) */
              className="group relative w-full flex items-center justify-between p-4 rounded-xl bg-zinc-900/90 border border-zinc-800/80 hover:border-[#22c55e]/60 hover:bg-zinc-800/70 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.97] shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.18)] animate-slide-up"
              style={{
                animationDelay: `${(index + 1) * 100}ms`,
                animationFillMode: "both",
              }}
            >
              {/* Left Side: Icon & Title */}
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-zinc-800/80 text-zinc-300 group-hover:text-[#22c55e] group-hover:bg-[#22c55e]/10 transition-colors duration-300">
                  {link.icon}
                </div>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                    {link.title}
                  </span>
                </div>
              </div>

              {/* Right Side: Arrow Icon & 4. Analytics Badge */}
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-medium text-zinc-400 bg-zinc-800/80 border border-zinc-700/50 group-hover:border-[#22c55e]/40 group-hover:text-zinc-200 px-2 py-0.5 rounded-full transition-all">
                  🔥 {link.clicks} clicks
                </span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#22c55e] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-auto pt-6 text-center text-xs text-zinc-500 animate-fade-in">
          Made with <span className="text-[#22c55e]">💚</span> and vibes
        </footer>
      </div>
    </main>
  );
}
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronLeft,
  Compass,
  Gauge,
  Layers3,
  LineChart,
  Megaphone,
  Route,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Waves,
} from "lucide-react";

const sitesReviewed = [
  {
    title: "Paddling Magazine",
    href: "https://paddlingmag.com",
    focus: "Whitewater, touring, canoeing, SUP, destinations, skills, events, and gear.",
    signal: "Strong editorial authority with deep evergreen content and broad paddlesports taxonomy.",
  },
  {
    title: "Kayak Angler",
    href: "https://kayakanglermag.com",
    focus: "Fishing kayaks, rigging, bass and saltwater tactics, buyer guides, reviews, and tournaments.",
    signal: "High purchase-intent audience with clear opportunities around gear research and affiliate paths.",
  },
];

const enhancements = [
  {
    rank: "01",
    title: "Performance-first article and ad experience",
    problem:
      "Article pages should monetize without making mobile readers fight layout shifts, visual clutter, or ad placements that interrupt the core reading flow.",
    solution:
      "Create a standardized template system with fixed-size ad containers, Core Web Vitals budgets, premium sponsorship zones, and clear editorial vs. sponsored boundaries.",
    whyItStandsOut:
      "This protects reader trust while giving ad ops a cleaner inventory story: fewer accidental interruptions, better viewability, and stronger direct-sold packages.",
    kpis: ["+20% ad viewability", "+10–15% pages/session", "+15% revenue/session"],
    icon: Gauge,
  },
  {
    rank: "02",
    title: "Guided content journeys instead of article dead ends",
    problem:
      "A common pattern for search and social traffic is Homepage → Article → Exit, even though paddlers and anglers naturally explore related techniques, destinations, gear, and video.",
    solution:
      "Add topic hubs, ‘start here’ guides, editorial series, next-best content modules, stronger search/filtering, and interest-specific newsletter prompts.",
    whyItStandsOut:
      "The renewal should turn one-off visits into sessions with momentum — from inspiration to education to gear research to subscription.",
    kpis: ["+25% pages/session", "+15% session duration", "+20% newsletter conversion"],
    icon: Route,
  },
  {
    rank: "03",
    title: "Modern gear discovery and buyer-decision tools",
    problem:
      "Kayak buyers may spend $1,000–$3,000+ on boats and accessories, but fragmented review UX makes it harder to compare options and move confidently toward purchase.",
    solution:
      "Build comparison tools, buyer guides, product-card modules, ‘best for’ labels, structured review schema, save/share actions, and affiliate-ready calls to action.",
    whyItStandsOut:
      "This is the highest-leverage long-term revenue opportunity because it pairs editorial credibility with measurable affiliate and sponsor outcomes.",
    kpis: ["+30% affiliate CTR", "+20% returning users", "Higher sponsor package value"],
    icon: ShoppingCart,
  },
];

const phases = [
  {
    weeks: "1–2",
    phase: "Discovery & Definition",
    milestone: "MVP scope alignment",
    deliverables: ["Stakeholder interviews", "Analytics/ad inventory review", "Content + SEO audit", "PRD, success metrics, prioritized backlog"],
    accent: "from-cyan-300/30 to-blue-500/10",
  },
  {
    weeks: "3–4",
    phase: "UX & Solution Design",
    milestone: "Design signoff gate",
    deliverables: ["Navigation and taxonomy model", "Article/ad template wireframes", "Component inventory", "Finalized sprint scope"],
    accent: "from-teal-300/30 to-emerald-500/10",
  },
  {
    weeks: "5–9",
    phase: "Development & Migration",
    milestone: "Feature-complete staging",
    deliverables: ["CMS/front-end build", "Ad + analytics implementation", "Redirect mapping", "High-value content preservation"],
    accent: "from-amber-300/30 to-orange-500/10",
  },
  {
    weeks: "10–11",
    phase: "QA & Performance",
    milestone: "Go-live readiness review",
    deliverables: ["Mobile/browser QA", "Core Web Vitals pass", "SEO redirect testing", "GA4/ad/newsletter/affiliate validation"],
    accent: "from-violet-300/30 to-indigo-500/10",
  },
  {
    weeks: "12",
    phase: "Launch & Hypercare",
    milestone: "Production + monitoring",
    deliverables: ["Production deployment", "Dashboards and alerting", "Issue triage", "Stakeholder launch reporting"],
    accent: "from-lime-300/30 to-teal-500/10",
  },
];

const gearRows = [
  ["Best fit", "Tournament anglers", "All-around kayak anglers"],
  ["Stability", "High", "Medium-high"],
  ["Weight", "Heavy", "Moderate"],
  ["Pedal drive", "Yes", "Yes"],
  ["Renewal UX cue", "Premium / expert", "Versatile / approachable"],
];

const journeySteps = ["Article", "Related guide", "Gear comparison", "Newsletter", "Return visit"];

const RapidMedia = () => {
  const [selectedBoat, setSelectedBoat] = useState<"hobie" | "oldtown">("oldtown");
  const [journeyIndex, setJourneyIndex] = useState(2);

  useEffect(() => {
    document.title = "Rapid Media Site Renewal Recommendations | Jay Logan";
  }, []);

  const selectedBoatLabel = selectedBoat === "hobie" ? "Hobie Pro Angler" : "Old Town Sportsman";
  const completedJourney = useMemo(() => new Set(Array.from({ length: journeyIndex + 1 }, (_, index) => index)), [journeyIndex]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-slate-50">
      <section className="relative border-b border-white/10 px-5 py-8 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(34,211,238,.20),transparent_32%),radial-gradient(circle_at_78%_0%,rgba(251,191,36,.16),transparent_30%),linear-gradient(135deg,rgba(15,23,42,.35),transparent)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:min-h-[700px] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
              <Sparkles className="h-4 w-4" /> Sample Product Owner Exercise
            </div>
            <h1 className="font-display text-4xl leading-tight text-white sm:text-6xl lg:text-7xl">
              Rapid Media site renewal recommendations
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200/80 sm:text-xl">
              A technical product owner view of how Paddling Magazine and Kayak Angler can modernize mobile UX, deepen engagement, and protect monetization during a focused three-month renewal.
            </p>

            <div className="mt-8 rounded-[1.75rem] border border-cyan-300/20 bg-cyan-300/[0.07] p-5 shadow-2xl backdrop-blur sm:p-6">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-100">The Ask</p>
              <ol className="mt-4 space-y-3 text-slate-100/85">
                {[
                  "Review PaddlingMag.com and KayakAnglerMag.com ahead of upcoming site renewals.",
                  "Identify the top 3 user experience enhancements the renewals should target.",
                  "Describe the technical product owner critical path for timely execution within an initial 3-month timeline.",
                ].map((item, index) => (
                  <li key={item} className="flex gap-3 leading-7">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-xs font-black text-cyan-100">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["Research lens", "Mobile-first outdoor audiences"],
                ["Goal", "Engagement + monetization"],
                ["Timeline", "3-month critical path"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-100/70">{label}</p>
                  <p className="mt-2 font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <RenewalMock selectedBoat={selectedBoat} setSelectedBoat={setSelectedBoat} />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-12">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-100">What I reviewed</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Two strong editorial brands with a bigger platform opportunity.
          </h2>
          <p className="mt-5 leading-7 text-slate-300/78">
            Both sites already have authority and content depth. The renewal opportunity is to make that authority easier to navigate, faster to consume on mobile, and more directly connected to revenue paths like ads, sponsorship, newsletters, and gear commerce.
          </p>
          <div className="mt-6 rounded-3xl border border-amber-300/20 bg-amber-300/[0.08] p-5 text-sm leading-7 text-amber-50/80">
            Live homepage checks showed large, media-heavy pages and strong content signals around kayaking, gear, video, reviews, and destinations — a useful base for a renewal focused on performance, discovery, and buyer intent.
          </div>
        </div>
        <div className="grid gap-4">
          {sitesReviewed.map((site) => (
            <a
              key={site.href}
              href={site.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-white/10 bg-[#0d1c2f] p-5 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-[#11243b]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-100">{site.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-cyan-100/70">{site.focus}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300/70">{site.signal}</p>
                </div>
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-cyan-100 transition group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#091626] px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-amber-100">Top 3 UX enhancements</p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
                Prioritized by reader value, delivery realism, and revenue lift.
              </h2>
            </div>
            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-50/80">
              Renewal success = faster pages + deeper journeys + higher-intent commerce.
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {enhancements.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.rank} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-sm font-black tracking-[0.22em] text-cyan-100/70">{item.rank}</span>
                    <span className="rounded-2xl bg-cyan-300/12 p-3 text-cyan-100"><Icon className="h-5 w-5" /></span>
                  </div>
                  <h3 className="text-2xl font-black text-white">{item.title}</h3>
                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-cyan-100/80">Problem</p>
                  <p className="mt-2 leading-7 text-slate-300/72">{item.problem}</p>
                  <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-amber-100/80">Solution</p>
                  <p className="mt-2 leading-7 text-slate-300/72">{item.solution}</p>
                  <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-slate-100/80">
                    {item.whyItStandsOut}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.kpis.map((kpi) => (
                      <span key={kpi} className="rounded-full bg-amber-300/12 px-3 py-2 text-xs font-bold text-amber-100">
                        {kpi}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_420px] lg:px-12">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
            <ShoppingCart className="h-4 w-4" /> Concept mock-up: gear decision tools
          </div>
          <h2 className="mt-5 text-3xl font-black text-white sm:text-5xl">
            Make high-intent gear research feel useful, not fragmented.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300/75">
            For a renewal, the strongest product-led differentiator is a gear experience that helps readers compare, filter, and act. It creates value for users while giving Rapid Media measurable affiliate, sponsorship, and newsletter opportunities.
          </p>

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-[#0d1c2f] p-5 sm:p-6">
            <div className="mb-5 flex rounded-2xl bg-black/25 p-1 text-sm font-bold">
              <button
                className={`flex-1 rounded-xl px-4 py-3 transition ${selectedBoat === "hobie" ? "bg-cyan-100 text-[#07111f]" : "text-slate-300/70 hover:text-white"}`}
                onClick={() => setSelectedBoat("hobie")}
              >
                Hobie Pro Angler
              </button>
              <button
                className={`flex-1 rounded-xl px-4 py-3 transition ${selectedBoat === "oldtown" ? "bg-amber-300 text-[#07111f]" : "text-slate-300/70 hover:text-white"}`}
                onClick={() => setSelectedBoat("oldtown")}
              >
                Old Town Sportsman
              </button>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10">
              {gearRows.map(([feature, hobie, oldtown]) => (
                <div key={feature} className="grid grid-cols-[0.9fr_1fr_1fr] border-b border-white/10 last:border-b-0">
                  <div className="bg-white/[0.04] px-3 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-400 sm:px-4">{feature}</div>
                  <div className={`px-3 py-4 text-sm font-semibold sm:px-4 ${selectedBoat === "hobie" ? "bg-cyan-300/12 text-cyan-50" : "text-slate-300/70"}`}>{hobie}</div>
                  <div className={`px-3 py-4 text-sm font-semibold sm:px-4 ${selectedBoat === "oldtown" ? "bg-amber-300/12 text-amber-50" : "text-slate-300/70"}`}>{oldtown}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <InsightCard label="Product owner lens" text="Define this as a reusable product-card and comparison-table system, not a one-off review template." />
              <InsightCard label="Measurement" text="Track compare clicks, affiliate CTA clicks, saves, email captures, and return visits from gear pages." />
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Metric icon={BarChart3} value="+30%" label="target affiliate CTR lift" />
            <Metric icon={Search} value="Schema" label="structured reviews + product data" />
            <Metric icon={Megaphone} value="Sponsors" label="cleaner premium packages" />
          </div>
        </div>

        <div className="lg:sticky lg:top-6 lg:self-start">
          <RenewalMock selectedBoat={selectedBoat} setSelectedBoat={setSelectedBoat} compact />
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#091626] px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-100">Critical path</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
              Three months is achievable if the MVP is protected early.
            </h2>
            <p className="mt-5 leading-8 text-slate-300/75">
              The product owner role is to keep engineering, editorial, ad operations, SEO, and stakeholders moving through explicit gates. The most important decision is what not to rebuild before launch.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-5">
            {phases.map((phase) => (
              <article key={phase.weeks} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-2xl">
                <div className={`mb-5 rounded-2xl bg-gradient-to-br ${phase.accent} p-4`}>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-white/62">Weeks</p>
                  <p className="mt-1 text-3xl font-black text-white">{phase.weeks}</p>
                </div>
                <h3 className="text-xl font-black text-white">{phase.phase}</h3>
                <p className="mt-2 text-sm font-bold text-cyan-100">{phase.milestone}</p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300/72">
                  {phase.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex gap-2">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-amber-200" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-300/10 px-4 py-2 text-sm font-bold text-amber-100">
            <Compass className="h-4 w-4" /> Journey architecture
          </div>
          <h2 className="mt-5 text-3xl font-black text-white sm:text-5xl">
            The renewal should make the next useful action obvious.
          </h2>
          <p className="mt-5 leading-8 text-slate-300/75">
            The goal is not just a cleaner website. It is a more intentional platform where content, video, events, newsletters, and commerce reinforce each other without overwhelming the launch timeline.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <InsightCard label="MVP discipline" text="Launch-critical: performance, templates, navigation, discovery modules, redirects, analytics, and ad validation." />
            <InsightCard label="Post-launch upside" text="Expand into deeper personalization, saved gear lists, video journeys, event integrations, and commerce partnerships." />
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#0d1c2f] p-5 sm:p-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-100/75">Guided path prototype</p>
          <div className="mt-6 space-y-3">
            {journeySteps.map((step, index) => (
              <button
                key={step}
                onClick={() => setJourneyIndex(index)}
                className={`flex w-full items-center gap-4 rounded-3xl border p-4 text-left transition ${
                  index === journeyIndex
                    ? "border-cyan-300/50 bg-cyan-300/12"
                    : completedJourney.has(index)
                      ? "border-amber-300/25 bg-amber-300/8"
                      : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-black ${completedJourney.has(index) ? "bg-amber-300 text-[#07111f]" : "bg-white/10 text-slate-300"}`}>
                  {completedJourney.has(index) ? <Check className="h-4 w-4" /> : index + 1}
                </span>
                <span>
                  <span className="block font-black text-white">{step}</span>
                  <span className="mt-1 block text-sm text-slate-300/68">
                    {index === 0 && "Earn the first click from search/social traffic."}
                    {index === 1 && "Keep readers moving into a useful next topic."}
                    {index === 2 && "Capture high-intent gear research behavior."}
                    {index === 3 && "Convert topic interest into a durable audience relationship."}
                    {index === 4 && "Bring readers back with personalized content and commerce."}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-300/15 via-teal-300/10 to-amber-300/10 p-6 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-100/80">Recommendation</p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Ship a focused renewal, then evolve into a paddlesports audience platform.
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-200/78">
            For the initial three-month window, I would prioritize mobile performance, cleaner article/ad templates, guided discovery, SEO-safe migration, and measurement. Gear comparison can launch as a flagship module or phase-two accelerator depending on scope, but the underlying component strategy should support it from day one.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <FooterPill icon={ShieldCheck} title="Protect launch" text="Hard gates for scope, design signoff, redirects, and go-live readiness." />
            <FooterPill icon={LineChart} title="Measure outcomes" text="Tie every enhancement to Core Web Vitals, engagement, ad yield, or conversion." />
            <FooterPill icon={Layers3} title="Design for scale" text="Build reusable systems for article templates, hubs, gear modules, and sponsorships." />
          </div>
          <p className="mt-6 text-sm text-slate-300/52">
            Concept exercise by Jay Logan. Not affiliated with Rapid Media, Paddling Magazine, or Kayak Angler; brand/site names and links are used only as research references.
          </p>
          <div className="mt-8 flex justify-center border-t border-white/10 pt-8">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-6 py-3 text-sm font-bold text-cyan-100 transition hover:border-cyan-300/50 hover:bg-cyan-300/20 hover:text-white"
            >
              Prepared By Jay Logan
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

type RenewalMockProps = {
  selectedBoat: "hobie" | "oldtown";
  setSelectedBoat: (boat: "hobie" | "oldtown") => void;
  compact?: boolean;
};

const RenewalMock = ({ selectedBoat, setSelectedBoat, compact = false }: RenewalMockProps) => (
  <div className={`mx-auto w-full max-w-[390px] ${compact ? "scale-100" : "lg:mr-4"}`}>
    <div className="rounded-[2.6rem] border border-white/15 bg-[#020617] p-3 shadow-[0_30px_80px_rgba(0,0,0,.45)]">
      <div className="overflow-hidden rounded-[2rem] bg-[#f8fafc] text-[#0f172a]">
        <div className="flex items-center justify-between bg-[#0f766e] px-5 py-4 text-white">
          <ChevronLeft className="h-5 w-5" />
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">Kayak Angler</p>
            <p className="font-black">Gear Finder</p>
          </div>
          <Waves className="h-5 w-5" />
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-amber-50 p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-700/70">Buying guide</p>
          <h3 className="mt-2 text-2xl font-black leading-tight text-slate-950">Find the right fishing kayak</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">Compare tradeoffs, save a shortlist, and move toward an affiliate partner with confidence.</p>
        </div>

        <div className="space-y-3 p-5">
          {[
            { key: "oldtown" as const, name: "Old Town Sportsman", label: "Best all-around", price: "$1,499+", tone: "amber" },
            { key: "hobie" as const, name: "Hobie Pro Angler", label: "Best premium", price: "$3,999+", tone: "cyan" },
          ].map((boat) => {
            const active = selectedBoat === boat.key;
            return (
              <button
                key={boat.key}
                onClick={() => setSelectedBoat(boat.key)}
                className={`w-full rounded-3xl border p-4 text-left transition ${active ? "border-teal-600 bg-white shadow-xl" : "border-slate-200 bg-white/70"}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-teal-700/70">{boat.label}</p>
                    <h4 className="mt-1 text-lg font-black text-slate-950">{boat.name}</h4>
                    <p className="mt-1 text-sm text-slate-500">{boat.price} · pedal drive · stable platform</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-black ${active ? "bg-amber-300 text-slate-950" : "bg-slate-100 text-slate-500"}`}>
                    {active ? "Selected" : "Compare"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="border-t border-slate-200 bg-white px-5 py-4">
          <div className="mb-3 grid grid-cols-3 gap-2 text-center text-xs font-bold text-slate-600">
            <span className="rounded-2xl bg-teal-50 px-2 py-2">Stable</span>
            <span className="rounded-2xl bg-amber-50 px-2 py-2">Pedal</span>
            <span className="rounded-2xl bg-cyan-50 px-2 py-2">Affiliate</span>
          </div>
          <button className="w-full rounded-2xl bg-[#0f766e] px-4 py-3 font-black text-white">
            Compare selected kayaks
          </button>
        </div>
      </div>
    </div>
    <p className="mt-4 text-center text-xs leading-5 text-slate-300/45">Clickable HTML concept mock-up, not a screenshot.</p>
  </div>
);

const InsightCard = ({ label, text }: { label: string; text: string }) => (
  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
    <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-100/75">{label}</p>
    <p className="mt-2 text-sm leading-6 text-slate-300/72">{text}</p>
  </div>
);

const Metric = ({ icon: Icon, value, label }: { icon: LucideIcon; value: string; label: string }) => (
  <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-5">
    <Icon className="h-6 w-6 text-cyan-100" />
    <p className="mt-4 text-2xl font-black text-white">{value}</p>
    <p className="mt-1 text-sm text-slate-300/60">{label}</p>
  </div>
);

const FooterPill = ({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) => (
  <div className="rounded-3xl border border-white/10 bg-black/18 p-5">
    <Icon className="h-5 w-5 text-amber-100" />
    <h3 className="mt-4 font-black text-white">{title}</h3>
    <p className="mt-2 text-sm leading-6 text-slate-300/68">{text}</p>
  </div>
);

export default RapidMedia;

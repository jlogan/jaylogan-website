import { useMemo, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronLeft,
  Clock,
  DollarSign,
  ListChecks,
  MousePointerClick,
  Smartphone,
  Sparkles,
  Utensils,
} from "lucide-react";

const recipesReviewed = [
  {
    title: "Homemade Chicken Alfredo",
    meta: "4 servings · 40 min · recipe card includes cost per serving",
    href: "https://www.budgetbytes.com/chicken-alfredo/",
  },
  {
    title: "Creamy Tomato Pasta with Sausage",
    meta: "4 servings · 35 min · short instructions, long mobile page context",
    href: "https://www.budgetbytes.com/creamy-tomato-pasta/",
  },
  {
    title: "Easy Taco Soup",
    meta: "6 servings · 40 min · strong topping/customization opportunity",
    href: "https://www.budgetbytes.com/taco-soup/",
  },
];

const improvements = [
  {
    rank: "01",
    title: "Add a mobile-first Cook Mode",
    problem:
      "Recipe posts are helpful, but the actual cooking flow competes with long-form SEO content, ads, photos, comments, and page chrome on a phone.",
    solution:
      "Turn the recipe card into a focused mode: sticky Start Cooking CTA, large step cards, check-off progress, ingredients drawer, and cost/serving always nearby.",
    metric: "Primary: % of mobile sessions that start cook mode and reach step 3+.",
    icon: Utensils,
  },
  {
    rank: "02",
    title: "Make budget value interactive",
    problem:
      "Cost per serving is the brand differentiator, but it is mostly static once the recipe loads.",
    solution:
      "Expose serving presets and live cost updates near ingredients so users can answer, ‘Can I cook this for my household tonight?’ without mental math.",
    metric: "Primary: serving-scaler interaction rate; secondary: saves/prints.",
    icon: DollarSign,
  },
  {
    rank: "03",
    title: "Create a better second-recipe path",
    problem:
      "Search visitors often land on one recipe and leave after getting the answer.",
    solution:
      "Replace generic related content with ‘More dinners under $3/serving’ and ‘Use the rest of this ingredient’ modules tailored to the current recipe.",
    metric: "Primary: click-through to a second recipe; secondary: recipes/session and return visits.",
    icon: ArrowRight,
  },
];

const steps = [
  "Bring salted water to a boil and cook pasta until al dente.",
  "Season chicken, sear 5–6 minutes per side, then rest and slice.",
  "Melt butter, add garlic, and stir until fragrant — about 60 seconds.",
  "Whisk in cream and parmesan until the sauce turns glossy.",
  "Fold in pasta, loosen with reserved water, and top with chicken.",
];

const ingredients = ["8 oz pasta", "1 chicken breast", "2 Tbsp butter", "2 cloves garlic", "1 cup cream", "1/2 cup parmesan"];

const BudgetBytes = () => {
  const [variant, setVariant] = useState<"control" | "variant">("variant");
  const [activeStep, setActiveStep] = useState(1);
  const checkedSteps = useMemo(() => new Set(Array.from({ length: activeStep }, (_, index) => index)), [activeStep]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#1b1713] text-[#fff7ed]">
      <section className="relative border-b border-white/10 px-5 py-8 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(249,115,22,.18),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(132,204,22,.16),transparent_28%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 lg:min-h-[680px] lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-300/25 bg-orange-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-200">
              <Sparkles className="h-4 w-4" /> Phase 2 Product Owner Exercise
            </div>
            <h1 className="font-display text-4xl leading-tight text-white sm:text-6xl lg:text-7xl">
              Budget Bytes mobile engagement audit
            </h1>
            <p className="mt-6 text-lg leading-8 text-orange-50/78 sm:text-xl">
              A practical product case study: three engagement improvements for recipe readers, plus a mobile A/B-test concept for a focused cooking mode.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["Research lens", "Mobile recipe posts"],
                ["Goal", "Propensity to cook"],
                ["Mock-up", "Cook Mode variant"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.18em] text-orange-200/70">{label}</p>
                  <p className="mt-2 font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <PhoneMockup variant={variant} activeStep={activeStep} setActiveStep={setActiveStep} checkedSteps={checkedSteps} />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-lime-200">What I reviewed</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Strong content, but mobile cooking intent can be captured earlier.</h2>
          <p className="mt-5 leading-7 text-orange-50/70">
            I reviewed a sample of Budget Bytes recipe pages and focused on the moment where a reader shifts from browsing to deciding whether they will cook. The pages already have the core recipe utilities — jump links, print actions, servings, timing, and cost per serving — but the most valuable actions are buried inside a long-scroll experience.
          </p>
        </div>
        <div className="grid gap-4">
          {recipesReviewed.map((recipe) => (
            <a
              key={recipe.href}
              href={recipe.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-white/10 bg-[#241f19] p-5 transition hover:-translate-y-1 hover:border-orange-300/40 hover:bg-[#2b241c]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-100">{recipe.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-orange-50/62">{recipe.meta}</p>
                </div>
                <ArrowRight className="mt-1 h-5 w-5 text-orange-200 transition group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#120f0c] px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange-200">Top 3 improvements</p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">Prioritized by engagement lift and brand fit.</h2>
            </div>
            <div className="rounded-2xl border border-lime-300/20 bg-lime-300/10 px-4 py-3 text-sm text-lime-50/80">
              Engagement = time on page + meaningful interactions + confidence to cook.
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {improvements.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.rank} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-sm font-black tracking-[0.22em] text-orange-200/70">{item.rank}</span>
                    <span className="rounded-2xl bg-orange-300/12 p-3 text-orange-200"><Icon className="h-5 w-5" /></span>
                  </div>
                  <h3 className="text-2xl font-black text-white">{item.title}</h3>
                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-orange-200/80">Problem</p>
                  <p className="mt-2 leading-7 text-orange-50/68">{item.problem}</p>
                  <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-lime-200/80">Solution</p>
                  <p className="mt-2 leading-7 text-orange-50/68">{item.solution}</p>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm font-semibold text-white/88">
                    {item.metric}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_390px] lg:px-12">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-lime-300/10 px-4 py-2 text-sm font-bold text-lime-100">
            <Smartphone className="h-4 w-4" /> Mobile mock-up and A/B test
          </div>
          <h2 className="mt-5 text-3xl font-black text-white sm:text-5xl">Experiment: does Cook Mode turn readers into cooks?</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-orange-50/72">
            The strongest first experiment is a focused Cook Mode because it is close to the moment of value. It does not require a new account system, it gives users an immediate reason to interact, and it can be measured with clear event funnels.
          </p>

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-[#241f19] p-5 sm:p-6">
            <div className="mb-5 flex rounded-2xl bg-black/25 p-1 text-sm font-bold">
              <button
                className={`flex-1 rounded-xl px-4 py-3 transition ${variant === "control" ? "bg-white text-[#1b1713]" : "text-orange-50/70 hover:text-white"}`}
                onClick={() => setVariant("control")}
              >
                Control
              </button>
              <button
                className={`flex-1 rounded-xl px-4 py-3 transition ${variant === "variant" ? "bg-orange-300 text-[#1b1713]" : "text-orange-50/70 hover:text-white"}`}
                onClick={() => setVariant("variant")}
              >
                Variant
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <TestCard label="Hypothesis" text="A sticky Start Cooking CTA plus step-by-step mode increases meaningful cooking interactions from mobile recipe traffic." />
              <TestCard label="Primary metric" text="Cook-mode start rate and % of sessions reaching step 3+ within the same visit." />
              <TestCard label="Secondary metrics" text="Recipe saves, print taps, return visits, scroll completion, and second-recipe click-through." />
              <TestCard label="Guardrails" text="Ad RPM, page performance, bounce rate, and recipe-card print usage should not materially decline." />
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Metric icon={MousePointerClick} value="+18–25%" label="target lift in recipe interactions" />
            <Metric icon={Clock} value="2–4 weeks" label="test window on mobile traffic" />
            <Metric icon={BarChart3} value="Mobile SEO" label="audience segment for launch" />
          </div>
        </div>

        <div className="lg:sticky lg:top-6 lg:self-start">
          <PhoneMockup variant={variant} activeStep={activeStep} setActiveStep={setActiveStep} checkedSteps={checkedSteps} compact />
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-orange-300/15 to-lime-300/10 p-6 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-100/80">Recommendation</p>
          <h2 className="mt-3 text-3xl font-black text-white">Ship the Cook Mode experiment first.</h2>
          <p className="mt-4 max-w-3xl leading-8 text-orange-50/75">
            It is the best balance of user value, measurable behavior, and implementation scope. Serving/cost tools and budget-aware discovery are strong follow-ons, but Cook Mode directly targets the highest-intent moment: the reader standing in the kitchen deciding whether the recipe is easy enough to make now.
          </p>
          <p className="mt-6 text-sm text-orange-50/50">
            Concept exercise by Jay Logan. Not affiliated with Budget Bytes; Budget Bytes recipe titles and links are used only as research references.
          </p>
        </div>
      </section>
    </main>
  );
};

type PhoneMockupProps = {
  variant: "control" | "variant";
  activeStep: number;
  setActiveStep: (step: number) => void;
  checkedSteps: Set<number>;
  compact?: boolean;
};

const PhoneMockup = ({ variant, activeStep, setActiveStep, checkedSteps, compact = false }: PhoneMockupProps) => {
  return (
    <div className={`mx-auto w-full max-w-[380px] ${compact ? "scale-100" : "lg:mr-4"}`}>
      <div className="rounded-[2.6rem] border border-white/15 bg-[#0f0d0b] p-3 shadow-[0_30px_80px_rgba(0,0,0,.45)]">
        <div className="overflow-hidden rounded-[2rem] bg-[#fffaf2] text-[#271d14]">
          <div className="flex items-center justify-between bg-[#f97316] px-5 py-4 text-white">
            <ChevronLeft className="h-5 w-5" />
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">Budget Bytes</p>
              <p className="font-black">Chicken Alfredo</p>
            </div>
            <ListChecks className="h-5 w-5" />
          </div>

          {variant === "control" ? (
            <div className="h-[620px] overflow-hidden bg-[#fffaf2] p-5">
              <div className="mb-4 h-48 rounded-3xl bg-gradient-to-br from-orange-200 to-lime-100" />
              <div className="mb-3 h-4 w-1/2 rounded bg-[#d6c6b6]" />
              <div className="space-y-2">
                <div className="h-3 rounded bg-[#eadccb]" />
                <div className="h-3 rounded bg-[#eadccb]" />
                <div className="h-3 w-4/5 rounded bg-[#eadccb]" />
              </div>
              <button className="mt-5 w-full rounded-2xl border border-[#f97316] px-4 py-3 font-black text-[#f97316]">Jump to Recipe</button>
              <div className="mt-6 space-y-3">
                {Array.from({ length: 7 }).map((_, index) => (
                  <div key={index} className="rounded-2xl border border-[#eadccb] bg-white p-4">
                    <div className="mb-2 h-3 w-1/3 rounded bg-[#d6c6b6]" />
                    <div className="h-3 rounded bg-[#eadccb]" />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-[#fffaf2]">
              <div className="border-b border-[#eadccb] bg-white px-5 py-4">
                <div className="flex items-center justify-between text-sm font-bold text-[#7a604b]">
                  <span>Cook Mode</span>
                  <span>Step {activeStep + 1} of {steps.length}</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-[#f3e5d2]">
                  <div className="h-2 rounded-full bg-[#84cc16]" style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }} />
                </div>
              </div>

              <div className="space-y-3 p-5">
                {steps.map((step, index) => (
                  <button
                    key={step}
                    onClick={() => setActiveStep(index)}
                    className={`flex w-full items-start gap-3 rounded-3xl border p-4 text-left transition ${
                      index === activeStep
                        ? "border-[#f97316] bg-[#fff2df] shadow-lg"
                        : checkedSteps.has(index)
                          ? "border-[#c7e59a] bg-[#f5ffe7]"
                          : "border-[#eadccb] bg-white"
                    }`}
                  >
                    <span className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-black ${checkedSteps.has(index) ? "border-[#84cc16] bg-[#84cc16] text-white" : "border-[#d8c6b3] text-[#7a604b]"}`}>
                      {checkedSteps.has(index) ? <Check className="h-4 w-4" /> : index + 1}
                    </span>
                    <span>
                      <span className="block text-sm font-black text-[#3b2b1d]">{index === activeStep ? "Current step" : index < activeStep ? "Done" : "Upcoming"}</span>
                      <span className="mt-1 block text-[15px] leading-6 text-[#604936]">{step}</span>
                    </span>
                  </button>
                ))}
              </div>

              <div className="sticky bottom-0 border-t border-[#eadccb] bg-white/95 px-5 py-4 backdrop-blur">
                <div className="mb-3 flex items-center justify-between rounded-2xl bg-[#fff7ed] px-4 py-3 text-sm font-bold text-[#604936]">
                  <span>$2.72 / serving</span>
                  <span>4 servings</span>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {ingredients.map((ingredient) => (
                    <span key={ingredient} className="shrink-0 rounded-full bg-[#271d14] px-3 py-2 text-xs font-bold text-white">{ingredient}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="mt-4 text-center text-xs leading-5 text-orange-50/45">Clickable HTML concept mock-up, not a screenshot.</p>
    </div>
  );
};

const TestCard = ({ label, text }: { label: string; text: string }) => (
  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
    <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-200/75">{label}</p>
    <p className="mt-2 text-sm leading-6 text-orange-50/72">{text}</p>
  </div>
);

const Metric = ({ icon: Icon, value, label }: { icon: typeof MousePointerClick; value: string; label: string }) => (
  <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-5">
    <Icon className="h-6 w-6 text-orange-200" />
    <p className="mt-4 text-2xl font-black text-white">{value}</p>
    <p className="mt-1 text-sm text-orange-50/60">{label}</p>
  </div>
);

export default BudgetBytes;

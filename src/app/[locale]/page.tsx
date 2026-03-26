import Link from "next/link";
import { getDictionary } from "@/i18n/dictionaries";
import { locales, type Locale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function LanguageSwitcher({ current }: { current: Locale }) {
  return (
    <span className="hidden lg:flex items-center gap-1 text-xs font-medium text-secondary">
      {locales.map((l, i) => (
        <span key={l}>
          <Link
            href={`/${l}`}
            className={l === current ? "text-primary font-bold" : "hover:text-primary"}
          >
            {l.toUpperCase()}
          </Link>
          {i < locales.length - 1 && <span className="mx-0.5 opacity-40">|</span>}
        </span>
      ))}
    </span>
  );
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getDictionary(locale as Locale);

  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-[#e2e2e2]">
        <div className="flex justify-between items-center h-20 px-8 max-w-7xl mx-auto">
          <Link href={`/${locale}`} className="text-xl font-medium lowercase tracking-tight">
            fonea
          </Link>
          <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
            <a href="#features" className="text-secondary hover:text-primary transition-colors">{t.nav.solutions}</a>
            <a href="#security" className="text-secondary hover:text-primary transition-colors">{t.nav.security}</a>
            <a href="#pricing" className="text-secondary hover:text-primary transition-colors">{t.nav.pricing}</a>
          </div>
          <div className="flex items-center gap-6">
            <LanguageSwitcher current={locale as Locale} />
            <Link
              href={`/${locale}`}
              className="bg-primary text-white px-5 py-2.5 rounded text-sm font-medium hover:opacity-90 transition-all"
            >
              {t.nav.getStarted}
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-white py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
                {t.hero.title1} <br />
                <span className="text-accent whitespace-nowrap">{t.hero.title2}</span>
              </h1>
              <p className="text-xl text-secondary leading-relaxed mb-10 max-w-xl">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-accent text-white font-semibold rounded shadow-lg hover:shadow-xl transition-all active:scale-95">
                  {t.hero.cta}
                </button>
                <button className="px-8 py-4 border-2 border-muted text-primary font-semibold rounded hover:bg-surface transition-all active:scale-95 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>
                  {t.hero.ctaSecondary}
                </button>
              </div>
              {/* Trust Badges */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-70">
                {[t.hero.badge1, t.hero.badge2, t.hero.badge3, t.hero.badge4].map((badge) => (
                  <div key={badge} className="flex flex-col gap-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary/70">
                      {badge}
                    </span>
                    <div className="h-1 w-8 bg-muted" />
                  </div>
                ))}
              </div>
            </div>

            {/* AI Interface Visualization */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl" />
              <div className="relative bg-primary rounded-xl shadow-2xl p-8 border border-white/10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{t.hero.assistantName}</div>
                      <div className="text-[10px] text-white/50">{t.hero.assistantStatus}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                </div>
                {/* Waveform */}
                <div className="h-32 flex items-center justify-center gap-1 mb-8">
                  <div className="w-1 bg-accent h-12 rounded-full animate-pulse" />
                  <div className="w-1 bg-accent h-20 rounded-full" />
                  <div className="w-1 bg-accent h-16 rounded-full" style={{ animationDelay: "150ms" }} />
                  <div className="w-1 bg-accent h-24 rounded-full" />
                  <div className="w-1 bg-white/20 h-10 rounded-full" />
                  <div className="w-1 bg-white/20 h-14 rounded-full" />
                  <div className="w-1 bg-white/20 h-8 rounded-full" />
                </div>
                {/* Conversation */}
                <div className="space-y-4">
                  <div className="bg-white/5 p-5 rounded-lg">
                    <p className="text-xs text-white/50 mb-1.5 italic">{t.hero.callerLabel}</p>
                    <p className="text-base text-white font-medium leading-relaxed">&ldquo;{t.hero.callerText}&rdquo;</p>
                  </div>
                  <div className="bg-accent/20 p-5 rounded-lg border border-accent/30">
                    <p className="text-xs text-accent mb-1.5 italic">{t.hero.aiLabel}</p>
                    <p className="text-base text-white font-medium leading-relaxed">&ldquo;{t.hero.aiText}&rdquo;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section id="features" className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">{t.pain.title}</h2>
              <p className="text-secondary">{t.pain.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "M12 8v4l3 3", title: t.pain.item1title, desc: t.pain.item1desc },
                { icon: "M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9", title: t.pain.item2title, desc: t.pain.item2desc },
                { icon: "M12 2a8 8 0 0 0-8 8c0 3.4 2.1 6.3 5 7.5V20h6v-2.5c2.9-1.2 5-4.1 5-7.5a8 8 0 0 0-8-8z", title: t.pain.item3title, desc: t.pain.item3desc },
              ].map((item) => (
                <div key={item.title} className="bg-white p-8 rounded shadow-sm border border-muted/30">
                  <svg className="w-10 h-10 text-accent mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={item.icon} />
                  </svg>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="max-w-xl mb-16">
              <h2 className="text-4xl font-bold mb-4">{t.steps.title}</h2>
              <p className="text-secondary">{t.steps.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {[
                { num: "1", title: t.steps.step1title, desc: t.steps.step1desc },
                { num: "2", title: t.steps.step2title, desc: t.steps.step2desc },
                { num: "3", title: t.steps.step3title, desc: t.steps.step3desc },
              ].map((step) => (
                <div key={step.num} className="relative">
                  <div className="text-[120px] font-black text-surface-dim absolute -top-16 -left-4 z-0 opacity-50 select-none">
                    {step.num}
                  </div>
                  <div className="relative z-10 pt-8">
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-secondary leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Bento Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-center mb-16">{t.industries.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
              {/* Medical - large */}
              <div className="md:col-span-3 bg-primary p-10 rounded-xl flex flex-col justify-between text-white relative overflow-hidden min-h-[280px]">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">{t.industries.medical}</h3>
                  <p className="text-white/60 max-w-sm">{t.industries.medicalDesc}</p>
                </div>
                <svg className="absolute -bottom-4 -right-4 w-44 h-44 opacity-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM10 4h4v2h-4V4zm5 11h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2z"/></svg>
              </div>
              {/* Legal - large */}
              <div className="md:col-span-3 bg-surface-dim p-10 rounded-xl flex flex-col justify-between min-h-[280px]">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{t.industries.legal}</h3>
                  <p className="text-secondary max-w-sm">{t.industries.legalDesc}</p>
                </div>
                <div className="mt-8">
                  <span className="text-primary font-bold flex items-center gap-2">
                    {t.industries.learnMore}
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </div>
              {/* Trades - small */}
              <div className="md:col-span-2 bg-white border border-muted/30 p-8 rounded-xl">
                <svg className="w-8 h-8 text-accent mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                <h3 className="text-xl font-bold mb-2">{t.industries.trades}</h3>
                <p className="text-sm text-secondary">{t.industries.tradesDesc}</p>
              </div>
              {/* Real estate - wide */}
              <div className="md:col-span-4 bg-white border border-muted/30 p-8 rounded-xl flex items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{t.industries.realestate}</h3>
                  <p className="text-sm text-secondary">{t.industries.realestateDesc}</p>
                </div>
                <div className="w-32 h-32 rounded bg-surface shrink-0 hidden md:flex items-center justify-center">
                  <svg className="w-10 h-10 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security */}
        <section id="security" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-8">
                {t.security.title1} <span className="text-accent">{t.security.title2}</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{t.security.item1title}</h4>
                    <p className="text-sm text-secondary">{t.security.item1desc}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h.01"/><path d="M10 12h.01"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{t.security.item2title}</h4>
                    <p className="text-sm text-secondary">{t.security.item2desc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="bg-surface rounded-2xl p-4 shadow-inner">
                <div className="aspect-square bg-white rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden">
                  {/* Swiss cross placeholder */}
                  <div className="w-32 h-32 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-accent/10 rounded-2xl flex items-center justify-center">
                        <svg className="w-12 h-12 text-accent" viewBox="0 0 32 32" fill="currentColor">
                          <rect x="13" y="6" width="6" height="20" rx="1" />
                          <rect x="6" y="13" width="20" height="6" rx="1" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Ping indicator */}
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2">
                    <div className="w-4 h-4 bg-accent rounded-full animate-ping" />
                    <div className="w-4 h-4 bg-accent rounded-full absolute top-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section id="pricing" className="py-24 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">{t.pricing.title}</h2>
            <p className="text-white/50 mb-12 max-w-xl mx-auto">{t.pricing.subtitle}</p>
            <div className="inline-block p-1 bg-white/5 rounded-lg">
              <div className="bg-white text-primary px-10 py-12 rounded-lg shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold px-4 py-1 rotate-45 translate-x-4 translate-y-2 uppercase">
                  {t.pricing.popular}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
                  {t.pricing.planName}
                </span>
                <div className="flex items-baseline justify-center gap-1 mb-6">
                  <span className="text-2xl font-bold">{t.pricing.currency}</span>
                  <span className="text-6xl font-black">{t.pricing.price}</span>
                  <span className="text-secondary">{t.pricing.period}</span>
                </div>
                <ul className="text-left space-y-4 mb-10 max-w-xs mx-auto">
                  {[t.pricing.feature1, t.pricing.feature2, t.pricing.feature3, t.pricing.feature4].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <svg className="w-4 h-4 text-green-500 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 bg-primary text-white font-bold rounded hover:bg-primary/90 transition-all">
                  {t.pricing.cta}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-muted/30 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
          <div>
            <div className="text-lg font-bold mb-4">fonea</div>
            <p className="text-xs text-secondary leading-relaxed whitespace-pre-line">
              {t.footer.tagline}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted mb-4">{t.footer.product}</h4>
            <div className="flex flex-col space-y-2">
              <a href="#features" className="text-secondary text-xs hover:underline">{t.footer.solutions}</a>
              <a href="#pricing" className="text-secondary text-xs hover:underline">{t.footer.pricing}</a>
              <a href="#security" className="text-secondary text-xs hover:underline">{t.footer.security}</a>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted mb-4">{t.footer.legal}</h4>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-secondary text-xs hover:underline">{t.footer.legalDsg}</a>
              <a href="#" className="text-secondary text-xs hover:underline">{t.footer.privacy}</a>
              <a href="#" className="text-secondary text-xs hover:underline">{t.footer.imprint}</a>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted mb-4">{t.footer.contact}</h4>
            <div className="text-xs text-secondary space-y-2">
              <p>{t.footer.location}</p>
              <p>{t.footer.email}</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-12 pt-8 border-t border-muted/30 text-center">
          <p className="text-xs text-secondary">{t.footer.copyright}</p>
        </div>
      </footer>
    </>
  );
}

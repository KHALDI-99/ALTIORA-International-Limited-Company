import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Globe,
  Package,
  ShieldCheck,
  Truck,
  Layers3,
  Building2,
  Boxes,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

export default function AltioraImportSite() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  const services = [
    {
      icon: Globe,
      title: t.services.items[0].title,
      text: t.services.items[0].text,
    },
    {
      icon: Package,
      title: t.services.items[1].title,
      text: t.services.items[1].text,
    },
    {
      icon: Truck,
      title: t.services.items[2].title,
      text: t.services.items[2].text,
    },
  ];

  const trustPoints = t.trust.points;
  const categories = t.products.items;
  const steps = t.process.steps;

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.55 },
  };

  return (
    <div className="min-h-screen bg-[#f8f8f6] text-[#11254f]">
      <header className="sticky top-0 z-50 border-b border-[#d6c39a]/25 bg-[#f8f8f6]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <AltioraLogo className="h-10 w-10 shrink-0 sm:h-11 sm:w-11" />
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold tracking-[0.24em] text-[#11254f] sm:text-sm">
                ALTIORA
              </p>
              <p className="truncate text-[8px] uppercase tracking-[0.24em] text-[#b9862d] sm:text-[10px]">
                International Limited Company
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 xl:flex">
            <a
              href="#services"
              className="text-sm text-[#4a5d82] transition hover:text-[#11254f]"
            >
              {t.nav.services}
            </a>
            <a
              href="#categories"
              className="text-sm text-[#4a5d82] transition hover:text-[#11254f]"
            >
              {t.nav.products}
            </a>
            <a
              href="#examples"
              className="text-sm text-[#4a5d82] transition hover:text-[#11254f]"
            >
              {t.nav.examples}
            </a>
            <a
              href="#advantages"
              className="text-sm text-[#4a5d82] transition hover:text-[#11254f]"
            >
              {t.nav.why}
            </a>
            <a
              href="#process"
              className="text-sm text-[#4a5d82] transition hover:text-[#11254f]"
            >
              {t.nav.process}
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "fr" : "en")}
              className="rounded-full border border-[#d6c39a] bg-white px-3 py-2 text-[10px] font-semibold tracking-[0.18em] text-[#11254f] shadow-sm transition hover:border-[#b9862d] sm:px-4 sm:text-[11px]"
            >
              {lang === "en" ? "FR" : "EN"}
            </button>
            <a
              href="#contact"
              className="inline-flex rounded-full bg-[#11254f] px-4 py-2.5 text-xs font-medium text-white shadow-[0_12px_30px_rgba(17,37,79,0.16)] transition hover:-translate-y-0.5 sm:px-5 sm:py-3 sm:text-sm"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(185,134,45,0.12),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(17,37,79,0.09),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.55),rgba(248,248,246,1))]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
          <motion.div {...fadeUp} className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center rounded-full border border-[#d6c39a] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b9862d] shadow-sm">
              {t.hero.badge}
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-tight text-[#11254f] sm:text-5xl md:text-6xl">
              {t.hero.title}
              <span className="mt-2 block text-[#b9862d]">{t.hero.highlight}</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4a5d82]">
              {t.hero.text}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#60708f]">
              {t.hero.subtext}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group rounded-full bg-[#11254f] px-6 py-4 text-center text-sm font-medium text-white shadow-[0_14px_36px_rgba(17,37,79,0.18)] transition hover:-translate-y-0.5"
              >
                {t.hero.button}
                <ArrowRight className="ml-2 inline-block h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#process"
                className="rounded-full border border-[#d6c39a] bg-white px-6 py-4 text-center text-sm font-medium text-[#11254f] transition hover:border-[#b9862d] hover:text-[#b9862d]"
              >
                {t.hero.secondaryButton}
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {t.hero.stats.map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white bg-white/90 p-5 shadow-[0_10px_30px_rgba(17,37,79,0.06)] backdrop-blur-sm"
                >
                  <p className="text-xl font-semibold text-[#11254f]">{title}</p>
                  <p className="mt-1 text-sm text-[#60708f]">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.65 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#d6c39a]/30 blur-3xl" />
            <div className="absolute -bottom-10 left-0 h-44 w-44 rounded-full bg-[#11254f]/10 blur-3xl" />

            <div className="relative w-full max-w-xl rounded-[34px] border border-[#d6c39a]/35 bg-white/90 p-4 shadow-[0_30px_80px_rgba(17,37,79,0.14)] backdrop-blur-sm sm:p-6">
              <div className="rounded-[28px] bg-[linear-gradient(135deg,#0f234c_0%,#17366d_48%,#c9922e_100%)] p-6 text-white sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                      {t.hero.cardEyebrow}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
                      {t.hero.cardTitle}
                    </h2>
                  </div>
                  <AltioraLogo className="h-14 w-14 shrink-0" />
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {t.hero.cardItems.map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm"
                    >
                      <p className="text-sm font-medium text-white/70">{label}</p>
                      <p className="mt-2 text-base font-medium">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        {...fadeUp}
        id="services"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b9862d]">
            {t.services.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#11254f] md:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#4a5d82]">{t.services.text}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="rounded-[30px] border border-[#e8dcc0] bg-white p-8 shadow-[0_12px_35px_rgba(17,37,79,0.05)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7f1e3] text-[#b9862d]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-[#11254f]">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#60708f]">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <section id="categories" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <motion.div {...fadeUp}>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b9862d]">
                {t.products.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#11254f] md:text-4xl">
                {t.products.title}
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4a5d82]">
                {t.products.text}
              </p>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[#60708f]">
                {t.products.subtext}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {categories.map((category) => (
                  <div
                    key={category}
                    className="rounded-2xl border border-[#e8dcc0] bg-[#fcfbf8] px-5 py-4 text-sm font-medium text-[#243a67] shadow-sm"
                  >
                    {category}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="rounded-[32px] border border-[#e8dcc0] bg-[#11254f] p-8 text-white shadow-[0_24px_60px_rgba(17,37,79,0.18)]"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-[#d6c39a]" />
                <h3 className="text-2xl font-semibold">{t.products.sideTitle}</h3>
              </div>

              <div className="mt-8 space-y-5">
                {t.products.sidePoints.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-2 leading-7 text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="examples" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b9862d]">
              {t.examples.eyebrow}
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-[#11254f] md:text-4xl">
              {t.examples.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4a5d82]">
              {t.examples.text}
            </p>

            <div className="mt-8 rounded-[28px] border border-[#e8dcc0] bg-[linear-gradient(135deg,#0f234c_0%,#17366d_48%,#c9922e_100%)] p-7 text-white shadow-[0_20px_50px_rgba(17,37,79,0.14)]">
              <p className="text-sm uppercase tracking-[0.22em] text-white/70">Altiora</p>
              <p className="mt-3 text-2xl font-semibold leading-tight">
                {t.examples.cardTitle}
              </p>
              <p className="mt-3 text-sm leading-7 text-white/80">
                {t.examples.cardText}
              </p>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {t.examples.cards.map((card, index) => (
              <motion.div
                key={card.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-[28px] border border-[#e8dcc0] bg-white p-7 shadow-[0_14px_36px_rgba(17,37,79,0.06)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7f1e3] text-[#b9862d] font-semibold">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-semibold text-[#11254f]">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#60708f]">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="bg-[linear-gradient(180deg,#fff_0%,#f5f3ee_100%)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="rounded-[36px] border border-[#e8dcc0] bg-white p-8 shadow-[0_20px_60px_rgba(17,37,79,0.07)] lg:p-10"
          >
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b9862d]">
                  {t.trust.eyebrow}
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#11254f] md:text-4xl">
                  {t.trust.title}
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#4a5d82]">{t.trust.text}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {trustPoints.map((point, index) => {
                  const icons = [BadgeCheck, Building2, Layers3, Boxes, Sparkles, Globe];
                  const Icon = icons[index % icons.length];
                  return (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-[#e8dcc0] bg-[#fcfbf8] p-4 text-[#243a67]"
                    >
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#b9862d]" />
                      <span className="text-sm font-medium leading-6">{point}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        {...fadeUp}
        id="process"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b9862d]">
            {t.process.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#11254f] md:text-4xl">
            {t.process.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((item) => (
            <motion.div
              key={item.step}
              whileHover={{ y: -6 }}
              className="rounded-[30px] border border-[#e8dcc0] bg-white p-8 shadow-[0_12px_35px_rgba(17,37,79,0.05)]"
            >
              <p className="text-sm font-semibold tracking-[0.28em] text-[#b9862d]">
                {item.step}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-[#11254f]">{item.title}</h3>
              <p className="mt-4 leading-7 text-[#60708f]">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="bg-[#11254f] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <motion.div {...fadeUp}>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d6c39a]">
                {t.commitment.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                {t.commitment.title}
                <span className="block text-[#d6c39a]">{t.commitment.highlight}</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                {t.commitment.text}
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <div className="space-y-5 text-slate-100">
                {t.commitment.points.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 p-5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d6c39a]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b9862d]">
              {t.contact.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#11254f] md:text-4xl">
              {t.contact.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#4a5d82]">{t.contact.text}</p>

            <div className="mt-8 space-y-4 text-[#60708f]">
              <p>
                <span className="font-semibold text-[#11254f]">
                  {t.contact.labels.destinations}
                </span>{" "}
                {t.contact.values.destinations}
              </p>
              <p>
                <span className="font-semibold text-[#11254f]">
                  {t.contact.labels.clients}
                </span>{" "}
                {t.contact.values.clients}
              </p>
              <p>
                <span className="font-semibold text-[#11254f]">
                  {t.contact.labels.scope}
                </span>{" "}
                {t.contact.values.scope}
              </p>
            </div>

            <div className="mt-8 rounded-[28px] border border-[#e8dcc0] bg-[#fcfbf8] p-6 text-sm leading-7 text-[#60708f]">
              <p className="font-semibold text-[#11254f]">{t.contact.noticeTitle}</p>
              <p className="mt-2">{t.contact.noticeText}</p>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="rounded-[34px] border border-[#e8dcc0] bg-white p-8 shadow-[0_18px_50px_rgba(17,37,79,0.07)]"
          >
            <form className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  className="rounded-2xl border border-[#d8dfe9] px-4 py-4 text-[#11254f] outline-none transition focus:border-[#b9862d]"
                  placeholder={t.contact.form.name}
                />
                <input
                  className="rounded-2xl border border-[#d8dfe9] px-4 py-4 text-[#11254f] outline-none transition focus:border-[#b9862d]"
                  placeholder={t.contact.form.company}
                />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  className="rounded-2xl border border-[#d8dfe9] px-4 py-4 text-[#11254f] outline-none transition focus:border-[#b9862d]"
                  placeholder={t.contact.form.email}
                />
                <input
                  className="rounded-2xl border border-[#d8dfe9] px-4 py-4 text-[#11254f] outline-none transition focus:border-[#b9862d]"
                  placeholder={t.contact.form.country}
                />
              </div>
              <input
                className="rounded-2xl border border-[#d8dfe9] px-4 py-4 text-[#11254f] outline-none transition focus:border-[#b9862d]"
                placeholder={t.contact.form.product}
              />
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  className="rounded-2xl border border-[#d8dfe9] px-4 py-4 text-[#11254f] outline-none transition focus:border-[#b9862d]"
                  placeholder={t.contact.form.quantity}
                />
                <input
                  className="rounded-2xl border border-[#d8dfe9] px-4 py-4 text-[#11254f] outline-none transition focus:border-[#b9862d]"
                  placeholder={t.contact.form.budget}
                />
              </div>
              <textarea
                className="min-h-[160px] rounded-2xl border border-[#d8dfe9] px-4 py-4 text-[#11254f] outline-none transition focus:border-[#b9862d]"
                placeholder={t.contact.form.message}
              />
              <button className="rounded-full bg-[#11254f] px-6 py-4 text-sm font-medium text-white shadow-[0_14px_36px_rgba(17,37,79,0.16)] transition hover:-translate-y-0.5">
                {t.contact.form.send}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-[#e8dcc0] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 border-b border-[#e8dcc0] pb-10 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <div className="flex items-center gap-3">
                <AltioraLogo className="h-10 w-10" />
                <div>
                  <p className="font-semibold tracking-[0.18em] text-[#11254f]">ALTIORA</p>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#b9862d]">
                    International Limited Company
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#60708f]">
                {t.footer.description}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#11254f]">
                {t.footer.activities}
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-[#60708f]">
                {t.footer.activityItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#11254f]">
                {t.footer.regions}
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-[#60708f]">
                {t.footer.regionItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#11254f]">
                {t.footer.info}
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-[#60708f]">
                {t.footer.infoItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-transparent pt-6 text-sm text-[#60708f] md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Altiora International Limited Company.{" "}
              {t.footer.rights}
            </p>
            <p>{t.footer.bottomLine}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AltioraLogo({ className = "h-12 w-12" }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="altioraOcean" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#49b8ee" />
          <stop offset="45%" stopColor="#184d8e" />
          <stop offset="100%" stopColor="#091b4f" />
        </linearGradient>
        <linearGradient id="altioraGold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#f3d36b" />
          <stop offset="45%" stopColor="#d8a63d" />
          <stop offset="100%" stopColor="#9f6118" />
        </linearGradient>
        <linearGradient id="altioraRing" x1="0" x2="1" y1="0.2" y2="0.8">
          <stop offset="0%" stopColor="#9c5a16" />
          <stop offset="38%" stopColor="#f0cf67" />
          <stop offset="72%" stopColor="#f7f0d4" />
          <stop offset="100%" stopColor="#0f2f69" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="52" r="28" fill="url(#altioraOcean)" />
      <path
        d="M46 34c4 0 6 2 8 3-3 1-6 2-9 4-2 2-2 4-3 7-3-1-6-2-8-4 1-4 5-7 12-10Z"
        fill="url(#altioraGold)"
        opacity="0.95"
      />
      <path
        d="M72 42c5 1 9 3 11 7-2 2-5 4-8 5-1-3-3-5-6-7-2-1-5-2-8-3 3-2 6-3 11-2Z"
        fill="url(#altioraGold)"
        opacity="0.95"
      />
      <path
        d="M57 57c4 1 7 4 8 8-2 4-6 7-12 9-5-2-9-4-12-8 4-5 10-8 16-9Z"
        fill="url(#altioraGold)"
        opacity="0.92"
      />
      <ellipse
        cx="59"
        cy="54"
        rx="48"
        ry="14"
        transform="rotate(-18 59 54)"
        fill="none"
        stroke="url(#altioraRing)"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <ellipse
        cx="60"
        cy="58"
        rx="44"
        ry="11"
        transform="rotate(-18 60 58)"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3.2"
        opacity="0.95"
      />
      <g transform="translate(65 18)">
        <rect x="0" y="0" width="21" height="16" rx="2.5" fill="url(#altioraGold)" />
        <path d="M0 5.5h21" stroke="#fff3cf" strokeWidth="1.8" />
        <path d="M9 0v6" stroke="#fff3cf" strokeWidth="1.8" />
        <path d="M12 0v6" stroke="#fff3cf" strokeWidth="1.8" />
      </g>
      <path d="M90 17l2.3 4.7 4.7 2.3-4.7 2.3-2.3 4.7-2.3-4.7-4.7-2.3 4.7-2.3L90 17Z" fill="#f5cf62" />
    </svg>
  );
}

const translations = {
  en: {
    nav: { services: "Services", products: "Products", examples: "Examples", why: "Why Altiora", process: "Process" },
    cta: "Request sourcing",
    hero: {
      badge: "Importing from China",
      title: "Need a product?",
      highlight: "We source it in China, structure the order, and arrange delivery.",
      text: "Altiora International Limited Company supports businesses and individuals who want to buy from China without managing supplier search, sourcing coordination, and international shipping on their own.",
      subtext: "Thanks to our operational presence in China and our partner supplier network, we can respond to a very broad range of product needs, from retail to wholesale, with a clear, premium and solution-oriented approach.",
      button: "Request a sourcing study",
      secondaryButton: "See how it works",
      stats: [["On the ground", "Operational presence in China"], ["All client profiles", "Businesses and individuals"], ["International", "Europe, Africa, America"]],
      cardEyebrow: "Complete import solution",
      cardTitle: "A single point of contact for virtually any serious product request",
      cardItems: [["For whom?", "Businesses, resellers, individuals"], ["Volumes", "Single units, lots, wholesale"], ["Products", "Consumer, professional, specific"], ["Regions", "Europe, Africa, America"]],
    },
    services: {
      eyebrow: "What we provide",
      title: "A sourcing and import solution designed to build trust and convert faster",
      text: "Our role is to simplify access to products sourced in China by offering a clearer, more fluid and more reassuring commercial framework, from first request to shipment.",
      items: [
        { title: "International sourcing from China", text: "We identify, through our partner suppliers, product solutions aligned with your need, your volume and your destination market." },
        { title: "Retail or wholesale orders", text: "We support both individuals and businesses for single purchases, recurring orders and larger procurement volumes." },
        { title: "International delivery", text: "We arrange shipment to the requested address in Europe, Africa or America depending on the product type and logistics method selected." },
      ],
    },
    products: {
      eyebrow: "Products",
      title: "We handle a genuinely broad range of product requests",
      text: "Electronics, home, furniture, appliances, equipment, specialized items, retail purchases, wholesale orders or more specific sourcing requests: our positioning is to respond to virtually any serious and clearly formulated need.",
      subtext: "Some categories may naturally be subject to specific transport, customs or regulatory conditions depending on the destination country. In such cases, the request is structured according to practical feasibility.",
      items: ["Electronics & accessories", "Home, furniture & bedding", "Appliances", "Professional equipment", "On-demand products", "General or specialized goods", "Commercial lots, pallets & bulk volumes", "Vehicles and specific products subject to regulatory feasibility"],
      sideTitle: "A more credible and reassuring approach",
      sidePoints: [
        { title: "Partner supplier network", text: "We work with sourcing and supply partners to identify relevant options according to the request submitted." },
        { title: "Structured request management", text: "Each need is reviewed based on product type, volume, destination and possible logistics or regulatory constraints." },
        { title: "International execution", text: "We support requests intended for Europe, Africa and America with a solution-first and feasibility-based approach." },
      ],
    },
    examples: {
      eyebrow: "Examples of products sourced",
      title: "Concrete examples of requests we can handle",
      text: "From everyday consumer goods to more specific commercial requirements, we support a wide range of sourcing requests through our partner network in China.",
      cardTitle: "A premium sourcing model built for broad product demand.",
      cardText: "The objective is simple: help clients buy faster, with less friction, and with a clearer sourcing path from China.",
      cards: [
        { title: "Consumer electronics", text: "Phones, accessories, smart devices, audio products, lighting, small electronics and related items." },
        { title: "Home & furniture", text: "Beds, mattresses, tables, chairs, storage solutions, décor items and other home-related products." },
        { title: "Appliances & equipment", text: "Kitchen appliances, cleaning devices, home equipment and selected professional-use products." },
        { title: "Custom business orders", text: "Bulk lots, repeat orders, tailored sourcing requests and more specific product searches depending on feasibility." },
      ],
    },
    trust: {
      eyebrow: "Why Altiora",
      title: "You do not need to manage China. You need a reliable solution.",
      text: "Our value is not only to find a product. It is to save you time, improve the clarity of your purchase and provide a more structured path to buy internationally.",
      points: [
        "Operational presence in China",
        "Selected partner suppliers",
        "B2B and B2C approach",
        "Custom product search",
        "One-off and recurring request handling",
        "International logistics support",
      ],
    },
    process: {
      eyebrow: "Process",
      title: "A simple, professional and readable process",
      steps: [
        { step: "01", title: "You define your need", text: "Product, quantity, destination country, quality level and target budget." },
        { step: "02", title: "We activate our network", text: "From China, we consult our partners to identify the most coherent option in price, availability and shipping conditions." },
        { step: "03", title: "We structure the solution", text: "We organize the order, shipment terms and useful information before final validation." },
        { step: "04", title: "We arrange delivery", text: "Your order is shipped to the requested address according to the applicable conditions for the product and destination country." },
      ],
    },
    commitment: {
      eyebrow: "Our commitment",
      title: "You express the need.",
      highlight: "We structure a coherent sourcing solution.",
      text: "We intervene to source, coordinate and arrange delivery of products sourced in China with a commercial approach that is clearer, more premium and adapted to your request.",
      points: ["Product search based on your brief", "Ability to answer broad and diverse requests", "Retail, lot or wholesale ordering", "Delivery to your chosen address subject to logistics feasibility"],
    },
    contact: {
      eyebrow: "Contact",
      title: "Describe your need and we will study the most suitable solution",
      text: "Tell us the product you are looking for, the volume, the destination country and any useful information. We can then structure your request more precisely.",
      labels: { destinations: "Destinations:", clients: "Clients:", scope: "Scope:" },
      values: { destinations: "Europe, Africa, America", clients: "businesses, resellers, individuals", scope: "retail, lot, wholesale and specific product sourcing" },
      noticeTitle: "Important information",
      noticeText: "Some product categories, import flows and destination countries may require additional compliance, transport, customs or authorization checks. Every request is therefore assessed according to actual feasibility.",
      form: {
        name: "Full name",
        company: "Company (optional)",
        email: "Email",
        country: "Delivery country",
        product: "Requested product",
        quantity: "Desired quantity",
        budget: "Indicative budget (optional)",
        message: "Describe your need: product type, quality level, volume, destination, target timeline, useful details...",
        send: "Send my request",
      },
    },
    footer: {
      description: "Company focused on sourcing, procurement and purchase coordination from China for business and private clients internationally.",
      activities: "Activities",
      activityItems: ["Product sourcing", "Procurement via partners", "Retail, lot and wholesale purchasing", "International delivery"],
      regions: "Regions served",
      regionItems: ["Europe", "Africa", "America", "Case-by-case review depending on destination"],
      info: "Corporate information",
      infoItems: ["Professional sourcing approach", "Partner supplier network", "International coverage", "Commercial contact"],
      rights: "All rights reserved.",
      bottomLine: "Importing from China • Sourcing • Procurement • International delivery",
    },
  },
  fr: {
    nav: { services: "Services", products: "Produits", examples: "Exemples", why: "Pourquoi Altiora", process: "Process" },
    cta: "Demander un sourcing",
    hero: {
      badge: "Importation depuis la Chine",
      title: "Vous avez besoin d’un produit ?",
      highlight: "Nous le recherchons en Chine, nous structurons l’achat, nous organisons la livraison.",
      text: "Altiora International Limited Company accompagne les entreprises et les particuliers qui souhaitent acheter depuis la Chine sans devoir gérer seuls la recherche fournisseur, la coordination commerciale et l’acheminement international.",
      subtext: "Grâce à notre présence opérationnelle en Chine et à notre réseau de fournisseurs partenaires, nous pouvons répondre à une très large variété de besoins produits, en détail comme en gros, avec une approche claire, premium et orientée solution.",
      button: "Recevoir une étude de besoin",
      secondaryButton: "Voir le fonctionnement",
      stats: [["Sur place", "Présence opérationnelle en Chine"], ["Tous profils", "Entreprises et particuliers"], ["International", "Europe, Afrique, Amérique"]],
      cardEyebrow: "Solution import complète",
      cardTitle: "Un interlocuteur unique pour pratiquement tout type de demande produit sérieuse",
      cardItems: [["Pour qui ?", "Entreprises, revendeurs, particuliers"], ["Volumes", "À l’unité, en lot, en gros"], ["Produits", "Grand public, professionnels, spécifiques"], ["Zones", "Europe, Afrique, Amérique"]],
    },
    services: {
      eyebrow: "Ce que nous apportons",
      title: "Une solution de sourcing et d’import pensée pour inspirer confiance et convertir plus vite",
      text: "Notre rôle est de simplifier l’accès aux produits sourcés en Chine en vous proposant un cadre commercial plus lisible, plus fluide et plus rassurant, du premier échange jusqu’à l’expédition.",
      items: [
        { title: "Sourcing international depuis la Chine", text: "Nous identifions, via nos fournisseurs partenaires, les solutions produits les plus adaptées à votre besoin, à votre volume et à votre marché de destination." },
        { title: "Commande en détail ou en gros", text: "Nous accompagnons aussi bien les particuliers que les entreprises, pour des achats unitaires, des commandes récurrentes ou des volumes plus importants." },
        { title: "Livraison à l’international", text: "Nous organisons l’acheminement jusqu’à l’adresse indiquée en Europe, en Afrique ou en Amérique, selon la nature du produit et le mode logistique retenu." },
      ],
    },
    products: {
      eyebrow: "Produits",
      title: "Nous traitons réellement une très grande diversité de demandes produits",
      text: "Électronique, maison, mobilier, électroménager, équipements, produits spécialisés, achats en détail, commandes en gros ou recherches plus spécifiques : notre positionnement est de pouvoir répondre à pratiquement tout besoin sérieux et formulé clairement.",
      subtext: "Certaines catégories peuvent naturellement être soumises à des conditions particulières de transport, de douane ou de réglementation selon le pays de destination. Dans ce cas, la demande est structurée en fonction de la faisabilité applicable.",
      items: ["Électronique et accessoires", "Maison, mobilier et literie", "Électroménager", "Équipements professionnels", "Produits sur demande", "Marchandises grand public ou spécialisées", "Lots, palettes et volumes commerciaux", "Véhicules et produits spécifiques selon faisabilité réglementaire"],
      sideTitle: "Une approche plus crédible et plus rassurante",
      sidePoints: [
        { title: "Réseau de fournisseurs partenaires", text: "Nous travaillons avec des partenaires de sourcing et d’approvisionnement pour identifier des solutions pertinentes selon la demande formulée." },
        { title: "Gestion structurée des demandes", text: "Chaque besoin est étudié selon le type de produit, le volume, la destination et les contraintes logistiques ou réglementaires éventuelles." },
        { title: "Intervention internationale", text: "Nous accompagnons des demandes destinées à l’Europe, à l’Afrique et à l’Amérique, avec une logique orientée solution et faisabilité." },
      ],
    },
    examples: {
      eyebrow: "Exemples de produits sourcés",
      title: "Des exemples concrets de demandes que nous pouvons traiter",
      text: "Des produits du quotidien aux besoins commerciaux plus spécifiques, nous pouvons accompagner une large variété de demandes grâce à notre réseau de partenaires en Chine.",
      cardTitle: "Un modèle de sourcing premium conçu pour des besoins produits très larges.",
      cardText: "L’objectif est simple : aider les clients à acheter plus vite, avec moins de friction et avec un parcours plus clair depuis la Chine.",
      cards: [
        { title: "Électronique grand public", text: "Téléphones, accessoires, objets connectés, audio, éclairage, petits appareils électroniques et produits associés." },
        { title: "Maison & mobilier", text: "Lits, matelas, tables, chaises, rangements, décoration et autres produits liés à l’aménagement intérieur." },
        { title: "Électroménager & équipements", text: "Appareils de cuisine, matériel d’entretien, équipements domestiques et certains produits à usage professionnel." },
        { title: "Commandes business sur mesure", text: "Lots, commandes récurrentes, besoins spécifiques et recherches produits plus ciblées selon la faisabilité." },
      ],
    },
    trust: {
      eyebrow: "Pourquoi Altiora",
      title: "Vous n’avez pas besoin de gérer la Chine. Vous avez besoin d’une solution fiable.",
      text: "Notre valeur n’est pas seulement de trouver un produit. Elle est de vous faire gagner du temps, d’améliorer la lisibilité de votre achat et de vous offrir un cadre plus structuré pour acheter à l’international.",
      points: [
        "Présence opérationnelle en Chine",
        "Fournisseurs partenaires sélectionnés",
        "Approche B2B et B2C",
        "Recherche produit sur mesure",
        "Traitement de demandes ponctuelles ou régulières",
        "Accompagnement logistique international",
      ],
    },
    process: {
      eyebrow: "Process",
      title: "Un parcours simple, professionnel et lisible",
      steps: [
        { step: "01", title: "Vous exprimez votre besoin", text: "Produit recherché, quantité, pays de destination, niveau de gamme et budget cible." },
        { step: "02", title: "Nous consultons notre réseau", text: "Depuis la Chine, nous activons nos partenaires pour trouver l’offre la plus cohérente en prix, disponibilité et conditions d’expédition." },
        { step: "03", title: "Nous structurons la solution", text: "Nous organisons la commande, les modalités de livraison et les informations utiles avant validation finale." },
        { step: "04", title: "Nous faisons livrer", text: "Votre commande est acheminée vers l’adresse souhaitée selon les conditions applicables au produit et au pays de destination." },
      ],
    },
    commitment: {
      eyebrow: "Notre engagement",
      title: "Vous formulez le besoin.",
      highlight: "Nous structurons une réponse d’approvisionnement cohérente.",
      text: "Nous intervenons pour rechercher, coordonner et faire acheminer des produits sourcés en Chine avec une approche commerciale plus claire, plus premium et adaptée à votre demande.",
      points: ["Recherche produit selon votre cahier des charges", "Capacité à répondre à des besoins larges et variés", "Commande en détail, en lot ou en gros", "Livraison vers l’adresse souhaitée selon faisabilité logistique"],
    },
    contact: {
      eyebrow: "Contact",
      title: "Décrivez votre besoin et nous étudierons la solution la plus adaptée",
      text: "Indiquez-nous le produit recherché, le volume, le pays de destination et toute information utile. Nous pourrons ensuite cadrer votre demande de manière plus précise.",
      labels: { destinations: "Destinations :", clients: "Clients :", scope: "Périmètre :" },
      values: { destinations: "Europe, Afrique, Amérique", clients: "entreprises, revendeurs, particuliers", scope: "achats en détail, en lot, en gros et recherches produits spécifiques" },
      noticeTitle: "Information importante",
      noticeText: "Certaines catégories de produits, certains flux d’importation et certains pays peuvent nécessiter des vérifications complémentaires en matière de conformité, de transport, de douane ou d’autorisation. Toute demande est donc étudiée selon sa faisabilité réelle.",
      form: {
        name: "Nom complet",
        company: "Entreprise (optionnel)",
        email: "Email",
        country: "Pays de livraison",
        product: "Produit recherché",
        quantity: "Quantité souhaitée",
        budget: "Budget indicatif (optionnel)",
        message: "Décrivez votre besoin : type de produit, niveau de qualité, volume, destination, délai visé, informations utiles...",
        send: "Envoyer ma demande",
      },
    },
    footer: {
      description: "Société orientée sourcing, approvisionnement et coordination d’achats depuis la Chine, pour des clients professionnels et particuliers à l’international.",
      activities: "Activités",
      activityItems: ["Sourcing produits", "Approvisionnement via partenaires", "Achats en détail, lot ou gros", "Livraison internationale"],
      regions: "Zones desservies",
      regionItems: ["Europe", "Afrique", "Amérique", "Étude au cas par cas selon la destination"],
      info: "Informations corporate",
      infoItems: ["Approche de sourcing professionnelle", "Réseau de fournisseurs partenaires", "Couverture internationale", "Contact commercial"],
      rights: "Tous droits réservés.",
      bottomLine: "Importation depuis la Chine • Sourcing • Approvisionnement • Livraison internationale",
    },
  },
};

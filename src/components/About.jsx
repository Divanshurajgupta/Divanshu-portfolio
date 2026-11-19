import Reveal from './Reveal'
import { about, skills, projects, awards } from '../data/content'

const headingClass =
  'text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-4'

export default function About() {
  const allTools = [...skills.programming, ...skills.automation, ...skills.api]

  const stats = [
    { value: `${parseInt(about.experience, 10)}+`, label: 'Years in QA' },
    { value: `${projects.length}+`, label: 'Products tested' },
    { value: `${skills.domains.length}`, label: 'Industry domains' },
    { value: `${awards.length + 1}`, label: 'Awards won' },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text)] mb-8">
          About &amp; Skills
        </h2>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 80}
            className="lift rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5 text-center"
          >
            <div className="text-3xl font-bold text-[var(--color-accent)]">{s.value}</div>
            <div className="mt-1 text-sm text-[var(--color-text-muted)]">{s.label}</div>
          </Reveal>
        ))}
      </div>

      <Reveal className="space-y-10" delay={100}>
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">Objective</h3>
          <p className="text-[var(--color-text-muted)] leading-relaxed">{about.objective}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">Summary</h3>
          <ul className="space-y-3 text-[var(--color-text-muted)] leading-relaxed">
            {about.summary.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <Reveal>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
            I use JavaScript and Python for automation, with Playwright and Cypress for UI tests,
            and Postman and Swagger for API validation. I pair this with AI tools to design test
            cases faster, generate realistic test data, and test AI-powered features themselves.
            I write clear assertions and keep tests easy to extend and debug.
          </p>
          <h3 className={headingClass}>Testing practices</h3>
          <ul className="flex flex-wrap gap-2">
            {skills.practices.map((p) => (
              <li
                key={p}
                className="px-3 py-1.5 rounded-lg border border-[var(--color-border)] text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                {p}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <h3 className={headingClass}>Tech stack</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {allTools.map(({ name }) => (
              <span
                key={name}
                className="px-3 py-1.5 rounded-lg bg-[var(--color-accent-soft)]/50 text-[var(--color-text)] font-mono text-sm transition-transform hover:-translate-y-0.5 hover:scale-105"
              >
                {name}
              </span>
            ))}
          </div>

          <h3 className={`${headingClass} flex items-center gap-2`}>
            <span aria-hidden>✦</span> AI in QA
          </h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.ai.map(({ name }) => (
              <span
                key={name}
                className="px-3 py-1.5 rounded-lg border border-[var(--color-accent)]/40 bg-gradient-to-r from-[var(--color-accent-soft)]/60 to-transparent text-[var(--color-text)] text-sm transition-transform hover:-translate-y-0.5 hover:scale-105"
              >
                {name}
              </span>
            ))}
          </div>

          <h3 className={headingClass}>Domains</h3>
          <ul className="flex flex-wrap gap-2">
            {skills.domains.map((d) => (
              <li
                key={d}
                className="px-3 py-1.5 rounded-lg border border-[var(--color-border)] text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                {d}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

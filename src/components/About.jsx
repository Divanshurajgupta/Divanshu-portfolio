import { about, skills } from '../data/content'

export default function About() {
  const allTools = [
    ...skills.programming,
    ...skills.automation,
    ...skills.api,
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text)] mb-8">
        About &amp; Skills
      </h2>
      <div className="space-y-10">
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">
            Objective
          </h3>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            {about.objective}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">
            Summary
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[var(--color-text-muted)] leading-relaxed">
            {about.summary.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            I use JavaScript and Python for automation, with Playwright and Cypress for UI tests,
            and Postman and Swagger for API validation. I write clear assertions and keep
            tests easy to extend and debug.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-4">
            Tech stack
          </h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {allTools.map(({ name }) => (
              <span
                key={name}
                className="px-3 py-1.5 rounded-lg bg-[var(--color-accent-soft)]/50 text-[var(--color-text)] font-mono text-sm"
              >
                {name}
              </span>
            ))}
          </div>
          <h3 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-4">
            Domains
          </h3>
          <ul className="flex flex-wrap gap-2">
            {skills.domains.map((d) => (
              <li
                key={d}
                className="px-3 py-1.5 rounded-lg border border-[var(--color-border)] text-sm text-[var(--color-text)]"
              >
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

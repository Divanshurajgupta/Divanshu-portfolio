import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text)] mb-4">
        Projects
      </h2>
      <p className="text-[var(--color-text-muted)] mb-10 max-w-2xl">
        Selection of products I have worked on across blockchain, gaming, healthcare, SaaS, and NFT.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 hover:border-[var(--color-accent)]/40 transition-colors"
          >
            <span className="text-xs font-mono text-[var(--color-accent)] uppercase tracking-wider">
              {project.domain}
            </span>
            <h3 className="text-xl font-semibold text-[var(--color-text)] mt-2 mb-2">
              {project.name}
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded bg-[var(--color-surface)] border border-[var(--color-border)] font-mono text-xs text-[var(--color-text-muted)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

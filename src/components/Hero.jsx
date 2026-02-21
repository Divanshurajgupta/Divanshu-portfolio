import { about } from '../data/content'

export default function Hero() {
  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 pt-24 pb-16 max-w-5xl mx-auto">
      <p className="text-sm font-mono text-[var(--color-accent)] uppercase tracking-wider mb-4">
        {about.experience} in QA Automation
      </p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-text)] leading-tight mb-2">
        {about.name}
      </h1>
      <p className="text-xl sm:text-2xl text-[var(--color-text-muted)] mb-4">
        {about.title}
      </p>
      {about.openForFreelance && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--color-accent-soft)] text-[var(--color-accent)] border border-[var(--color-accent)]/30 mb-6 w-fit">
          Open for Freelance
        </span>
      )}
      <p className="text-lg sm:text-xl text-[var(--color-text-muted)] max-w-2xl leading-relaxed mb-6">
        {about.tagline}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-white font-medium hover:opacity-90 transition-opacity"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] text-[var(--color-text)] font-medium hover:bg-[var(--color-accent-soft)]/20 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}

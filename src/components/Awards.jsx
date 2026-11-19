import Reveal from './Reveal'
import { awards } from '../data/content'

export default function Awards() {
  return (
    <section id="awards" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      <Reveal>
      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text)] mb-4">
        Awards &amp; Recognition
      </h2>
      <p className="text-[var(--color-text-muted)] mb-10 max-w-2xl">
        Recognition at Crownstack for impact, learning, and contributions.
      </p>
      </Reveal>
      <div className="space-y-6">
        {awards.map((award, i) => (
          <Reveal
            key={award.name}
            delay={i * 120}
            className="lift rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6"
          >
            <div className="flex flex-wrap items-baseline gap-2 mb-2">
              <h3 className="text-lg font-semibold text-[var(--color-text)]">
                {award.name}
              </h3>
              <span className="text-sm text-[var(--color-accent)]">
                {award.org}
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              {award.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

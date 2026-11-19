import { useState } from 'react'
import { about } from '../data/content'

const initials = about.name
  .split(' ')
  .map((w) => w[0])
  .join('')
  .slice(0, 2)
  .toUpperCase()

function ProfilePhoto() {
  const [failed, setFailed] = useState(!about.photo)

  return (
    <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 shrink-0">
      {/* Spinning gradient ring */}
      <div
        className="absolute -inset-2 rounded-full animate-spin-slow opacity-80"
        style={{
          background:
            'conic-gradient(from 0deg, var(--color-accent), transparent 40%, var(--color-accent) 70%, transparent)',
        }}
      />
      <div className="absolute inset-0 rounded-full bg-[var(--color-surface)]" />
      <div className="absolute inset-2 rounded-full overflow-hidden bg-[var(--color-accent-soft)] flex items-center justify-center">
        {failed ? (
          <span className="text-6xl font-bold text-[var(--color-accent)] select-none">{initials}</span>
        ) : (
          <img
            src={about.photo}
            alt={about.name}
            onError={() => setFailed(true)}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        )}
      </div>
      {/* Status badge */}
      {about.openForFreelance && (
        <div className="absolute bottom-3 -right-2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-surface-elevated)] border border-[var(--color-border)] shadow-lg text-xs font-medium text-[var(--color-text)]">
          <span className="relative flex w-2.5 h-2.5">
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping-soft" />
            <span className="relative w-2.5 h-2.5 rounded-full bg-green-500" />
          </span>
          Available
        </div>
      )}
    </div>
  )
}

export default function Hero() {
  const step = (i) => ({ animationDelay: `${i * 120}ms` })

  return (
    <section id="hero" className="relative isolate overflow-hidden">
      {/* Animated background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-[var(--color-accent)]/20 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-[var(--color-accent)]/10 blur-3xl animate-float-slow" />
      </div>

      <div className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-12 px-4 sm:px-6 pt-24 pb-16 max-w-5xl mx-auto">
        <div className="flex-1">
          <p className="animate-fade-up text-sm font-mono text-[var(--color-accent)] uppercase tracking-wider mb-4 caret" style={step(0)}>
            {about.experience} in QA Automation
          </p>
          <h1 className="animate-fade-up text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-text)] leading-tight mb-2" style={step(1)}>
            {about.name}
          </h1>
          <p className="animate-fade-up text-xl sm:text-2xl text-[var(--color-text-muted)] mb-4" style={step(2)}>
            {about.title}
          </p>
          {about.openForFreelance && (
            <span
              className="animate-fade-up inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--color-accent-soft)] text-[var(--color-accent)] border border-[var(--color-accent)]/30 mb-6 w-fit"
              style={step(3)}
            >
              Open for Freelance
            </span>
          )}
          <p className="animate-fade-up text-lg sm:text-xl text-[var(--color-text-muted)] max-w-2xl leading-relaxed mb-6" style={step(4)}>
            {about.tagline}
          </p>
          <div className="animate-fade-up mt-6 flex flex-wrap gap-3" style={step(5)}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-white font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all"
            >
              View projects
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] text-[var(--color-text)] font-medium hover:bg-[var(--color-accent-soft)]/20 hover:-translate-y-0.5 transition-all"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="animate-fade-up" style={step(2)}>
          <ProfilePhoto />
        </div>
      </div>
    </section>
  )
}

import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import HowITest from './components/HowITest'
import Awards from './components/Awards'
import Contact from './components/Contact'

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <HowITest />
        <Awards />
        <Contact />
      </main>
      <footer className="border-t border-[var(--color-border)] py-8 px-4 sm:px-6 max-w-5xl mx-auto text-center text-sm text-[var(--color-text-muted)]">
        QA Automation Engineer Portfolio — Built with React, Vite & Tailwind
      </footer>
    </ThemeProvider>
  )
}

export default App

import Reveal from './Reveal'
export default function HowITest() {
  const snippet = `// Page Object - locators and actions in one place
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.getByRole('textbox', { name: /email/i });
    this.password = page.getByLabel(/password/i);
    this.submit = page.getByRole('button', { name: /sign in/i });
  }

  async login(credentials) {
    await this.email.fill(credentials.email);
    await this.password.fill(credentials.password);
    await this.submit.click();
  }
}

// Test - data-driven, clear assertions
test('user can log in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(testData.validUser);
  await expect(page.getByRole('heading', { name: /dashboard/i })).toBeVisible();
});`

  return (
    <section id="how-i-test" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      <Reveal>
      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text)] mb-4">
        How I Test
      </h2>
      <p className="text-[var(--color-text-muted)] mb-6 max-w-2xl">
        I follow the Page Object Model, reuse page objects, and avoid hardcoded data.
        Tests are readable, maintainable, and use clear assertions (e.g. Playwright/Cypress).
      </p>
      </Reveal>
      <Reveal delay={150} className="lift rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] overflow-hidden">
        <div className="px-4 py-2 border-b border-[var(--color-border)] flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-400/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <span className="w-3 h-3 rounded-full bg-green-400/80" />
          <span className="text-sm font-mono text-[var(--color-text-muted)]">
            Playwright + Page Object (JavaScript)
          </span>
        </div>
        <pre className="p-4 sm:p-6 overflow-x-auto text-sm font-mono text-[var(--color-text)] leading-relaxed">
          <code>{snippet}</code>
        </pre>
      </Reveal>
    </section>
  )
}

export class LoginPage {
  constructor(page) {
    this.page = page;

    // Always present
    this.emailInput = page.locator('input[type="email"]');
    this.passwordInput = page.locator('input[type="password"]');

    // Visible only if we are in Sign Up mode
    this.nameInput = page.locator('input[placeholder="Full Name"]');

    // The sign-in / sign-up button (its text changes dynamically)
    this.submitButton = page.locator('button[type="submit"]');

    this.signUpLink = page
      .getByRole("link", { name: /sign up now!/i })
      .or(page.getByText("Sign up now!"));
  }

  async goto() {
    await this.page.goto("http://localhost:3000"); // update if needed
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

//   async signup(name, email, password) {
//     await this.nameInput.fill(name);
//     await this.emailInput.fill(email);
//     await this.passwordInput.fill(password);
//     await this.submitButton.click();
//   }
}

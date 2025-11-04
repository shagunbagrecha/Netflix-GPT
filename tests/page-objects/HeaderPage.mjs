export class HeaderPage {
  constructor(page) {
    this.page = page;
    this.signOutButton = page.getByText('Sign Out'); // Simple + stable
  }

  async logout() {
    await this.signOutButton.click();
  }
}

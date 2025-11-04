export class BrowsePage {
  constructor(page) {
    this.page = page;
    this.nowPlayingSection = page.getByText("Now Playing");
    this.popularSection = page.getByText("Popular");
  }

  async isLoaded() {
    // Wait for the first visible section title to confirm the page loaded
    await this.nowPlayingSection.waitFor({ timeout: 8000 });
  }
}

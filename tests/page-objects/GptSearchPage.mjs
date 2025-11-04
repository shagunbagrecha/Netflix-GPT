export class GPTSearchPage {
  constructor(page) {
    this.page = page;
    this.toggleButton = page.getByRole('button', { name: /gpt search/i });
    this.input = page.getByRole('textbox');
    this.searchButton = page.getByRole('button', { name: /search/i });
  }

  async open() {
    await this.toggleButton.click();
  }

  async search(query) {
    await this.input.fill(query);
    await this.searchButton.click();
  }
}
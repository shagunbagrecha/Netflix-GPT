/* eslint-disable testing-library/prefer-screen-queries */
import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage.mjs';
import { BrowsePage } from '../page-objects/BrowsePage.mjs';
import { GPTSearchPage } from '../page-objects/GptSearchPage.mjs';

test('User can search using GPT search', async ({ page }) => {
  const login = new LoginPage(page);
  const browse = new BrowsePage(page);
  const gpt = new GPTSearchPage(page);

  await login.goto();
  await login.login('test@test.com', 'testtest123');
  await browse.isLoaded();

  await gpt.open();
  await gpt.search('romantic comedy');

  // ✅ Assert GPT search mode is active (reliable!)
  await expect(gpt.input).toBeVisible();
  await expect(gpt.searchButton).toBeVisible();
});


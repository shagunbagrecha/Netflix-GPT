import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage.mjs';
import { BrowsePage } from '../page-objects/BrowsePage.mjs';

test('User can sign in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const browsePage = new BrowsePage(page);

  // Open the login page
  await loginPage.goto();

  // Perform login
  await loginPage.login('test@test.com', 'testtest123');

  // Verify the browse page is loaded
  await browsePage.isLoaded();
  expect(await browsePage.nowPlayingSection.isVisible()).toBe(true);
});

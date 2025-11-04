/* eslint-disable testing-library/prefer-screen-queries */
import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage.mjs';
import { BrowsePage } from '../page-objects/BrowsePage.mjs';
import { HeaderPage } from '../page-objects/HeaderPage.mjs';

test('User can log out successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const browsePage = new BrowsePage(page);
  const header = new HeaderPage(page);

  await loginPage.goto();
  await loginPage.login('test@test.com', 'testtest123');
  await browsePage.isLoaded();

  await header.logout();

  // Assert we are back on the login screen
  await expect(page.getByRole('heading', { name: 'Sign In' })).toBeVisible();
});

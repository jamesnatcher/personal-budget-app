import { expect, test } from '@playwright/test';

test('index page has expected greetings and link to authenticate user', async ({ page }) => {
	await page.goto('/');
	const element = await page.getByText('Welcome to my app!');
	await expect(element !== undefined).toBeTruthy();
	await expect(page.getByRole('link', { name: 'Get Started' }).first()).toBeVisible();
});

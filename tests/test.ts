import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	const element = await page.getByText('Welcome to SvelteKit');
	await expect(element !== undefined).toBeTruthy();
	await expect(page.getByRole('heading', { name: 'Welcome to SvelteKit' }).first()).toBeVisible();
});

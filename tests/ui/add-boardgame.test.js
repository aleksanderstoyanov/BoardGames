import url from '../../common'

const { test, expect } = require('@playwright/test');

test('Check add boardgame page', async ({ page }) => {
    await page.goto(`${url}/add-boardgame`);
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  
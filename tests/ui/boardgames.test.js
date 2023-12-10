import url from '../../common';

const { test, expect } = require('@playwright/test');

test('Check boardgames page', async ({ page }) => {
    await page.goto(`${url}/boardgames`);
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  
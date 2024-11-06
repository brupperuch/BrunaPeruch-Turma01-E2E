import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class HomeElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getSearchField(): Locator {
    return this.page.locator('#input-search');
  }

  getSearchButton(): Locator {
    return this.page.locator('svg[data-testid="search-submit"]');
  }

  getFirstProductLink(): Locator {
    return this.page.locator('h2[data-testid="product-title"]').first();
  }
}

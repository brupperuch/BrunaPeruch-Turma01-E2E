import { Page } from '@playwright/test';
import HomeElements from '../elements/HomeElements';
import BasePage from './BasePage';

export default class HomePage extends BasePage {
  readonly homeElements: HomeElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.homeElements = new HomeElements(page);
  }

  async searchProductByName(): Promise<void> {
    await this.homeElements.getSearchField().fill('ar condicionado');
    await this.homeElements.getSearchButton().click();
  }

  async clickFirstProduct(): Promise<void> {
    await this.homeElements.getFirstProductLink().click();
    await this.page.waitForLoadState('load');
  }
}

import { Selector, t } from "testcafe";

export default class OnlinerPage {
  constructor() {
    this.electronics_menu = Selector(
      '[class="catalog-navigation-classifier__item "][data-id="1"]'
    );
    this.mobile_electronics_side_menu_items = Selector(
      'div[class="catalog-navigation-list__category"][data-id="1"] div[class="catalog-navigation-list__aside-title"]'
    );
    this.smartphones = Selector('a[href$="/mobile"]');
    this.categoryHeader = Selector('.js-schema-header_title');
  }

  async openMobileElectronicsMenu() {
    await t
        .click(this.electronics_menu);
  }

  async openSmartPhones() {
    await t
        .hover(this.mobile_electronics_side_menu_items)
        .click(this.smartphones);
    }
}

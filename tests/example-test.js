import  OnlinerPage  from '../pages/onliner-page';

const onlinerPage = new OnlinerPage();

fixture`Getting Started`
    .page`https://catalog.onliner.by/`;

test('Onliner test', async t => {
    await onlinerPage.openMobileElectronicsMenu();
    await onlinerPage.openSmartPhones();
    await t.expect(onlinerPage.categoryHeader.innerText).eql('Мобильные телефоны'); 
});
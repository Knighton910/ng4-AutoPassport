import { AutoPassportPage } from './app.po';

describe('auto-passport App', () => {
  let page: AutoPassportPage;

  beforeEach(() => {
    page = new AutoPassportPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

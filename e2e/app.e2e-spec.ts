import { LitthelightPage } from './app.po';

describe('litthelight App', () => {
  let page: LitthelightPage;

  beforeEach(() => {
    page = new LitthelightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

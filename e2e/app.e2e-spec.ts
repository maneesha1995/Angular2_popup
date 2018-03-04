import { PopupPage } from './app.po';

describe('popup App', function() {
  let page: PopupPage;

  beforeEach(() => {
    page = new PopupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

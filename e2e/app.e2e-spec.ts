import { ListingsPage } from './app.po';

describe('listings App', function() {
  let page: ListingsPage;

  beforeEach(() => {
    page = new ListingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

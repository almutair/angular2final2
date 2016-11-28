import { A2FR2Page } from './app.po';

describe('a2-fr2 App', function() {
  let page: A2FR2Page;

  beforeEach(() => {
    page = new A2FR2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

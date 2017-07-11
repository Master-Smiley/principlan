import { PrinciplanPage } from './app.po';

describe('principlan App', function() {
  let page: PrinciplanPage;

  beforeEach(() => {
    page = new PrinciplanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { BootcampFrontendPage } from './app.po';

describe('bootcamp-frontend App', function() {
  let page: BootcampFrontendPage;

  beforeEach(() => {
    page = new BootcampFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

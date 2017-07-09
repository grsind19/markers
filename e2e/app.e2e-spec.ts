import { MarkersPage } from './app.po';

describe('markers App', () => {
  let page: MarkersPage;

  beforeEach(() => {
    page = new MarkersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

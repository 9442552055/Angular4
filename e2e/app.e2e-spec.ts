import { RentalsPage } from './app.po';

describe('rentals App', () => {
  let page: RentalsPage;

  beforeEach(() => {
    page = new RentalsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

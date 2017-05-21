import { DemoAngualar2Page } from './app.po';

describe('demo-angualar2 App', () => {
  let page: DemoAngualar2Page;

  beforeEach(() => {
    page = new DemoAngualar2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

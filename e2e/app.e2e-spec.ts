import { ME1588KandidatarbetePage } from './app.po';

describe('me1588-kandidatarbete App', () => {
  let page: ME1588KandidatarbetePage;

  beforeEach(() => {
    page = new ME1588KandidatarbetePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

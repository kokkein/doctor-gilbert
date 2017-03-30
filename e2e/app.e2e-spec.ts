import { DoctorGilbertPage } from './app.po';

describe('doctor-gilbert App', () => {
  let page: DoctorGilbertPage;

  beforeEach(() => {
    page = new DoctorGilbertPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

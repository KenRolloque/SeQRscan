import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GooglePassPage } from './google-pass.page';

describe('GooglePassPage', () => {
  let component: GooglePassPage;
  let fixture: ComponentFixture<GooglePassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GooglePassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

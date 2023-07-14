import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoogleAddPage } from './google-add.page';

describe('GoogleAddPage', () => {
  let component: GoogleAddPage;
  let fixture: ComponentFixture<GoogleAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GoogleAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

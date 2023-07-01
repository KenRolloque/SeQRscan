import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SafePagePage } from './safe-page.page';

describe('SafePagePage', () => {
  let component: SafePagePage;
  let fixture: ComponentFixture<SafePagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SafePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

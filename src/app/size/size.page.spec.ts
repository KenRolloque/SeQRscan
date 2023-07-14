import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SizePage } from './size.page';

describe('SizePage', () => {
  let component: SizePage;
  let fixture: ComponentFixture<SizePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SizePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableEggComponent } from './clickable-egg.component';

describe('ClickableEggComponent', () => {
  let component: ClickableEggComponent;
  let fixture: ComponentFixture<ClickableEggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickableEggComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickableEggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

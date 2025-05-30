import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniFabBtnComponent } from './mini-fab-btn.component';

describe('MiniFabBtnComponent', () => {
  let component: MiniFabBtnComponent;
  let fixture: ComponentFixture<MiniFabBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiniFabBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniFabBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

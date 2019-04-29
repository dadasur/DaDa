import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LLeaveComponent } from './lleave.component';

describe('LLeaveComponent', () => {
  let component: LLeaveComponent;
  let fixture: ComponentFixture<LLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

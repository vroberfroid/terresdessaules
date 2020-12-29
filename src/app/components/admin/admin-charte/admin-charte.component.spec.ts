import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCharteComponent } from './admin-charte.component';

describe('AdminCharteComponent', () => {
  let component: AdminCharteComponent;
  let fixture: ComponentFixture<AdminCharteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCharteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCharteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

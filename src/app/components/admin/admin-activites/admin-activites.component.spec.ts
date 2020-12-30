import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActivitesComponent } from './admin-activites.component';

describe('AdminActivitesComponent', () => {
  let component: AdminActivitesComponent;
  let fixture: ComponentFixture<AdminActivitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminActivitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

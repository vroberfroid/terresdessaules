import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGitesComponent } from './admin-gites.component';

describe('AdminGitesComponent', () => {
  let component: AdminGitesComponent;
  let fixture: ComponentFixture<AdminGitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

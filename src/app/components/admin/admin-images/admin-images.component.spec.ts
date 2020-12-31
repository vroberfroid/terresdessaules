import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImagesComponent } from './admin-images.component';

describe('AdminImagesComponent', () => {
  let component: AdminImagesComponent;
  let fixture: ComponentFixture<AdminImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

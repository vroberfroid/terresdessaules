import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NousComponent } from './admin_nous.component';

describe('NousComponent', () => {
  let component: NousComponent;
  let fixture: ComponentFixture<NousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

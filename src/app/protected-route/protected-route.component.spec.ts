import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedRouteComponent } from './protected-route.component';

describe('ProtectedRouteComponent', () => {
  let component: ProtectedRouteComponent;
  let fixture: ComponentFixture<ProtectedRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtectedRouteComponent]
    });
    fixture = TestBed.createComponent(ProtectedRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

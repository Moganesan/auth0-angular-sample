import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteFlowComponent } from './invite-flow.component';

describe('InviteFlowComponent', () => {
  let component: InviteFlowComponent;
  let fixture: ComponentFixture<InviteFlowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InviteFlowComponent]
    });
    fixture = TestBed.createComponent(InviteFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

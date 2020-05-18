import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinZoneComponent } from './spin-zone.component';

describe('SpinZoneComponent', () => {
  let component: SpinZoneComponent;
  let fixture: ComponentFixture<SpinZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

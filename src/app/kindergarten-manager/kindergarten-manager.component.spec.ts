import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KindergartenManagerComponent } from './kindergarten-manager.component';

describe('KindergartenManagerComponent', () => {
  let component: KindergartenManagerComponent;
  let fixture: ComponentFixture<KindergartenManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindergartenManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindergartenManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

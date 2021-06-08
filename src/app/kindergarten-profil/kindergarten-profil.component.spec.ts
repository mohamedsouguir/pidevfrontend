import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KindergartenProfilComponent } from './kindergarten-profil.component';

describe('KindergartenProfilComponent', () => {
  let component: KindergartenProfilComponent;
  let fixture: ComponentFixture<KindergartenProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindergartenProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindergartenProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

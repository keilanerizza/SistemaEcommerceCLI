import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudanteCrudComponent } from './estudante-crud.component';

describe('EstudanteCrudComponent', () => {
  let component: EstudanteCrudComponent;
  let fixture: ComponentFixture<EstudanteCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudanteCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudanteCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

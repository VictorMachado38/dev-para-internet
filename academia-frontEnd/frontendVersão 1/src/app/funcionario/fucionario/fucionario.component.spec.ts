import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FucionarioComponent } from './fucionario.component';

describe('FucionarioComponent', () => {
  let component: FucionarioComponent;
  let fixture: ComponentFixture<FucionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FucionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FucionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AunoDetalheComponent } from './auno-detalhe.component';

describe('AunoDetalheComponent', () => {
  let component: AunoDetalheComponent;
  let fixture: ComponentFixture<AunoDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AunoDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AunoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaDeAulaDetalheComponent } from './sala-de-aula-detalhe.component';

describe('SalaDeAulaDetalheComponent', () => {
  let component: SalaDeAulaDetalheComponent;
  let fixture: ComponentFixture<SalaDeAulaDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaDeAulaDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaDeAulaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

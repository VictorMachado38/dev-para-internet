import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadeDetalheComponent } from './modalidade-detalhe.component';

describe('ModalidadeDetalheComponent', () => {
  let component: ModalidadeDetalheComponent;
  let fixture: ComponentFixture<ModalidadeDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadeDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadeDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

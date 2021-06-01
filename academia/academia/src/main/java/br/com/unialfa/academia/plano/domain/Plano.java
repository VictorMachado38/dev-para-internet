package br.com.unialfa.academia.plano.domain;

import br.com.unialfa.academia.aluno.domain.Aluno;


import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;

@Entity
public class Plano implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String nomeDoPlano;
    private BigDecimal valor;

    @OneToOne
    private Aluno aluno;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Aluno getAluno() {
        return aluno;
    }

    public void setAluno(Aluno aluno) {
        this.aluno = aluno;
    }

    public Plano() {
        super();
    }

   /* public long getId() {
        return Id;
    }

    public void setId(long id) {
        this.Id = Id;
    }*/

    public String getNomeDoPlano() {
        return nomeDoPlano;
    }
    public void setNomeDoPlano(String nomeDoPlano) {
        this.nomeDoPlano = nomeDoPlano;
    }
    public BigDecimal getValor() {
        return valor;
    }
    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }



}
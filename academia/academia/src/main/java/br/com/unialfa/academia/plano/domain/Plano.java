package br.com.unialfa.academia.plano.domain;

import br.com.unialfa.academia.pacote.domain.Pacote;

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

    /*@OneToOne
    private Pacote pacote;

    public Pacote getPacote() {
        return pacote;
    }

    public void setPacote(Pacote pacote) {
        this.pacote = pacote;
    }*/

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
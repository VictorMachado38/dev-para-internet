package br.com.unialfa.academia.plano.domain;

import br.com.unialfa.academia.pacote.domain.Pacote;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;

@Entity
public class Plano implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idPlano;
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

    public long getIdPlano() {
        return idPlano;
    }

    public void setIdPlano(long idPlano) {
        this.idPlano = idPlano;
    }

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
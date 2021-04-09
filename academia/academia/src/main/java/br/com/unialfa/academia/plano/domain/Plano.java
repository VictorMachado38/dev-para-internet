package br.com.unialfa.academia.plano.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.math.BigDecimal;

@Entity
public class Plano implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long Plano;
    private String nomeDoPlano;
    private BigDecimal valor;



    public Plano() {
        super();
    }
    public long getPlano() {
        return Plano;
    }
    public void setPlano(long plano) {
        Plano = plano;
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
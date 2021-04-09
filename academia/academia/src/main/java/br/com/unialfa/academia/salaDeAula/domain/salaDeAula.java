package br.com.unialfa.academia.salaDeAula.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class salaDeAula implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idSaldadeAula;
    private int numero;


    public long getIdSaldadeAula() {
        return idSaldadeAula;
    }
    public void setIdSaldadeAula(long idSaldadeAula) {
        this.idSaldadeAula = idSaldadeAula;
    }
    public int getNumero() {
        return numero;
    }
    public void setNumero(int numero) {
        this.numero = numero;
    }

}

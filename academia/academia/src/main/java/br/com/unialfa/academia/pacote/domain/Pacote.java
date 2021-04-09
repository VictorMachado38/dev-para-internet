package br.com.unialfa.academia.pacote.domain;

import br.com.unialfa.academia.plano.domain.Plano;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.List;

@Entity
// extends Object implements Serializable
public class Pacote  implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idPacote;

    //private List<Plano> listaDePlanos;


    public long getIdPacote() {
        return idPacote;
    }
    public void setIdPacote(long idPacote) {
        this.idPacote = idPacote;
    }
    /*public List<Plano> getListaDePlanos() {
        return listaDePlanos;
    }
    public void setListaDePlanos(List<Plano> listaDePlanos) {
        this.listaDePlanos = listaDePlanos;
    }*/



}

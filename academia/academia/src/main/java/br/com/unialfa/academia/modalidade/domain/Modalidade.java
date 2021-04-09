package br.com.unialfa.academia.modalidade.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Modalidade  implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idModalidade;
    private String nome;



    public Modalidade() {
        super();
    }
    public long getIdModalidade() {
        return idModalidade;
    }
    public void setIdModalidade(long idModalidade) {
        this.idModalidade = idModalidade;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }



}

package br.com.unialfa.academia.modalidade.domain;

import br.com.unialfa.academia.plano.domain.Plano;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Modalidade  implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idModalidade;
    private String nome;
    private String descricao;

    /*
    @OneToOne
     private Plano plano;

    public Plano getPlano() {
        return plano;
    }

    public void setPlano(Plano plano) {
        this.plano = plano;
    }
    */




    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
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

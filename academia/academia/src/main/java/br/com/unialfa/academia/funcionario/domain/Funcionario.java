package br.com.unialfa.academia.funcionario.domain;

import br.com.unialfa.academia.pessoa.domain.Pessoa;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
// ESTOU NA DUVIDA SE USA o " implements Serializable " ou o "extends Pessoa" pois essa classe herda de pessoas
public class Funcionario implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String funcao;
    private String descFuncao;



    public Funcionario() {
        super();
    }
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getFuncao() {
        return funcao;
    }
    public void setFuncao(String funcao) {
        this.funcao = funcao;
    }
    public String getDescFuncao() {
        return descFuncao;
    }
    public void setDescFuncao(String descFuncao) {
        this.descFuncao = descFuncao;
    }

}

package br.com.unialfa.academia.aluno.domain;

import br.com.unialfa.academia.pacote.domain.Pacote;
import br.com.unialfa.academia.pessoa.domain.Pessoa;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Aluno implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idAluno;
    private int funcao;


    //private Pacote Pacote;




    public long getIdAluno() {
        return idAluno;
    }
    public void setIdAluno(long idAluno) {
        this.idAluno = idAluno;
    }
    public int getFuncao() {
        return funcao;
    }
    public void setFuncao(int funcao) {
        this.funcao = funcao;
    }
   /* public Pacote getPacote() {
        return Pacote;
    }
    public void setPacote(Pacote pacote) {
        Pacote = pacote;
    }
*/


}

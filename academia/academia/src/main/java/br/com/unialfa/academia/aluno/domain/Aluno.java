package br.com.unialfa.academia.aluno.domain;

import br.com.unialfa.academia.plano.domain.Plano;
import br.com.unialfa.academia.pessoa.domain.Pessoa;
import br.com.unialfa.academia.turma.domain.Turma;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Aluno extends Pessoa implements Serializable {

  /*  @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private long idAluno;
    */

    private int matrcula;

    @OneToOne
    private Plano plano;

    @ManyToOne
    private Turma turma;

    public Turma getTurma() {
        return turma;
    }

    public void setTurma(Turma turma) {
        this.turma = turma;
    }

    /* public long getIdAluno() {
        return idAluno;
    }
    public void setIdAluno(long idAluno) {
        this.idAluno = idAluno;
    }
    */

    public int getMatrcula() {
        return matrcula;
    }

    public void setMatrcula(int matrcula) {
        this.matrcula = matrcula;
    }

    public Plano getPlano() {
        return plano;
    }

    public void setPlano(Plano plano) {
        this.plano = plano;
    }

    /*
    public Pacote getPacote() {
        return Pacote;
    }
    public void setPacote(Pacote pacote) {
        Pacote = pacote;
    }

*/

}

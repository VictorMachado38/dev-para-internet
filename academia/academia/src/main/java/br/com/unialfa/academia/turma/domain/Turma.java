package br.com.unialfa.academia.turma.domain;

import br.com.unialfa.academia.aluno.domain.Aluno;
import br.com.unialfa.academia.horario.domain.Horario;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.List;

@Entity
public class Turma implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String nome;

    private long idProfessor; //esse atributo será uma chave estrageneria

    private int maxAluno;

    //private Horario horario;

    private int vagas;

  //  private List<Aluno> alunos;



    public Turma() {
        super();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public long getIdProfessor() {
        return idProfessor;
    }

    public void setIdProfessor(long idProfessor) {
        this.idProfessor = idProfessor;
    }

    public int getMaxAluno() {
        return maxAluno;
    }

    public void setMaxAluno(int maxAluno) {
        this.maxAluno = maxAluno;
    }



    public int getVagas() {
        return vagas;
    }

    public void setVagas(int vagas) {
        this.vagas = vagas;
    }

   /* public Horario getHorario() {
        return horario;
    }

    public void setHorario(Horario horario) {
        this.horario = horario;
    }
    public List<Aluno> getAlunos() {
        return alunos;
    }

    public void setAlunos(List<Aluno> alunos) {
        this.alunos = alunos;
    }*/

}

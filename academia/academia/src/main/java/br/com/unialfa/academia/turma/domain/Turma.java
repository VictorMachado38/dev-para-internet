package br.com.unialfa.academia.turma.domain;

import br.com.unialfa.academia.aluno.domain.Aluno;
import br.com.unialfa.academia.horario.domain.Horario;
import br.com.unialfa.academia.modalidade.domain.Modalidade;
import br.com.unialfa.academia.professor.domain.Professor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
public class Turma implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String nome;

    @ManyToOne
    private Professor professor; //esse atributo será uma chave estrageneria

    private int maxAluno;

    /*
    @OneToOne
    private Horario horario;
*/
    private String horario;
    private int vagas;

    @OneToOne
    private Modalidade modalidade;

    public Modalidade getModalidade() {
        return modalidade;
    }

    public void setModalidade(Modalidade modalidade) {
        this.modalidade = modalidade;
    }

    @OneToMany
    private List<Aluno> alunos;


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


    public Professor getProfessor() {
        return professor;
    }

    public void setProfessor(Professor professor) {
        this.professor = professor;
    }

    /*
        public long getIdProfessor() {
            return idProfessor;
        }

        public void setIdProfessor(long idProfessor) {
            this.idProfessor = idProfessor;
        }
    */
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
/*
   public Horario getHorario() {
        return horario;
    }

    public void setHorario(Horario horario) {
        this.horario = horario;
    }

 */

    public String getHorario() {
        return horario;
    }

    public void setHorario(String horario) {
        this.horario = horario;
    }

    public List<Aluno> getAlunos() {
        return alunos;
    }

    public void setAlunos(List<Aluno> alunos) {
        this.alunos = alunos;


    }
}

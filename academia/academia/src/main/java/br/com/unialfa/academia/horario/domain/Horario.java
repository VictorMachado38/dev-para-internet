package br.com.unialfa.academia.horario.domain;

import br.com.unialfa.academia.turma.domain.Turma;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Horario implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idHorario;
    private String descHoario;

    /*@OneToOne
    private Turma turma;

    public Turma getTurma() {
        return turma;
    }

    public void setTurma(Turma turma) {
        this.turma = turma;
    }*/

    public long getIdHorario() {
        return idHorario;
    }

    public void setIdHorario(long idHorario) {
        this.idHorario = idHorario;
    }

    public String getDescHoario() {
        return descHoario;
    }

    public void setDescHoario(String descHoario) {
        this.descHoario = descHoario;
    }

}

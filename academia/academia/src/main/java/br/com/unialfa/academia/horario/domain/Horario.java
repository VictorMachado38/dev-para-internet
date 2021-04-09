package br.com.unialfa.academia.horario.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Horario implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idHorario;
    private String descHoario;

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

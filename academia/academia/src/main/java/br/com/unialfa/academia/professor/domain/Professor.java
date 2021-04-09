package br.com.unialfa.academia.professor.domain;

import br.com.unialfa.academia.modalidade.domain.Modalidade;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.List;

@Entity
public class Professor implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idProfessor;
    //private List<Modalidade> Modalidade;



    public Professor() {
        super();
    }


    public long getIdProfessor() {
        return idProfessor;
    }


    public void setIdProfessor(long idProfessor) {
        this.idProfessor = idProfessor;
    }


   /* public List<Modalidade> getModalidade() {
        return Modalidade;
    }


    public void setModalidade(List<Modalidade> modalidade) {
        Modalidade = modalidade;
    }
*/

}

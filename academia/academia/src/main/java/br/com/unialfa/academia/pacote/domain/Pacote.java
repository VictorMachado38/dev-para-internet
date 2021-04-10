package br.com.unialfa.academia.pacote.domain;

import br.com.unialfa.academia.aluno.domain.Aluno;
import br.com.unialfa.academia.plano.domain.Plano;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
// extends Object implements Serializable
public class Pacote  implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idPacote;

   // @OneToMany
   // private List<Plano> listaDePlanos;

    @OneToOne
    private Aluno aluno;

    public Aluno getAluno() {
        return aluno;
    }

    public void setAluno(Aluno aluno) {
        this.aluno = aluno;
    }

    public long getIdPacote() {
        return idPacote;
    }
    public void setIdPacote(long idPacote) {
        this.idPacote = idPacote;
    }
  /*  public List<Plano> getListaDePlanos() {
        return listaDePlanos;
    }
    public void setListaDePlanos(List<Plano> listaDePlanos) {
        this.listaDePlanos = listaDePlanos;
    }*/



}

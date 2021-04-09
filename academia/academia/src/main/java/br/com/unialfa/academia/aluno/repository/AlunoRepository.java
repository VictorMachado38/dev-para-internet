package br.com.unialfa.academia.aluno.repository;

import br.com.unialfa.academia.aluno.domain.Aluno;
import org.springframework.data.repository.CrudRepository;

public interface AlunoRepository  extends CrudRepository<Aluno,Long> {
}

package br.com.unialfa.academia.professor.repository;

import br.com.unialfa.academia.professor.domain.Professor;
import org.springframework.data.repository.CrudRepository;

public interface ProfessorRepository extends CrudRepository <Professor,Long> {
}

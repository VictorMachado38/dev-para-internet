package br.com.unialfa.academia.horario.repository;

import br.com.unialfa.academia.horario.domain.Horario;
import org.springframework.data.repository.CrudRepository;

public interface HorarioRepository extends CrudRepository<Horario,Long> {

}

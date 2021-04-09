package br.com.unialfa.academia.modalidade.repository;

import br.com.unialfa.academia.modalidade.domain.Modalidade;
import org.springframework.data.repository.CrudRepository;

public interface ModalidadeRepository extends CrudRepository <Modalidade, Long> {
}

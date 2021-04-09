package br.com.unialfa.academia.funcionario.repository;

import br.com.unialfa.academia.funcionario.domain.Funcionario;
import org.springframework.data.repository.CrudRepository;

public interface FuncionarioRepository extends CrudRepository<Funcionario,Long> {
}

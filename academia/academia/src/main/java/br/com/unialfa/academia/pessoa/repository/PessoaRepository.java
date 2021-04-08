package br.com.unialfa.academia.pessoa.repository;

import br.com.unialfa.academia.pessoa.domain.Pessoa;
import org.springframework.data.repository.CrudRepository;

//O pessoa é o a classe da qual vc esta fazendoo banco e o Long é o é o tipo da chame primaria
public interface PessoaRepository extends CrudRepository<Pessoa,Long > {

}

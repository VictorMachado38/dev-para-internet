package br.com.unialfa.academia.usuario.repository;

import br.com.unialfa.academia.usuario.domain.Usuario;
import org.springframework.data.repository.CrudRepository;

public interface UsuarioRepository extends CrudRepository <Usuario,Long> {

}

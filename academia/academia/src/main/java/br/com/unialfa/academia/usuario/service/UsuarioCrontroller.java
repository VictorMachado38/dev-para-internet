package br.com.unialfa.academia.usuario.service;


import br.com.unialfa.academia.usuario.domain.Usuario;
import br.com.unialfa.academia.usuario.repository.UsuarioRepository;
import br.com.unialfa.academia.usuario.domain.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;


@RestController // AQUI EU FALO QUE ELE É UM CONTROLLER
@RequestMapping(path = "/api/usuario")
public class UsuarioCrontroller {

    @Autowired
    private UsuarioRepository usuarioRepository;


    @GetMapping(path = "/", produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Usuario> ListarUsuario(){

        return usuarioRepository.findAll();
    }

    @PostMapping(path = "/add")
    public void cadastrarPessoa(@RequestBody Usuario usuario) {
        usuarioRepository.save(usuario);
    }

    @PutMapping(path = "/edit")
    public void editarPessoa(@RequestBody Usuario usuario) {
        usuarioRepository.save(usuario);
    }

    @DeleteMapping(value = "delete/{id}")
    public void deletePessoa(@PathVariable(name = "id") long id) {

        usuarioRepository.deleteById(id);
    }

}

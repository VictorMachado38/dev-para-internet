package br.com.unialfa.academia.funcionario.service;



import br.com.unialfa.academia.funcionario.repository.FuncionarioRepository;
import br.com.unialfa.academia.funcionario.domain.Funcionario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;


@RestController // AQUI EU FALO QUE ELE É UM CONTROLLER
@RequestMapping(path = "/api/funcionario")
public class FuncionarioController {

    @Autowired
    private FuncionarioRepository funcionarioRepository;


    @GetMapping(path = "/", produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Funcionario> ListarUsuario(){

        return funcionarioRepository.findAll();
    }

    @PostMapping(path = "/add")
    public void cadastrarFuncionario(@RequestBody Funcionario funcionario) {
        funcionarioRepository.save(funcionario);
    }

    @PutMapping(path = "/edit")
    public void editarFuncionario(@RequestBody Funcionario funcionario) {
        funcionarioRepository.save(funcionario);
    }

    @DeleteMapping(value = "delete/{id}")
    public void deleteFuncionario(@PathVariable(name = "id") long id) {

        funcionarioRepository.deleteById(id);
    }

}

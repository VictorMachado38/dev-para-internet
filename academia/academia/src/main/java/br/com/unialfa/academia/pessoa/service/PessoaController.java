package br.com.unialfa.academia.pessoa.service;

import br.com.unialfa.academia.pessoa.domain.Pessoa;
import br.com.unialfa.academia.pessoa.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController // AQUI EU FALO QUE ELE É UM CONTROLLER
@RequestMapping(path = "/api/pessoa")
public class PessoaController {

    @Autowired
    private PessoaRepository pessoaRepository;


    @GetMapping(path = "/", produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Pessoa> ListarPessoa(){

        return pessoaRepository.findAll();
    }

    @PostMapping(path = "/add")
    public void cadastrarPessoa(@RequestBody Pessoa pessoa) {
        pessoaRepository.save(pessoa);
    }

    @PutMapping(path = "/edit")
    public void editarPessoa(@RequestBody Pessoa pessoa) {
        pessoaRepository.save(pessoa);
    }

    @DeleteMapping(value = "delete/{id}")
    public void deletePessoa(@PathVariable(name = "id") long id) {

        pessoaRepository.deleteById(id);
    }

}

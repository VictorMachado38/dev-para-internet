package br.com.unialfa.academia.aluno.service;

import br.com.unialfa.academia.aluno.domain.Aluno;
import br.com.unialfa.academia.aluno.repository.AlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController // AQUI EU FALO QUE ELE É UM CONTROLLER
@RequestMapping(path = "/api/aluno")
public class AlunoController {

    @Autowired
    private AlunoRepository alunoRepository;


    @GetMapping(path = "/", produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Aluno> ListarAluno(){

        return alunoRepository.findAll();
    }

    @PostMapping(path = "/add")
    public void cadastrarPessoa(@RequestBody Aluno aluno) {
        alunoRepository.save(aluno);
    }

    @PutMapping(path = "/edit")
    public void editarPessoa(@RequestBody Aluno aluno) {
        alunoRepository.save(aluno);
    }

    @DeleteMapping(value = "delete/{id}")
    public void deletePessoa(@PathVariable(name = "id") long id) {

        alunoRepository.deleteById(id);
    }

}

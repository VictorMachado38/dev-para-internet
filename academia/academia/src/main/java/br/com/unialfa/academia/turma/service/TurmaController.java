package br.com.unialfa.academia.turma.service;

import br.com.unialfa.academia.turma.domain.Turma;
import br.com.unialfa.academia.turma.repository.TurmaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController // AQUI EU FALO QUE ELE É UM CONTROLLER
@RequestMapping(path = "/api/turma")
public class TurmaController {

    @Autowired
    private TurmaRepository turmaRepository;


    @GetMapping(path = "/", produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Turma> ListarTurma(){

        return turmaRepository.findAll();
    }

    @PostMapping(path = "/add")
    public void cadastrarTurma(@RequestBody Turma turma) {
        turmaRepository.save(turma);
    }

    @PutMapping(path = "/edit")
    public void editarTurma(@RequestBody Turma turma) {
        turmaRepository.save(turma);
    }

    @DeleteMapping(value = "delete/{id}")
    public void deleteTurma(@PathVariable(name = "id") long id) {

        turmaRepository.deleteById(id);
    }

}

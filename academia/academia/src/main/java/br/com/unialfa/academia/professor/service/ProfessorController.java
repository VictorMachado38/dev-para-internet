package br.com.unialfa.academia.professor.service;

import br.com.unialfa.academia.professor.domain.Professor;
import br.com.unialfa.academia.professor.repository.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController // AQUI EU FALO QUE ELE É UM CONTROLLER
@RequestMapping(path = "/api/professor")
public class ProfessorController {

    @Autowired
    private ProfessorRepository professorRepository;


    @GetMapping(path = "/", produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Professor> ListarProfessor(){

        return professorRepository.findAll();
    }

    @PostMapping(path = "/add")
    public void cadastrarProfessor(@RequestBody Professor professor) {
        professorRepository.save(professor);
    }

    @PutMapping(path = "/edit")
    public void editarProfessor(@RequestBody Professor professor) {
        professorRepository.save(professor);
    }

    @DeleteMapping(value = "delete/{id}")
    public void deleteProfessor(@PathVariable(name = "id") long id) {

        professorRepository.deleteById(id);
    }

}

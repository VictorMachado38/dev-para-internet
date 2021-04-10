package br.com.unialfa.academia.salaDeAula.service;

import br.com.unialfa.academia.salaDeAula.domain.salaDeAula;
import br.com.unialfa.academia.salaDeAula.repository.salaDeAulaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController // AQUI EU FALO QUE ELE É UM CONTROLLER
@RequestMapping(path = "/api/sala")
public class salaDeAulaController {

    @Autowired
    private salaDeAulaRepository salaDeAulaRepository;


    @GetMapping(path = "/", produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<salaDeAula> ListarSalaDeAula(){

        return salaDeAulaRepository.findAll();
    }

    @PostMapping(path = "/add")
    public void cadastrarSalaDeAula(@RequestBody salaDeAula salaDeAula) {
        salaDeAulaRepository.save(salaDeAula);
    }

    @PutMapping(path = "/edit")
    public void editarSalaDeAula(@RequestBody salaDeAula salaDeAula) {
        salaDeAulaRepository.save(salaDeAula);
    }

    @DeleteMapping(value = "delete/{id}")
    public void deleteSalaDeAula(@PathVariable(name = "id") long id) {

        salaDeAulaRepository.deleteById(id);
    }

}

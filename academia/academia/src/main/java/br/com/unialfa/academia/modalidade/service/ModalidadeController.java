package br.com.unialfa.academia.modalidade.service;

import br.com.unialfa.academia.modalidade.domain.Modalidade;
import br.com.unialfa.academia.modalidade.repository.ModalidadeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController // AQUI EU FALO QUE ELE É UM CONTROLLER
@RequestMapping(path = "/api/modalidade")
public class ModalidadeController {

    @Autowired
    private ModalidadeRepository modalidadeRepository;


    @GetMapping(path = "/", produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Modalidade> ListarModalidade(){

        return modalidadeRepository.findAll();
    }

    @PostMapping(path = "/add")
    public void cadastrarModalidade(@RequestBody Modalidade modalidade) {
        modalidadeRepository.save(modalidade);
    }

    @PutMapping(path = "/edit")
    public void editarModalidade(@RequestBody Modalidade modalidade) {
        modalidadeRepository.save(modalidade);
    }

    @DeleteMapping(value = "delete/{id}")
    public void deleteTurma(@PathVariable(name = "idModalidade") long id) {

        modalidadeRepository.deleteById(id);
    }

}
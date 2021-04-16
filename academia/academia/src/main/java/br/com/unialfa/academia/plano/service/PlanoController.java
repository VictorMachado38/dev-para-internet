package br.com.unialfa.academia.plano.service;


import br.com.unialfa.academia.plano.domain.Plano;
import br.com.unialfa.academia.plano.repository.PlanoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController // AQUI EU FALO QUE ELE É UM CONTROLLER
@RequestMapping(path = "/api/plano")
public class PlanoController {

    @Autowired
    private PlanoRepository planoRepository;


    @GetMapping(path = "/", produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Plano> ListarPlano(){

        return planoRepository.findAll();
    }

    @PostMapping(path = "/add")
    public void cadastrarPlano(@RequestBody Plano plano) {
        planoRepository.save(plano);
    }

    @PutMapping(path = "/edit")
    public void editarPlano(@RequestBody Plano plano) {
        planoRepository.save(plano);
    }

    @DeleteMapping(value = "delete/{id}")
    public void deletePlano(@PathVariable(name = "id") long id) {

        planoRepository.deleteById(id);
    }

}

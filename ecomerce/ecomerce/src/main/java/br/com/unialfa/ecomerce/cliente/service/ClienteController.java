package br.com.unialfa.ecomerce.cliente.service;

import br.com.unialfa.ecomerce.cliente.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import br.com.unialfa.ecomerce.cliente.domain.Cliente;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/cliente")
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;

   // @GetMapping(path = "/listall")
    @GetMapping(path = "/",produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Cliente> listarCliente(){

        return clienteRepository.findAll();

    }

    //Não tem ID nesse metodo
    @PostMapping(path = "/add")
    public void  cadastrarCliente(@RequestBody Cliente cliente)
    {
        clienteRepository.save(cliente);
    }

    //Eu posso um cliente com ID
    @PutMapping(path = "/edit")
    public void  esditarCliente(@RequestBody Cliente cliente)
    {
        clienteRepository.save(cliente);
    }

    @DeleteMapping(value = "delete/{id}")
    public @ResponseBody void deleteCliente(@PathVariable(name = "id") long id)
    {
        clienteRepository.deleteById(id);
    }



}

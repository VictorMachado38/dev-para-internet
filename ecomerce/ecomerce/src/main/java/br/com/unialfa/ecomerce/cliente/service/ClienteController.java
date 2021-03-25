package br.com.unialfa.ecomerce.cliente.service;

import br.com.unialfa.ecomerce.cliente.business.ClieneteBusiness;
import br.com.unialfa.ecomerce.cliente.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import br.com.unialfa.ecomerce.cliente.domain.Cliente;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/cliente")
public class ClienteController {

    @Autowired
   private ClieneteBusiness clieneteBusiness;

   // @GetMapping(path = "/listall")
    @GetMapping(path = "/",produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Cliente> listarCliente(){
        return clieneteBusiness.listarCliente();
    }

    //Não tem ID nesse metodo
    @PostMapping(path = "/add")
    public void  cadastrarCliente(@RequestBody Cliente cliente)
    {


            clieneteBusiness.cadastrarCliente(cliente);


    }

    //Eu posso um cliente com ID
    @PutMapping(path = "/edit")
    public void  editarCliente(@RequestBody Cliente cliente)
    {
        clieneteBusiness.editarCliente(cliente);
    }

    @DeleteMapping(value = "delete/{id}")
    public @ResponseBody void deleteCliente(@PathVariable(name = "id") long id)
    {
        clieneteBusiness.deleteCliente(id);
    }



}

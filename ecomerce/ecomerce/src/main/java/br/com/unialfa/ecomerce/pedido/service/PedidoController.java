package br.com.unialfa.ecomerce.pedido.service;

import br.com.unialfa.ecomerce.cliente.domain.Cliente;
import br.com.unialfa.ecomerce.pedido.domain.Pedido;
import br.com.unialfa.ecomerce.pedido.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/pedido")
public class PedidoController {

    @Autowired
    private PedidoRepository pedidoRepository;

    @GetMapping(path = "/",produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Pedido> listarPedido(){

        return pedidoRepository.findAll();

    }

    @PostMapping(path = "/add")
    public  void cadastrarPedido(@RequestBody Pedido Pedido) {
        pedidoRepository.save(Pedido);
    }

    @PutMapping(path = "/edit")
    public  void estidarPedido(@RequestBody Pedido Pedido){
        pedidoRepository.save(Pedido);
    }

    @DeleteMapping(path = "/delete{id}")
    public @ResponseBody void deletePedido(@PathVariable(name = "id") long id){
        pedidoRepository.deleteById(id);
    }




}
package br.com.unialfa.ecomerce;

import br.com.unialfa.ecomerce.cliente.domain.Cliente;
import br.com.unialfa.ecomerce.cliente.repository.ClienteRepository;
import br.com.unialfa.ecomerce.pedido.repository.PedidoRepository;
import br.com.unialfa.ecomerce.pedido.domain.Pedido;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.math.BigDecimal;
import java.time.LocalDate;

@SpringBootApplication
public class EcomerceApplication {


	@Autowired
	private ClienteRepository clienteRepository;

	@Autowired
	private PedidoRepository pedidoRepository;

	public static void main(String[] args) {

		SpringApplication.run(EcomerceApplication.class, args);

	}

	@Bean

	InitializingBean sendDatabase(){
		Cliente cliente = new Cliente();
		cliente.setNome("Victor Augusto Machado");
		cliente.setCpf("789.785.457-57");
		cliente.setDataNascimento(LocalDate.of(1999, 02,25));
		cliente.setVersao(2);
		cliente.setPrimeiroNome("Victor");
		clienteRepository.save(cliente);



		Pedido pedido = new Pedido();
		pedido.setCliente(cliente);
		pedido.setDataCriacaoPedido(LocalDate.now());
		pedido.setDataUltimaTrazacao(LocalDate.now());
		pedido.setDataConclusao(LocalDate.now());
		pedido.setSubtotal(BigDecimal.ZERO);
		pedido.setTotal(BigDecimal.ZERO);
		pedido.setValorFrete(BigDecimal.ZERO);
		pedidoRepository.save(pedido);


			return  null;

		}
}

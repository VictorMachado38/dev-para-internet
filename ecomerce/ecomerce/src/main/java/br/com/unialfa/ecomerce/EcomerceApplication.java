package br.com.unialfa.ecomerce;

import br.com.unialfa.ecomerce.cliente.domain.Cliente;
import br.com.unialfa.ecomerce.cliente.repository.ClienteRepository;
import br.com.unialfa.ecomerce.pedido.domain.ItensPedido;
import br.com.unialfa.ecomerce.pedido.repository.PedidoRepository;
import br.com.unialfa.ecomerce.pedido.domain.Pedido;
import br.com.unialfa.ecomerce.produto.domain.Produto;
import br.com.unialfa.ecomerce.produto.repository.ProdutoRepository;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class EcomerceApplication {


	@Autowired
	private ClienteRepository clienteRepository;

	@Autowired
	private PedidoRepository pedidoRepository;

	@Autowired
	private ProdutoRepository produtoRepository;

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


		List<Produto> listaProdutos = new ArrayList<>();

		Produto produto1 = new Produto();
		produto1.setAtivo(true);
		produto1.setNome("Produto1");
		produto1.setDescricao("ESSE PRODUTRO 1 É TOP");
		produto1.setPreco(BigDecimal.valueOf(100.00));
		listaProdutos.add(produto1);

		Produto produto2 = new Produto();
		produto2.setAtivo(true);
		produto2.setNome("Produto2");
		produto2.setDescricao("ESSE PRODUTRO 2 É MAIS TOP AINDA");
		produto2.setPreco(BigDecimal.valueOf(900.00));
		listaProdutos.add(produto2);

		produtoRepository.saveAll(listaProdutos);


		//ALGUMA REFERENCIA NESSA PARTE DO COIDGO
		/*
		List<ItensPedido> itesnPedidos = new ArrayList<>();
		ItensPedido itensPedido = new ItensPedido();
		itensPedido.getId().setPedido(pedido);
		itensPedido.getId().setProduto(produto1);
		itesnPedidos.add(itensPedido);

		List<ItensPedido> itesnPedidos2 = new ArrayList<>();
		ItensPedido itensPedido2 = new ItensPedido();
		itensPedido2.getId().setPedido(pedido);
		itensPedido2.getId().setProduto(produto2);
		itesnPedidos.add(itensPedido2);
		*/



		return  null;

		}
}

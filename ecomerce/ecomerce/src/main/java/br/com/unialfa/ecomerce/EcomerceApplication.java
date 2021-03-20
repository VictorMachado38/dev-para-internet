package br.com.unialfa.ecomerce;

import br.com.unialfa.ecomerce.cliente.domain.Cliente;
import br.com.unialfa.ecomerce.cliente.repository.ClienteRepository;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
public class EcomerceApplication {


	@Autowired
	private ClienteRepository clienteRepository;

	public static void main(String[] args) {

		SpringApplication.run(EcomerceApplication.class, args);



	}

		/*@Bean
		InitializingBean sendDatabase(){
			Cliente cliente = new Cliente();
			cliente.setNome("Victor Augusto Machado");
			cliente.setCpf("789.785.457-57");
			cliente.setDataNascimento(LocalDate.of(1999, 02,25));
			cliente.setVersao(2);
			cliente.setPrimeiroNome("Victor");
			clienteRepository.save(cliente);
			return  null;

		}*/



}

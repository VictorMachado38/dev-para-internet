package br.com.unialfa.academia;

import br.com.unialfa.academia.pessoa.domain.Pessoa;
import br.com.unialfa.academia.pessoa.repository.PessoaRepository;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
public class AcademiaApplication {

	@Autowired
	private PessoaRepository pessoaRepository;

	public static void main(String[] args) {
		SpringApplication.run(AcademiaApplication.class, args);
		//criarPessoa();
	}

	@Bean
	InitializingBean sendDatabase() {
		Pessoa pessoa1 = new Pessoa();
		pessoa1.setNome("PessoaTsete");
		pessoa1.setDataNascimento(LocalDate.now());
		pessoa1.setEndereco("Rua nao sei das quantas");
		pessoa1.setTelefone("(62)98569-7458");
		pessoa1.setEmail("pessoateste@hotmail.com");
		pessoa1.setSexo('M');
		pessoa1.setDataCadastro(LocalDate.now());
		pessoaRepository.save(pessoa1);

		return null;
	}
}
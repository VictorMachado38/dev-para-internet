package br.com.unialfa.academia;

import br.com.unialfa.academia.aluno.domain.Aluno;
import br.com.unialfa.academia.aluno.repository.AlunoRepository;
import br.com.unialfa.academia.funcionario.repository.FuncionarioRepository;
import br.com.unialfa.academia.horario.domain.Horario;
import br.com.unialfa.academia.horario.repository.HorarioRepository;
import br.com.unialfa.academia.modalidade.domain.Modalidade;
import br.com.unialfa.academia.modalidade.repository.ModalidadeRepository;
import br.com.unialfa.academia.pacote.domain.Pacote;
import br.com.unialfa.academia.pacote.repository.PacoteRepository;
import br.com.unialfa.academia.pessoa.domain.Pessoa;
import br.com.unialfa.academia.pessoa.repository.PessoaRepository;
import br.com.unialfa.academia.plano.domain.Plano;
import br.com.unialfa.academia.plano.repository.PlanoRepository;
import br.com.unialfa.academia.professor.domain.Professor;
import br.com.unialfa.academia.professor.repository.ProfessorRepository;
import br.com.unialfa.academia.turma.domain.Turma;
import br.com.unialfa.academia.turma.repository.TurmaRepository;
import br.com.unialfa.academia.usuario.domain.Usuario;
import br.com.unialfa.academia.usuario.repository.UsuarioRepository;
import org.apache.coyote.http2.HpackDecoder;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import javax.persistence.Id;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class AcademiaApplication {

	@Autowired
	private PessoaRepository pessoaRepository;

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Autowired
	private FuncionarioRepository funcionarioRepository;

	@Autowired
	private AlunoRepository alunoRepository;

	@Autowired
	private PacoteRepository pacoteRepository;

	@Autowired
	private ModalidadeRepository modalidadeRepository;

	@Autowired
	private PlanoRepository planoRepository;

	@Autowired
	private ProfessorRepository professorRepository;
	@Autowired
	private TurmaRepository turmaRepository;
	@Autowired
	private HorarioRepository horarioRepository;

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






		Aluno aluno = new Aluno();
		Pacote pacote = new Pacote();
		pacoteRepository.save(pacote);

		aluno.setNome("Aluno 1");
		aluno.setDataNascimento(LocalDate.now());
		aluno.setEndereco("Rua do aluno");
		aluno.setTelefone("(61)98569-5452");
		aluno.setEmail("aluno@hotmail.com");
		aluno.setSexo('F');
		aluno.setMatrcula(123456);
		aluno.setPacote(pacote);
		aluno.setDataCadastro(LocalDate.now());
		alunoRepository.save(aluno);



		Modalidade modalidade = new Modalidade();
		modalidade.setNome("Futbol");
		modalidadeRepository.save(modalidade);

		List<Modalidade> modelidadesDoProfessor = new ArrayList<>();
		modelidadesDoProfessor.add(modalidade);


		Professor professor = new Professor();
		professor.setNome("Professor ");
		professor.setDataNascimento(LocalDate.now());
		professor.setEndereco("Rua do Professor ");
		professor.setTelefone("(62)9888-7888");
		professor.setEmail("Professor@hotmail.com");
		professor.setSexo('M');
		professor.setDataCadastro(LocalDate.now());
		professor.setModalidade(modelidadesDoProfessor);
		professorRepository.save(professor);


		List<Aluno> listAluno = new ArrayList<>();
		listAluno.add(aluno);

		alunoRepository.save(aluno);
		Turma turma = new Turma();
		Horario horaio = new Horario();
		horaio.setDescHoario("08:00h as 10:00H");
	//	horaio.setTurma(turma);

		horarioRepository.save(horaio);


		turma.setNome("Turma 1");
		turma.setProfessor(professor);
		turma.setMaxAluno(30);
		turma.setHorario(horaio);
		turma.setVagas(10);
		turma.setAlunos(listAluno);
		turmaRepository.save(turma);









/*
		//Pacote pacote = new Pacote();



		Modalidade atividade = new Modalidade();
		atividade.setNome("Futbol");
		modalidadeRepository.save(atividade);

		Plano plano =new  Plano();
	//	plano.setPacote(pacote);
		plano.setNomeDoPlano("Plano 1");
		plano.setValor(BigDecimal.valueOf(50.00));
		planoRepository.save(plano);

		//List<Plano> listaPlano = new ArrayList<>();
	//	listaPlano.add(plano);


		pacote.setAluno(aluno.getPacote().getAluno());
		//pacote.setListaDePlanos(listaPlano);



*/









		return null;
	}
}
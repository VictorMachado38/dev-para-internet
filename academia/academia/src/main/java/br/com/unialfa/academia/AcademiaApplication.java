package br.com.unialfa.academia;

import br.com.unialfa.academia.aluno.domain.Aluno;
import br.com.unialfa.academia.aluno.repository.AlunoRepository;
import br.com.unialfa.academia.funcionario.domain.Funcionario;
import br.com.unialfa.academia.funcionario.repository.FuncionarioRepository;
import br.com.unialfa.academia.horario.domain.Horario;
import br.com.unialfa.academia.horario.repository.HorarioRepository;
import br.com.unialfa.academia.modalidade.domain.Modalidade;
import br.com.unialfa.academia.modalidade.repository.ModalidadeRepository;

import br.com.unialfa.academia.pessoa.domain.Pessoa;
import br.com.unialfa.academia.pessoa.repository.PessoaRepository;
import br.com.unialfa.academia.plano.domain.Plano;
import br.com.unialfa.academia.plano.repository.PlanoRepository;
import br.com.unialfa.academia.professor.domain.Professor;
import br.com.unialfa.academia.professor.repository.ProfessorRepository;
import br.com.unialfa.academia.salaDeAula.domain.salaDeAula;
import br.com.unialfa.academia.salaDeAula.repository.salaDeAulaRepository;
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
import br.com.unialfa.academia.salaDeAula.repository.salaDeAulaRepository;

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
	private ModalidadeRepository modalidadeRepository;
	@Autowired
	private PlanoRepository planoRepository;
	@Autowired
	private ProfessorRepository professorRepository;
	@Autowired
	private TurmaRepository turmaRepository;
	@Autowired
	private HorarioRepository horarioRepository;
	@Autowired
	private salaDeAulaRepository salaDeAulaRepository;


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
		Plano plano = new Plano();
		plano.setValor(BigDecimal.valueOf(300.00));
		planoRepository.save(plano);

		aluno.setNome("Aluno 1");
		aluno.setDataNascimento(LocalDate.now());
		aluno.setEndereco("Rua do aluno");
		aluno.setTelefone("(61)98569-5452");
		aluno.setEmail("aluno@hotmail.com");
		aluno.setSexo('F');
		aluno.setMatrcula(123456);
		aluno.setPlano(plano);
		aluno.setDataCadastro(LocalDate.now());
		alunoRepository.save(aluno);



		Plano planoFut = new Plano();
		planoFut.setNomeDoPlano("Fut Segunda a Sexta");
		planoFut.setValor(BigDecimal.valueOf(250.00));
		planoRepository.save(planoFut);


		Plano planoHidro = new Plano();
		planoHidro.setNomeDoPlano("Hidro todos os dias");
		planoHidro.setValor(BigDecimal.valueOf(450.00));
		planoRepository.save(planoHidro);


		Modalidade modalidade = new Modalidade();
		modalidade.setNome("Futebol");
		//modalidade.setPlano(planoFut);
		modalidadeRepository.save(modalidade);
		Modalidade modalidade2 = new Modalidade();
		modalidade2.setNome("Hidroginastica");
	//	modalidade2.setPlano(planoHidro);
		modalidadeRepository.save(modalidade2);

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


		List<Modalidade> modelidadesDoProfessor2 = new ArrayList<>();
		modelidadesDoProfessor2.add(modalidade2);

		Professor professor2 = new Professor();
		professor2.setNome("Professor 2 ");
		professor2.setDataNascimento(LocalDate.now());
		professor2.setEndereco("Rua do Professor 2");
		professor2.setTelefone("(62)9888-7888");
		professor2.setEmail("Professor@hotmail.com");
		professor2.setSexo('M');
		professor2.setDataCadastro(LocalDate.now());
		professor2.setModalidade(modelidadesDoProfessor2);
		professorRepository.save(professor2);


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
		turma.setModalidade(modalidade);
		turmaRepository.save(turma);


		salaDeAula sala = new salaDeAula();
		sala.setNumero(1);
		salaDeAulaRepository.save(sala);
		salaDeAula sala2 = new salaDeAula();
		sala2.setNumero(2);
		salaDeAulaRepository.save(sala2);


		Funcionario funcionario = new Funcionario();
		funcionario.setNome("Roberto da silva");
		funcionario.setDataNascimento(LocalDate.now());
		funcionario.setEndereco("Rua so Funcionario Zelador");
		funcionario.setTelefone("(62)98569-7458");
		funcionario.setEmail("FuncionarioZelador@hotmail.com");
		funcionario.setSexo('M');
		funcionario.setDataCadastro(LocalDate.now());
		funcionario.setFuncao("Zelador");
		funcionario.setDescFuncao("Promover a gestão dos funcionários para garantir o cumprimento dos afazeres de rotina, necessários para a conservação do empreendimento.1");
		funcionarioRepository.save(funcionario);


		Funcionario funcionario2 = new Funcionario();
		funcionario2.setNome("Rebeca medeiros");
		funcionario2.setDataNascimento(LocalDate.now());
		funcionario2.setEndereco("Rua do Funcionario Recepcionista");
		funcionario2.setTelefone("(62)98569-7458");
		funcionario2.setEmail("FuncionarioRecepcionista@hotmail.com");
		funcionario2.setSexo('M');
		funcionario2.setDataCadastro(LocalDate.now());
		funcionario2.setFuncao("Recepcionista");
		funcionario2.setDescFuncao("Responsável pelo atendimento ao público, seja recebendo a pessoa presencialmente na recepção de um estabelecimento ou pelo telefone e e-mail.");
		funcionarioRepository.save(funcionario2);

		Usuario usuario = new Usuario();
		usuario.setNome("usuario 1");
		usuario.setDataNascimento(LocalDate.now());
		usuario.setEndereco("Rua so usuario");
		usuario.setTelefone("(62)98569-7458");
		usuario.setEmail("usuariousuario@hotmail.com");
		usuario.setSexo('M');
		usuario.setDataCadastro(LocalDate.now());
		usuario.setUserName("ADMIN");
		usuario.setSenha("admin!");
		usuario.setNivel(2);
		usuarioRepository.save(usuario);


		Usuario usuario2 = new Usuario();
		usuario2.setNome("usuario 2");
		usuario2.setDataNascimento(LocalDate.now());
		usuario2.setEndereco("Rua so usuario");
		usuario2.setTelefone("(62)98569-7458");
		usuario2.setEmail("usuario@hotmail.com");
		usuario2.setSexo('M');
		usuario2.setDataCadastro(LocalDate.now());
		usuario2.setUserName("ADMIN");
		usuario2.setSenha("admin!");
		usuario2.setNivel(2);
		usuarioRepository.save(usuario2);



		return null;
	}
}
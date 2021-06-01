package br.com.unialfa.academia.pessoa.domain;
import javax.persistence.Entity;
import java.io.Serializable;
import java.time.LocalDate;
import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
public class Pessoa implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String nome;
    private LocalDate dataNascimento;
    private String endereco;
    private String telefone;
    private String email;
    private char sexo;
    private LocalDate dataCadastro;


    public Pessoa() {
       // super();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public LocalDate getDataNascimento() {
        return dataNascimento;
    }
    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }
    public String getEndereco() {
        return endereco;
    }
    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }
    public String getTelefone() {
        return telefone;
    }
    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public char getSexo() {
        return sexo;
    }
    public void setSexo(char sexo) {
        this.sexo = sexo;
    }
    public LocalDate getDataCadastro() {
        return dataCadastro;
    }
    public void setDataCadastro(LocalDate dataCadastro) {
        this.dataCadastro = dataCadastro;
    }

}

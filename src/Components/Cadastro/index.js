import React from "react";
import "./styles.css";
import "./mediaqueries.css";
import { fazerOutrasRequisicoes } from "../../Utils/requisicoes.js";
import logo from "../../Assets/cubosLogo.svg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export function Cadastro() {
	const { register, handleSubmit } = useForm();
	return (
		<div className="telaCadastro">
			<div className="cadastro">
				<img src={logo} alt="Logo Cubos Academy" />
				<form
					onSubmit={handleSubmit((data) => {
						console.log(data);
						const nome = data.nome;
						const email = data.email;
						const senha = data.password;
						fazerOutrasRequisicoes(
							"https://cubos-desafio-4.herokuapp.com/usuarios",
							"POST",
							{
								email,
								senha,
								nome,
							}
						)
							.then(({ dados }) => {
								console.log(dados);
								alert("Usuário cadastrado");
							})
							.catch((err) => {
								console.log(err);
								alert("Algo deu errado");
							});
					})}
				>
					<label>
						Nome
						<input name="nome" ref={register} />
					</label>
					<label>
						Email
						<input name="email" type="email" ref={register} />
					</label>
					<label>
						Senha
						<input name="senha" type="password" ref={register} />
					</label>
					<div className="botao">
						<button className="submit">Criar conta</button>
					</div>
				</form>
			</div>
			<div className="logar">
				Já possui uma conta?
				<Link to="/login">
					<u>Acesse agora!</u>
				</Link>
			</div>
		</div>
	);
}

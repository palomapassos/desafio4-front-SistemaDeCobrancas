import React, { useState } from "react";
import "./styles.css";
import "./mediaqueries.css";
import { fazerRequisicoes } from "../../Utils/requisicoes.js";
import logo from "../../Assets/cubosLogo.svg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export function Cadastro() {
	const { register, handleSubmit } = useForm();
	const [mensagem, setMensagem] = useState({
		type: "sucesso" || "erro",
		mensagem: "",
	});
	return (
		<div className="telaCadastro">
			<div className="cadastro">
				<img src={logo} alt="Logo Cubos Academy" />
				<form
					className="formCadastro"
					onSubmit={handleSubmit((data) => {
						console.log(data);
						const nome = data.nome;
						const email = data.email;
						const senha = data.senha;
						fazerRequisicoes(
							"http://cubos-desafio-4.herokuapp.com/usuarios",
							"POST",
							{
								email,
								senha,
								nome,
							}
						)
							.then(({ dados }) => {
								if (dados.status === "sucesso") {
									setMensagem({ type: "sucesso", mensagem: dados.message });
								} else {
									console.log({ dados });
									setMensagem({ type: "erro", mensagem: dados.message });
								}
							})
							.catch((err) => {
								// console.log(err);
								// alert("Erro", err.messagem);
								// alert(err.message);
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
					{(mensagem.type = "erro" && <span>{mensagem.mensagem}</span>)}
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

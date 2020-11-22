import React from "react";
import "./styles.css";
import "./mediaqueries.css";
import { fazerOutrasRequisicoes } from "../Utils/requisicoes.js";
import logo from "../Assets/cubosLogo.svg";
import { useForm } from "react-hook-form";

export function Cadastro(props) {
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
						const password = data.password1;
						const password2 = data.password2;
						password === password2
							? fazerOutrasRequisicoes("", "POST", {
									nome,
									email,
									password,
							  }).then(({ dados }) => {
									console.log(dados);
							  })
							: alert("Campos de senha não conferem, verifique seus dados!");
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
						<input name="password1" type="password" ref={register} />
					</label>
					<label>
						Confirmar senha
						<input name="password2" type="password" ref={register} />
					</label>
					<div className="botao">
						<button className="submit">Criar conta</button>
					</div>
				</form>
			</div>
			<div className="logar">
				Já possui uma conta?<u>Acesse agora!</u>
			</div>
		</div>
	);
}

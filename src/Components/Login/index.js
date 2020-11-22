import React from "react";
import "./styles.css";
import "./mediaqueries.css";
import { fazerOutrasRequisicoes } from "../Utils/requisicoes.js";
import logo from "../Assets/cubosLogo.svg";
import senhaVisivel from "../Assets/senhaVisivel.svg";
import senhaNaoVisivel from "../Assets/senhaNaoVisivel.svg";
import { useForm } from "react-hook-form";

export function Login(props) {
	const { register, handleSubmit } = useForm();
	const [token, setToken] = React.useState(null);
	const [estadoSenha, setEstadoSenha] = React.useState(false);

	return (
		<div className="telaLogin">
			<div className="login">
				<img alt="Logo Cubos Academy" src={logo} />
				<form
					onSubmit={handleSubmit((data) => {
						console.log(data);
						const email = data.email;
						const senha = data.password;
						fazerOutrasRequisicoes(
							"https://back-teste-brasileirao.herokuapp.com/auth",
							"POST",
							{
								email,
								senha,
							}
						).then(({ dados }) => {
							dados.token
								? setToken(dados.token)
								: alert("Email ou senha incorretos");
						});
					})}
				>
					<label>
						Email
						<input
							placeholder="exemplo@gmail.com"
							type="email"
							name="email"
							ref={register}
						/>
					</label>
					<label>
						Senha
						<input
							placeholder="minhasenha"
							type="password"
							name="password"
							ref={register}
						/>
						<button
							type="buttom"
							className="visibilidadeSenha"
							onClick={(event) => {
								event.preventDefault();
								estadoSenha ? setEstadoSenha(false) : setEstadoSenha(true);
							}}
						>
							<img
								src={estadoSenha ? senhaVisivel : senhaNaoVisivel}
								alt={estadoSenha ? "Esconder senha" : "Mostrar senha"}
							/>
						</button>
					</label>
					<u>Esqueci minha senha</u>
					<div className="botao">
						<button className="submit">Entrar</button>
					</div>
				</form>
			</div>
			<div className="cadastrar">
				Não tem uma conta? <u>Cadastre-se</u>
			</div>
		</div>
	);
}

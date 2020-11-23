import React from "react";
import "./styles.css";
import "./mediaqueries.css";
import logo from "../Assets/cubosLogo.svg";
import senhaVisivel from "../Assets/senhaVisivel.svg";
import senhaNaoVisivel from "../Assets/senhaNaoVisivel.svg";
import { useForm } from "react-hook-form";
import { LoginContainer } from "../../App";

export function Login(props) {
	const { register, handleSubmit } = useForm();
	const [inputSenha, setInputSenha] = React.useState(null);

	const { login } = LoginContainer.useContainer();
	return (
		<div className="telaLogin">
			<div className="login">
				<img alt="Logo Cubos Academy" src={logo} />
				<form
					onSubmit={handleSubmit((data) => {
						console.log(data);
						login(data.email, data.senha);
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
							name="senha"
							ref={register}
							onInput={(event) => setInputSenha(event.target.value)}
						/>
						<button
							type="buttom"
							className="visibilidadeSenha"
							onClick={(event) => {
								event.preventDefault();
								inputSenha ? setInputSenha(null) : setInputSenha(inputSenha);
							}}
						>
							<img
								src={inputSenha ? senhaVisivel : senhaNaoVisivel}
								alt={inputSenha ? "Esconder senha" : "Mostrar senha"}
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

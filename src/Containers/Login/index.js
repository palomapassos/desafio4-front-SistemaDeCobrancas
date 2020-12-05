import React from "react";
import "./styles.css";
import "./mediaqueries.css";
import logo from "../../Assets/cubosLogo.svg";
import senhaVisivel from "../../Assets/senhaVisivel.svg";
import senhaNaoVisivel from "../../Assets/senhaNaoVisivel.svg";
import { useForm } from "react-hook-form";
import { LoginContainer } from "../../App";
import { Link, useHistory } from "react-router-dom";

export function Login() {
	const { register, handleSubmit } = useForm();
	const [inputSenha, setInputSenha] = React.useState(false);

	const { login } = LoginContainer.useContainer();
	const history = useHistory();
	return (
		<div className="telaLogin">
			<div className="login">
				<img alt="Logo Cubos Academy" src={logo} />
				<form
					className="formLogin"
					onSubmit={handleSubmit(async (data) => {
						await login(data.email, data.senha);
						history.push("/");
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
							type={inputSenha ? "password" : "text"}
							name="senha"
							ref={register}
							onInput={() => setInputSenha(true)}
						/>
						<button
							type="buttom"
							className="visibilidadeSenha"
							onClick={(event) => {
								event.preventDefault();
								setInputSenha(!inputSenha);
							}}
						>
							<img
								src={inputSenha ? senhaNaoVisivel : senhaVisivel}
								alt={inputSenha ? "Esconder senha" : "Mostrar senha"}
							/>
						</button>
					</label>
					<u>Esqueci minha senha</u>
					<div className="botao">
						<button type="submit" className="submit">
							Entrar
						</button>
					</div>
				</form>
			</div>
			<div className="cadastrar">
				Não tem uma conta?{" "}
				<Link to="/cadastro">
					<u>Cadastre-se</u>
				</Link>
			</div>
		</div>
	);
}

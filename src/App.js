import "./App.css";
import React from "react";
import { fazerOutrasRequisicoes } from "../src/Components/Utils/requisicoes";
import { Login } from "../src/Components/Login";
import { Cadastro } from "../src/Components/Cadastro";
import { createContainer } from "unstated-next";

function useLogin(estadoInicialToken = null) {
	const [token, setToken] = React.useState(estadoInicialToken);

	React.useEffect(() => {
		token
			? localStorage.setItem("token", token)
			: localStorage.removeItem("token");
	}, [token]);

	function login(email, senha) {
		fazerOutrasRequisicoes(
			"https://back-teste-brasileirao.herokuapp.com/auth",
			"POST",
			{
				email,
				senha,
			}
		).then(({ dados }) => {
			dados.token ? setToken(dados.token) : alert("Email ou senha incorretos");
		});
	}

	function logout() {
		setToken(null);
	}

	return { token, login, logout };
}

export const LoginContainer = createContainer(useLogin);

function App() {
	return (
		<LoginContainer.Provider estadoInicialToken={localStorage.getItem("token")}>
			<Login></Login>
		</LoginContainer.Provider>
	);
}

export default App;

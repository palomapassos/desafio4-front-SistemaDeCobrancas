import React from "react";
import { fazerRequisicoes } from "./requisicoes";

export function useLogin(estadoInicialToken = null) {
	const [token, setToken] = React.useState(estadoInicialToken);

	React.useEffect(() => {
		token
			? localStorage.setItem("token", token)
			: localStorage.removeItem("token");
	}, [token]);

	function login(email, senha) {
		return fazerRequisicoes(
			"https://cubos-desafio-4.herokuapp.com/auth",
			"POST",
			{
				email,
				senha,
			}
		).then(({ dados }) => {
			dados.token
				? setToken(dados.token)
				: alert(console.log("Email ou senha incorretos"));
		});
	}

	function logout() {
		return setToken(null);
	}

	return { token, login, logout };
}

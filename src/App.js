import "./App.css";
import React from "react";
import { Login } from "../src/Components/Login";
import { Cadastro } from "../src/Components/Cadastro";
import { Logout } from "../src/Components/Logout";
import { Menu } from "../src/Components/Menu";
import { createContainer } from "unstated-next";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useLogin } from "./Components/Utils/getToken";

export const LoginContainer = createContainer(useLogin);

function App() {
	return (
		<BrowserRouter>
			<LoginContainer.Provider
				estadoInicialToken={localStorage.getItem("token")}
			>
				<main>
					<Switch>
						<Route exact path="/entrar" component={Login} />
						<Route exact path="/cadastrar" component={Cadastro} />
						<Route exact path="/cobrancas" />
						<Route exact path="/clientes" />
						<Route exact path="/" />
					</Switch>
				</main>
			</LoginContainer.Provider>
		</BrowserRouter>
	);
}

export default App;

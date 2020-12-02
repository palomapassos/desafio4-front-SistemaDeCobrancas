import "./App.css";
import React from "react";
import { Login } from "../src/Components/Login";
import { Cadastro } from "../src/Components/Cadastro";
import { Home } from "../src/Components/Home";
import { Cobrancas } from "../src/Components/Cobrancas";
import { Clientes } from "../src/Components/Clientes";
import { createContainer } from "unstated-next";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useLogin } from "./Utils/getToken";

function RotaProtegida(props) {
	const { children } = props;

	const token = localStorage.getItem("token");

	if (!token) {
		return <Redirect to="/login" />;
	}

	return children;
}

export const LoginContainer = createContainer(useLogin);

function App() {
	return (
		<BrowserRouter>
			<LoginContainer.Provider
				estadoInicialToken={localStorage.getItem("token")}
			>
				<main>
					<Switch>
						<Route exact path="/login" component={Login} />
						<Route exact path="/cadastro" component={Cadastro} />
						<RotaProtegida>
							<Route exact path="/" component={Home} />
							<Route exact path="/cobrancas" component={Cobrancas} />
							<Route exact path="/clientes" component={Clientes} />
						</RotaProtegida>
					</Switch>
				</main>
			</LoginContainer.Provider>
		</BrowserRouter>
	);
}

export default App;

import "./App.css";
import React from "react";
import { Login } from "../src/Components/Login";
import { Cadastro } from "../src/Components/Cadastro";
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
					</Switch>
				</main>
			</LoginContainer.Provider>
		</BrowserRouter>
	);
}

export default App;

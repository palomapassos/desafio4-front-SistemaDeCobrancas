import "./App.css";
import React from "react";
import { Login } from "./Containers/Login";
import { Cadastro } from "./Containers/Cadastro";
import { Home } from "./Containers/Home";
import { Cobrancas } from "./Containers/Cobrancas";
import { Clientes } from "./Containers/Clientes";
import { CriarCobranca } from "./Containers/CriarCobranca";
import { CriarCliente } from "./Containers/CriarCliente";
import { EditarCliente } from "./Containers/EditarCliente";
import { createContainer } from "unstated-next";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useLogin } from "./Utils/getToken";

function RotaProtegida(props) {
	const { children } = props;

	const { token } = LoginContainer.useContainer();

	if (!token) {
		return <Redirect to="/login" />;
	}

	return children;
}

export const LoginContainer = createContainer(useLogin);
export const ContextoIdCliente = React.createContext();

function App() {
	const [idClienteEditar, setIdClienteEditar] = React.useState(null);

	return (
		<BrowserRouter>
			<LoginContainer.Provider
				estadoInicialToken={localStorage.getItem("token")}
			>
				<ContextoIdCliente.Provider
					value={{ idClienteEditar, setIdClienteEditar }}
				>
					<main>
						<Switch>
							<Route exact path="/login" component={Login} />
							<Route exact path="/cadastro" component={Cadastro} />
							<RotaProtegida>
								<Route exact path="/" component={Home} />
								<Route exact path="/cobrancas" component={Cobrancas} />
								<Route exact path="/clientes" component={Clientes} />
								<Route exact path="/criarCliente" component={CriarCliente} />
								<Route exact path="/criarCobranca" component={CriarCobranca} />
								<Route exact path="/editarCliente" component={EditarCliente} />
							</RotaProtegida>
						</Switch>
					</main>
				</ContextoIdCliente.Provider>
			</LoginContainer.Provider>
		</BrowserRouter>
	);
}

export default App;

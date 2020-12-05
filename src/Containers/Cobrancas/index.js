import React from "react";
import "./styles.css";
import { Menu } from "../../Components/Menu";
import { Logout } from "../../Components/Logout";
import { Busca } from "../../Components/Busca";
import { TableCobrancas } from "../../Components/TableCobrancas";
import { fazerRequisicoes } from "../../Utils/requisicoes";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import { LoginContainer } from "../../App";

export function Cobrancas() {
	const { token } = LoginContainer.useContainer();
	const [cobrancas, setCobrancas] = React.useState([]);
	const [clientes, setClientes] = React.useState([]);
	const [
		cobrancaDoClienteBuscado,
		setCobrancaDoClienteBuscado,
	] = React.useState([]);
	const [busca, setBusca] = React.useState(false);
	const [totalDePaginas, setTotalDePaginas] = React.useState(1);

	function fazerFiltro(valor) {
		let result = null;
		const clienteBuscado = clientes.find((cliente) => cliente.nome === valor);
		if (clienteBuscado) {
			result = cobrancas.filter(
				(cobranca) => cobranca.iddocliente === clienteBuscado.id
			);
			setCobrancaDoClienteBuscado(result);
		}
	}

	async function onChange(page) {
		const pagina = page - 1;

		await fazerRequisicoes(
			`https://cubos-desafio-4.herokuapp.com/cobrancas?cobrancasPorPagina=10&offset=${
				pagina * 10
			}`,
			"GET",
			undefined,
			token
		).then(({ dados }) => {
			setCobrancas(dados.cobrancas);
			setTotalDePaginas(dados.totalDePaginas);
		});
	}

	React.useEffect(() => {
		fazerRequisicoes(
			`https://cubos-desafio-4.herokuapp.com/cobrancas?cobrancasPorPagina=10&offset=0`,
			"GET",
			undefined,
			token
		)
			.then(({ dados }) => {
				setCobrancas(dados.cobrancas);
				setTotalDePaginas(dados.totalDePaginas);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	React.useEffect(() => {
		fazerRequisicoes(
			`https://cubos-desafio-4.herokuapp.com/clientes?clientesPorPagina=100&offset=0`,
			"GET",
			undefined,
			token
		)
			.then(({ dados }) => {
				setClientes(dados.clientes);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="cobrancas">
			<Menu />
			<div className="areaDados">
				<Logout />
				<Busca
					placeholder="Procurar por nome"
					fazerFiltro={fazerFiltro}
					setBusca={setBusca}
				/>
				<TableCobrancas
					cobrancas={busca ? cobrancaDoClienteBuscado : cobrancas}
					clientes={clientes}
				/>
				<div className="paginacao">
					<Pagination
						size="small"
						total={totalDePaginas * 10}
						pageSize={10}
						onChange={onChange}
					/>
				</div>
			</div>
		</div>
	);
}

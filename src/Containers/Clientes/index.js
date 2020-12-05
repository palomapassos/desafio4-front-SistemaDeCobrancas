import React from "react";
import "./styles.css";
import { Menu } from "../../Components/Menu";
import { Logout } from "../../Components/Logout";
import { Busca } from "../../Components/Busca";
import { fazerRequisicoes } from "../../Utils/requisicoes";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import { TableClientes } from "../../Components/TableClientes";
import { LoginContainer } from "../../App";

export function Clientes() {
	const { token } = LoginContainer.useContainer();
	const [clientes, setClientes] = React.useState([]);
	const [clienteBuscado, setClienteBuscado] = React.useState("");
	const [busca, setBusca] = React.useState(false);
	const [totalDePaginas, setTotalDePaginas] = React.useState(1);

	function fazerFiltro(valor) {
		setClienteBuscado(
			clientes.filter((cliente) => {
				return cliente.nome === valor;
			})
		);
	}

	async function onChange(page) {
		const pagina = page - 1;

		await fazerRequisicoes(
			`https://cubos-desafio-4.herokuapp.com/clientes?clientesPorPagina=10&offset=${
				pagina * 10
			}`,
			"GET",
			undefined,
			token
		).then(({ dados }) => {
			console.log(dados);
			setClientes(dados.clientes);
			setTotalDePaginas(dados.totalDePaginas);
		});
	}

	React.useEffect(() => {
		fazerRequisicoes(
			`https://cubos-desafio-4.herokuapp.com/clientes?clientesPorPagina=10&offset=0`,
			"GET",
			undefined,
			token
		)
			.then(({ dados }) => {
				console.log(dados.clientes);
				setClientes(dados.clientes);
				setTotalDePaginas(dados.totalDePaginas);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="clientes">
			<Menu />
			<div className="areaDados">
				<Logout />
				<Busca
					placeholder="Procurar por nome"
					fazerFiltro={fazerFiltro}
					setBusca={setBusca}
				/>
				<TableClientes clientes={busca ? clienteBuscado : clientes} />
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

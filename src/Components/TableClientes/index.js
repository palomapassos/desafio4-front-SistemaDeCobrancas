import React from "react";
import "./styles.css";
import editar from "../../Assets/editar.svg";

export function TableClientes() {
	const clientes = [
		{
			nome: "nome do cliente",
			email: "exemplo@email.com",
			cobrancasFeitas: 120000,
			cobrancasRecebidas: 100000,
			estaInadimplente: true,
		},
		{
			nome: "nome do cliente",
			email: "exemplo@email.com",
			cobrancasFeitas: 130000,
			cobrancasRecebidas: 100000,
			estaInadimplente: true,
		},
	];

	return (
		<table>
			<thead>
				<tr className="containerFiltros header">
					<th>Cliente</th>
					<th>Cobranças Feitas</th>
					<th>Cobranças Recebidas</th>
					<th>Status</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{clientes &&
					clientes.map((cliente) => {
						return (
							<tr className="containerFiltros body">
								<td>
									<div className="dadosCliente">
										<span>{cliente.nome}</span> <span>{cliente.email}</span>
									</div>
								</td>
								<td>{cliente.cobrancasFeitas}</td>
								<td>{cliente.cobrancasRecebidas}</td>
								<td>
									{cliente.estaInadimplente ? (
										<div>Inadimplente</div>
									) : (
										<div>Adimplente</div>
									)}
								</td>
								<td>
									<button>
										<img src={editar} alt="Editar Cliente" />
									</button>
								</td>
							</tr>
						);
					})}
			</tbody>
		</table>
	);
}

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
		<div className="myTable">
			<ul className="headerTableClientes">
				<li>Cliente</li>
				<li>Cobranças Feitas</li>
				<li>Cobranças Recebidas</li>
				<li>Status</li>
			</ul>
			<ul>
				{clientes?.map((cliente) => (
					<li className="bodyTableClientes">
						<div className="dadosCliente">
							<span>{cliente.nome}</span> <span>{cliente.email}</span>
						</div>

						<div>{cliente.cobrancasFeitas}</div>
						<div>{cliente.cobrancasRecebidas}</div>

						{cliente.estaInadimplente ? (
							<div>Inadimplente</div>
						) : (
							<div>Adimplente</div>
						)}

						<button className="buttonTable">
							<img src={editar} alt="Editar Cliente" />
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

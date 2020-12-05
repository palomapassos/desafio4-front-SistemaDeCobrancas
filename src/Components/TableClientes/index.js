import React from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";
import editar from "../../Assets/editar.svg";
import { ContextoIdCliente } from "../../App";

export function TableClientes(props) {
	const { clientes } = props;
	const history = useHistory();
	const { setIdClienteEditar } = React.useContext(ContextoIdCliente);
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
					<li className="bodyTableClientes" key={cliente.id}>
						<div className="dadosCliente">
							<span>{cliente.nome}</span> <span>{cliente.email}</span>
						</div>

						<div>{cliente.cobrancas_pago}</div>
						<div>{cliente.cobrancas_total}</div>

						{cliente.inadimplente ? (
							<div className="inadimplente">INADIMPLENTE</div>
						) : (
							<div className="adimplente">ADIMPLENTE</div>
						)}

						<button
							className="buttonTable"
							onClick={() => {
								history.push("/editarCliente");
								setIdClienteEditar(cliente.id);
							}}
						>
							<img src={editar} alt="Editar Cliente" />
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

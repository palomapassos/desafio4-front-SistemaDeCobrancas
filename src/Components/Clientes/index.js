import React from "react";
import "./styles.css";
import { Menu } from "../Menu";
import { Logout } from "../Logout";
import { Busca } from "../Busca";
import { TableClientes } from "../TableClientes";

export function Clientes() {
	return (
		<div className="clientes">
			<Menu />
			<div className="areaDados">
				<Logout />
				<Busca placeholder="Procurar por nome, email ou cpf" />
				<TableClientes />
			</div>
		</div>
	);
}

import React from "react";
import "./styles.css";
import { Menu } from "../../Components/Menu";
import { Logout } from "../../Components/Logout";
import { ContainerEditarCliente } from "../../Components/ContainerEditarCliente";

export function EditarCliente() {
	return (
		<div className="editarCliente">
			<Menu />
			<div className="areaDados">
				<Logout />
				<ContainerEditarCliente />
			</div>
		</div>
	);
}

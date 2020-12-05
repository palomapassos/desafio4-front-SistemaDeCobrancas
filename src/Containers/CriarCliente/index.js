import React from "react";
import "./styles.css";
import { Menu } from "../../Components/Menu";
import { Logout } from "../../Components/Logout";
import { ContainerCriarCliente } from "../../Components/ContainerCriarCliente";

export function CriarCliente() {
	return (
		<div className="criarCliente">
			<Menu />
			<div className="areaDados">
				<Logout />
				<ContainerCriarCliente />
			</div>
		</div>
	);
}

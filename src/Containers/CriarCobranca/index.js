import React from "react";
import "./styles.css";
import { Menu } from "../../Components/Menu";
import { Logout } from "../../Components/Logout";
import { ContainerCriarCobranca } from "../../Components/ContainerCriarCobranca";

export function CriarCobranca() {
	return (
		<div className="criarCobranca">
			<Menu />
			<div className="areaDados">
				<Logout />
				<ContainerCriarCobranca />
			</div>
		</div>
	);
}

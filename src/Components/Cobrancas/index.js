import React from "react";
import "./styles.css";
import { Menu } from "../Menu";
import { Logout } from "../Logout";
import { Busca } from "../Busca";
import { TableCobrancas } from "../TableCobrancas";

export function Cobrancas() {
	return (
		<div className="cobrancas">
			<Menu />
			<div className="areaDados">
				<Logout />
				<Busca placeholder="Procurar por nome, email ou cpf" />
				<TableCobrancas />
			</div>
		</div>
	);
}

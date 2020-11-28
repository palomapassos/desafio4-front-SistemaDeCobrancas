import React from "react";
import "./styles.css";
import { Menu } from "../Menu";
import { Logout } from "../Logout";
import { DadosHome } from "../DadosHome";
import { ContainerEditarCriar } from "../ContainerCriarEditar";
export function Home() {
	return (
		<div className="home">
			<Menu />
			<div className="areaDados">
				<Logout />
				<DadosHome />
			</div>
		</div>
	);
}

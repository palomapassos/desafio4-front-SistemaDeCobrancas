import React from "react";
import "./styles.css";
import { Menu } from "../../Components/Menu";
import { Logout } from "../../Components/Logout";
import { DadosHome } from "../../Components/DadosHome";

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

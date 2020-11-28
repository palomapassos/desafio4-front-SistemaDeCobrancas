import React from "react";
import "./styles.css";
import { Menu } from "../Menu";
import { Logout } from "../Logout";
import { DadosHome } from "../DadosHome";

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

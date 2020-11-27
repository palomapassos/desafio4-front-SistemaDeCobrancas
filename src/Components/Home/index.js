import React from "react";
import "./styles.css";
import { Menu } from "../Menu";
import { Logout } from "../Logout";
import { DadosHome } from "../DadosHome";

export function Home() {
	return (
		<div className="home">
			<Menu></Menu>
			<div className="areaDados">
				<Logout></Logout>
				<DadosHome></DadosHome>
			</div>
		</div>
	);
}

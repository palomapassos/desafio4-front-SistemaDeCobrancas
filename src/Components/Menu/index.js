import React from "react";
import logo from "../Assets/Logo.svg";
import casa from "../Assets/iconCasa.svg";
import pessoas from "../Assets/iconPessoas.svg";
import dinheiro from "../Assets/iconDinheiro.svg";
import "./styles.css";
import "./mediaqueries.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../Utils/getMediaquery.js";

export function Menu() {
	const menorQue450px = useMediaQuery("(max-width: 450px)");
	return (
		<div className="containerMenu">
			<div>
				<img src={logo} alt="Logo Cubos Academy" />
				{menorQue450px ? (
					<nav>
						<Link to="/">
							<img src={casa} alt="home" abbr="home" />
						</Link>
						<Link to="/cobrancas">
							<abbr title="cobranças">
								<img src={dinheiro} alt="cobranças" />
							</abbr>
						</Link>
						<Link to="/clientes">
							<img src={pessoas} alt="clientes" abbr="clientes" />
						</Link>
					</nav>
				) : (
					<nav>
						<Link to="/">
							<img src={casa} alt="casa" />
							<span>HOME</span>
						</Link>
						<Link to="/cobrancas">
							<img src={dinheiro} alt="cobranças" />
							<span>COBRANÇAS</span>
						</Link>
						<Link to="/clientes">
							<img src={pessoas} alt="clientes" />
							<span>CLIENTES</span>
						</Link>
					</nav>
				)}
			</div>

			{menorQue450px ? (
				<button className="buttonCobranca" onClick={() => {}}>
					<img
						src="//s.svgbox.net/hero-outline.svg?fill=805ad5#cash"
						alt="adicionar cobrança"
					/>
				</button>
			) : (
				<button className="buttonCobranca" onClick={() => {}}>
					Criar Cobrança
				</button>
			)}
		</div>
	);
}

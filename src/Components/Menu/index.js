import React from "react";
import logo from "../../Assets/Logo.svg";
import casa from "../../Assets/iconCasa.svg";
import pessoas from "../../Assets/iconPessoas.svg";
import dinheiro from "../../Assets/iconDinheiro.svg";
import "./styles.css";
import "./mediaqueries.css";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../Button";
import { useMediaQuery } from "../../Utils/getMediaquery.js";

export function Menu() {
	const history = useHistory();
	function goToCriarCobranca() {
		history.push("/criarCobranca");
	}
	const menorQue450px = useMediaQuery("(max-width: 450px)");
	return (
		<div className="containerMenu">
			<div>
				<img src={logo} alt="Logo Cubos Academy" />
				{menorQue450px ? (
					<nav>
						<Link to="/">
							<img src={casa} alt="home" />
						</Link>
						<Link to="/cobrancas">
							<img src={dinheiro} alt="cobranças" />
						</Link>
						<Link to="/clientes">
							<img src={pessoas} alt="clientes" />
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
				<Link className="buttonCobranca" to="/criarcobranca">
					<img
						src="//s.svgbox.net/hero-outline.svg?fill=805ad5#cash"
						alt="adicionar cobrança"
					/>
				</Link>
			) : (
				<Button
					tipo="button"
					classe="buttonCobranca"
					aoClicar={goToCriarCobranca}
				>
					Criar Cobrança
				</Button>
			)}
		</div>
	);
}

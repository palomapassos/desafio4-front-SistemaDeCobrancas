import React from "react";
import "./styles.css";
import lupa from "../../Assets/busca.svg";

export function Busca(props) {
	const { placeholder } = props;
	return (
		<div className="busca">
			<input placeholder={placeholder} />
			<button>
				<img src={lupa} alt="Pesquisar" />
				Buscar
			</button>
		</div>
	);
}

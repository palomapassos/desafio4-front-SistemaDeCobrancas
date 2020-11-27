import React from "react";
import "./styles.css";
import "./mediaqueries.css";

export function ContainerCard(props) {
	const { tituloCard, iconeCard, children } = props;
	return (
		<div className="containerCard">
			<div className="cabecalhoContainer">
				<img src={iconeCard} alt={tituloCard} />
				{tituloCard}
			</div>
			<div className="bodyContainer">{children}</div>
		</div>
	);
}

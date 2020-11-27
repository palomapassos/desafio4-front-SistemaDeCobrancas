import React from "react";
import "./styles.css";
import "./mediaqueries.css";

export function RetanguloCard(props) {
	const { cor, tipo, numero } = props;

	return (
		<div className={`retangulo ${cor}`}>
			<span>{tipo}</span>
			<span>{numero}</span>
		</div>
	);
}

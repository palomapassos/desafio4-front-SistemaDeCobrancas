import React from "react";
import "./styles.css";

export function ContainerFiltros(props) {
	const { tipo, children } = props;
	return <div className={`containerFiltros ${tipo}`}>{children}</div>;
}

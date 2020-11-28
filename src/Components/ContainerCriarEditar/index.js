import React from "react";
import "./styles.css";

export function ContainerEditarCriar(props) {
	const { children } = props;
	return (
		<div className="containerEditarCriar">
			<div className="bodyContainerEditarCriar">{children}</div>
		</div>
	);
}

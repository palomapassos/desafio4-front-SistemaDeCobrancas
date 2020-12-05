import React from "react";
import "./styles.css";

export function Button(props) {
	const { tipo, classe, aoClicar, children } = props;
	return (
		<button type={tipo} className={classe} onClick={aoClicar}>
			{children}
		</button>
	);
}

import React from "react";
import "./styles.css";
import "./mediaqueries.css";
import { ContainerCard } from "../ContainerCard";
import { RetanguloCard } from "../RetanguloCard";
import iconPessoas from "../../Assets/iconPessoas.svg";

export function DadosHome() {
	const [clicado, setClicado] = React.useState("mes");
	return (
		<div className="bodyHome">
			<div className="filtrosHome">
				<button
					className={clicado === "mes" ? "filtroPeriodo" : undefined}
					onClick={() => setClicado("mes")}
				>
					Este mês
				</button>
				<button
					className={clicado === "ano" ? "filtroPeriodo" : undefined}
					onClick={() => setClicado("ano")}
				>
					Este ano
				</button>
				<button
					className={clicado === "todos" ? "filtroPeriodo" : undefined}
					onClick={() => setClicado("todos")}
				>
					Desde o início
				</button>
			</div>
			<div className="cardsHome">
				<ContainerCard tituloCard="Clientes" iconeCard={iconPessoas}>
					<RetanguloCard cor="vermelho" tipo="Inadimplentes" numero="0" />
					<RetanguloCard cor="vermelho" tipo="Inadimplentes" numero="0" />
				</ContainerCard>
				<ContainerCard tituloCard="Clientes" iconeCard={iconPessoas}>
					<RetanguloCard cor="vermelho" tipo="Inadimplentes" numero="0" />
					<RetanguloCard cor="vermelho" tipo="Inadimplentes" numero="0" />
				</ContainerCard>
			</div>
		</div>
	);
}

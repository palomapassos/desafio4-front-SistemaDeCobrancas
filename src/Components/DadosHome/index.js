import React from "react";
import "./styles.css";
import "./mediaqueries.css";
import { ContainerCard } from "../ContainerCard";
import { RetanguloCard } from "../RetanguloCard";
import iconPessoas from "../../Assets/iconPessoas.svg";
import iconDinheiro from "../../Assets/iconDinheiro.svg";
import { fazerRequisicoes } from "../../Utils/requisicoes";
import { LoginContainer } from "../../App";

export function DadosHome() {
	const [clicado, setClicado] = React.useState("mes");
	const { token } = LoginContainer.useContainer();
	const [relatorio, setRelatorio] = React.useState([]);

	React.useEffect(() => {
		fazerRequisicoes(
			"https://cubos-desafio-4.herokuapp.com/relatorios",
			"GET",
			undefined,
			token
		).then(({ dados }) => {
			setRelatorio(dados);
		});
	}, []);
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
					<RetanguloCard
						cor="verde"
						tipo="Adimplentes"
						numero={relatorio.qtdClientesAdimplentes}
					/>
					<RetanguloCard
						cor="vermelho"
						tipo="Inadimplentes"
						numero={relatorio.qtdClientesInadimplentes}
					/>
				</ContainerCard>
				<ContainerCard tituloCard="Cobranças" iconeCard={iconDinheiro}>
					<RetanguloCard
						cor="verde"
						tipo="Pagas"
						numero={relatorio.qtdBoletosPagos}
					/>
					<RetanguloCard
						cor="vermelho"
						tipo="Vencidas"
						numero={relatorio.qtdBoletosVencidos}
					/>
					<RetanguloCard
						cor="azul"
						tipo="Pendentes"
						numero={relatorio.qtdBoletosNaoPagos}
					/>
				</ContainerCard>
			</div>
		</div>
	);
}

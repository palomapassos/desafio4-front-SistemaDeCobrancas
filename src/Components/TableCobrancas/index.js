import React from "react";
import "./styles.css";
import imprimir from "../../Assets/imprimir.svg";
import togglePendente from "../../Assets/togglePendente.svg";
import togglePago from "../../Assets/togglePago.svg";

export function TableCobrancas(props) {
	const { cobrancas, clientes } = props;

	function getCliente(id) {
		const resultado = clientes.find((cliente) => cliente.id === id);
		return resultado;
	}

	return (
		<div className="myTable">
			<ul className="headerTableCobranca">
				<li>Cliente</li>
				<li>Descrição</li>
				<li>Valor</li>
				<li>Status</li>
				<li>Vencimento</li>
				<li>Boleto</li>
			</ul>
			<ul>
				{cobrancas?.map((cobranca) => {
					return (
						<li className="bodyTableCobranca" key={cobranca.id}>
							<div className="dadosCobranca">
								<span>{getCliente(cobranca.iddocliente)?.nome ?? ""}</span>
							</div>

							<div>{cobranca.descricao}</div>
							<div>{cobranca.valor}</div>
							<div>
								{cobranca.status === "PAGO" ? (
									<>
										<img src={togglePago} alt="Pago" />
										<span className="status pago">PAGO</span>
									</>
								) : cobranca.status === "AGUARDANDO" ? (
									<>
										<img src={togglePendente} alt="Pendente" />
										<span className="status pendente">PENDENTE</span>
									</>
								) : (
									<span className="status vencido">VENCIDO</span>
								)}
							</div>

							<div>
								{cobranca.vencimento
									.split("T")[0]
									.split("-")
									.reverse()
									.join("/")}
							</div>

							<a
								className="buttonTable"
								href={cobranca.linkdoboleto}
								rel="noreferrer noopener"
								target="_blank"
							>
								<img src={imprimir} alt="Imprimir Boleto" />
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

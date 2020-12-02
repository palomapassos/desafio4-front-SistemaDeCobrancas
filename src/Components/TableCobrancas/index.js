import React from "react";
import "./styles.css";
import imprimir from "../../Assets/imprimir.svg";
import togglePendente from "../../Assets/togglePendente.svg";
import togglePago from "../../Assets/togglePago.svg";

export function TableCobrancas() {
	function getCliente(id) {
		const clientes = [
			{
				id: 1,
				nome: "nome do cliente",
				email: "exemplo@email.com",
				cobrancasFeitas: 120000,
				cobrancasRecebidas: 100000,
				estaInadimplente: true,
			},
			{
				id: 2,
				nome: "nome do cliente",
				email: "exemplo@email.com",
				cobrancasFeitas: 130000,
				cobrancasRecebidas: 100000,
				estaInadimplente: true,
			},
		];
		return clientes.find((cliente) => cliente.id === id);
	}

	const cobrancas = [
		{
			id: "idDaCobranca",
			idDoCliente: 1,
			descricao: "descrição da cobrança",
			valor: 120000,
			vencimento: "data_de_vencimento",
			linkDoBoleto: "/",
			status: "AGUARDANDO",
		},
		{
			id: "idDaCobranca",
			idDoCliente: 1,
			descricao: "descrição da cobrança",
			valor: 120000,
			vencimento: "data_de_vencimento",
			linkDoBoleto: "http://link.do.boleto",
			status: "PAGO",
		},
		{
			id: "idDaCobranca",
			idDoCliente: 3,
			descricao: "descrição da cobrança",
			valor: 120000,
			vencimento: "data_de_vencimento",
			linkDoBoleto: "http://link.do.boleto",
			status: "VENCIDO",
		},
	];

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
						<li className="bodyTableCobranca">
							<div className="dadosCobranca">
								<span>{getCliente(cobranca.idDoCliente)?.nome ?? ""}</span>
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

							<div>{cobranca.vencimento}</div>

							<a
								className="buttonTable"
								href={cobranca.linkDoBoleto}
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

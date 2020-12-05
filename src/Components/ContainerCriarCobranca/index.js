import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import "./styles.css";
import "antd/dist/antd.css";
import cobranca from "../../Assets/cobranca.svg";
import { useHistory } from "react-router-dom";
import { fazerRequisicoes } from "../../Utils/requisicoes";
import { LoginContainer } from "../../App";

export function ContainerCriarCobranca() {
	const { register, handleSubmit } = useForm();
	const history = useHistory();
	const { token } = LoginContainer.useContainer();
	const [clientes, setClientes] = React.useState([]);

	React.useEffect(() => {
		fazerRequisicoes(
			"https://cubos-desafio-4.herokuapp.com/clientes?clientesPorPagina=100&offset=0",
			"GET",
			undefined,
			token
		).then(({ dados }) => {
			setClientes(dados.clientes);
		});
	}, []);

	function cancelarEnvioForm() {
		history.push("/");
	}

	return (
		<div>
			<div className="tituloPagina">// CRIAR COBRANÇA</div>
			<div className="containerCriarCobranca">
				<form
					onSubmit={handleSubmit(async (data) => {
						const idDoCliente = data.idDoCliente;
						const descricao = data.descricao;
						const valor = parseInt(data.valor);
						const vencimento = data.vencimento;
						await fazerRequisicoes(
							"https://cubos-desafio-4.herokuapp.com/cobrancas",
							"POST",
							{
								idDoCliente,
								descricao,
								valor,
								vencimento,
							},
							token
						)
							.then(({ dados }) => {
								alert("Cobrança criada");
							})
							.catch((err) => {
								console.log(err);
								alert("Algo deu errado");
							});
					})}
					className="bodyContainerEditarCriar"
				>
					<label>
						Cliente
						<select name="idDoCliente" ref={register}>
							<option name="idDoCliente" value=" " ref={register}></option>
							{clientes?.map((cliente) => (
								<option
									name="idDoCliente"
									value={cliente.id}
									ref={register}
									key={cliente.id}
								>
									{cliente.nome}
								</option>
							))}
						</select>
					</label>
					<label>
						Descrição
						<textarea name="descricao" ref={register}></textarea>
					</label>
					<div className="linhaContainer">
						<label>
							Valor
							<img className="valorCobranca" src={cobranca} alt="R$" />
							<input name="valor" ref={register} />
						</label>
						<label>
							Vencimento
							<input
								type="date"
								name="vencimento"
								ref={register}
								placeholder="selecionar data"
							/>
						</label>
					</div>

					<div className="botoes">
						<Button tipo="button" classe="vazado" aoClicar={cancelarEnvioForm}>
							Cancelar
						</Button>
						<Button tipo="submit" classe="preenchido">
							Adicionar
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}

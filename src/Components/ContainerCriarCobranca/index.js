import React from "react";
import { DatePicker } from "antd";
import { useForm } from "react-hook-form";
import "./styles.css";
import "antd/dist/antd.css";
import { fazerRequisicoes } from "../../Utils/requisicoes";

export function ContainerCriarCobranca() {
	const { register, handleSubmit } = useForm();
	return (
		<div>
			<div className="tituloPagina">// CRIAR COBRANÇA</div>
			<div className="containerCriarCobranca">
				<form
					onSubmit={handleSubmit((data) => {
						console.log(data);
						const cliente = data.cliente;
						const descricao = data.descricao;
						const valor = data.valor;
						const vencimento = data.vencimento;
						fazerRequisicoes(
							"https://cubos-desafio-4.herokuapp.com/usuarios",
							"POST",
							{
								cliente,
								descricao,
								valor,
								vencimento,
							}
						)
							.then(({ dados }) => {
								console.log(dados);
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
						<select ref={register}>
							<option value=""></option>
						</select>
					</label>
					<label>
						Descrição
						<textarea ref={register}></textarea>
					</label>
					<label>
						Valor
						<input ref={register} />
					</label>
					<label>
						Vencimento
						<DatePicker placeholder="select date" ref={register} />
					</label>
					<div>
						<button>Cancelar</button>
						<button>Adicionar</button>
					</div>
				</form>
			</div>
		</div>
	);
}

import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

import { fazerRequisicoes } from "../../Utils/requisicoes";

export function ContainerCriarCliente() {
	const { register, handleSubmit } = useForm();
	return (
		<div>
			<div className="tituloPagina">// CRIAR CLIENTE</div>
			<div className="containerCriarCliente">
				<form
					onSubmit={handleSubmit((data) => {
						console.log(data);
						const nome = data.cliente;
						const cpf = data.descricao;
						const email = data.valor;
						const tel = data.vencimento;
						fazerRequisicoes(
							"https://cubos-desafio-4.herokuapp.com/clientes",
							"POST",
							{
								nome,
								cpf,
								email,
								tel,
							}
						)
							.then(({ dados }) => {
								console.log(dados);
								alert("Cliente criado");
							})
							.catch((err) => {
								console.log(err);
								alert("Algo deu errado");
							});
					})}
					className="bodyContainerEditarCriar"
				>
					<label>
						Nome
						<input ref={register} />
					</label>
					<label>
						Email
						<input type="email" ref={register} />
					</label>
					<label>
						CPF
						<input type="cpf" ref={register} />
					</label>
					<label>
						Telefone
						<input type="tel" ref={register} />
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

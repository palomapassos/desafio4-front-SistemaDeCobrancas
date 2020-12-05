import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { useHistory } from "react-router-dom";
import { fazerRequisicoes } from "../../Utils/requisicoes";
import "./styles.css";
import { ContextoIdCliente } from "../../App";
import { LoginContainer } from "../../App";

export function ContainerEditarCliente() {
	const { register, handleSubmit } = useForm();
	const { idClienteEditar } = React.useContext(ContextoIdCliente);
	const { token } = LoginContainer.useContainer();
	const history = useHistory();

	function cancelarEnvioForm() {
		history.push("/");
	}
	return (
		<div>
			<div className="tituloPagina">// EDITAR CLIENTE</div>
			<div className="containerEditarCliente">
				<form
					onSubmit={handleSubmit(async (data) => {
						console.log(data);
						const nome = data.nome;
						const cpf = data.cpf;
						const email = data.email;
						const tel = data.tel;
						const id = idClienteEditar;
						await fazerRequisicoes(
							"https://cubos-desafio-4.herokuapp.com/clientes",
							"PUT",
							{
								id,
								nome,
								cpf,
								email,
								tel,
							},
							token
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
						<input name="nome" ref={register} />
					</label>
					<label>
						Email
						<input name="email" type="email" ref={register} />
					</label>
					<label>
						CPF
						<input name="cpf" type="cpf" ref={register} />
					</label>
					<label>
						Telefone
						<input name="tel" type="tel" ref={register} />
					</label>
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

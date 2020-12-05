import React from "react";
import "./styles.css";
import lupa from "../../Assets/busca.svg";
import { Button } from "../../Components/Button";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

export function Busca(props) {
	const { placeholder, fazerFiltro, setBusca } = props;
	const { register, handleSubmit } = useForm();
	const history = useHistory();

	function aoClicar() {
		history.push("/criarCliente");
	}
	return (
		<div className="busca">
			<Button tipo="button" classe="vazado addCliente" aoClicar={aoClicar}>
				Adicionar cliente
			</Button>
			<form
				onSubmit={handleSubmit((data) => {
					fazerFiltro(data.busca);
					setBusca(data.busca !== "");
				})}
				className="areaBusca"
			>
				<input ref={register} name="busca" placeholder={placeholder} />
				<button type="submit" className="filtroBusca">
					<img src={lupa} alt="Pesquisar" />
					Buscar
				</button>
			</form>
		</div>
	);
}

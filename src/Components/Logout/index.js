import React from "react";
import cifrao from "../../Assets/cifrao.svg";
import userIcon from "../../Assets/user.png";
import deslogarIcon from "../../Assets/logout.svg";
import { LoginContainer } from "../../App";
import { useHistory } from "react-router-dom";
import { fazerRequisicoes } from "../../Utils/requisicoes";
import "./styles.css";

export function Logout(props) {
	const [deslogar, setDeslogar] = React.useState(false);
	const { logout, token } = LoginContainer.useContainer();
	const [relatorio, setRelatorio] = React.useState([]);
	const history = useHistory();

	React.useEffect(() => {
		fazerRequisicoes(
			"https://cubos-desafio-4.herokuapp.com/relatorios",
			"GET",
			undefined,
			token
		).then(({ dados }) => {
			console.log(dados);
			setRelatorio(dados);
		});
	}, []);

	return (
		<div className="containerLogout">
			<div className="saldo">
				<div>
					<img src={cifrao} alt="cifrão" /> Saldo em conta
				</div>
				<div>
					R${" "}
					<span className="valorSaldo">{relatorio.saldoEmConta ?? "0,00"}</span>
				</div>
			</div>
			<button
				className="deslogar"
				type="button"
				onClick={() => {
					setDeslogar(!deslogar);
				}}
			>
				<img src={userIcon} alt="user" />
				{deslogar ? (
					<button
						className="deslogarPagina"
						type="button"
						onClick={async () => {
							await logout();
							history.push("/login");
						}}
					>
						<img src={deslogarIcon} alt="Deseja deslogar?" />
						<span>Deslogar</span>
					</button>
				) : undefined}
			</button>
		</div>
	);
}

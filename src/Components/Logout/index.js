import React from "react";
import cifrao from "../../Assets/cifrao.svg";
import userIcon from "../../Assets/user.png";
import deslogarIcon from "../../Assets/logout.svg";
import { LoginContainer } from "../../App";
import "./styles.css";

export function Logout(props) {
	const [deslogar, setDeslogar] = React.useState(false);
	const { logout } = LoginContainer.useContainer();

	return (
		<div className="containerLogout">
			<div className="saldo">
				<div>
					<img src={cifrao} alt="cifrão" /> Saldo em conta
				</div>
				<div>
					R$ <span>0,00</span>
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
						onClick={() => {
							logout();
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

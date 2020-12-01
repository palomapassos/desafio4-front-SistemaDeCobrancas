import React from "react";
import cifrao from "../../Assets/cifrao.svg";
import userIcon from "../../Assets/user.png";
import deslogarIcon from "../../Assets/logout.svg";
import { LoginContainer } from "../../App";
import { useHistory } from "react-router-dom";
import "./styles.css";

export function Logout(props) {
	const [deslogar, setDeslogar] = React.useState(false);
	const { logout } = LoginContainer.useContainer();
	const history = useHistory();

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

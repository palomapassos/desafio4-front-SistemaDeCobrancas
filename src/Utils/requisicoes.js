export function fazerRequisicoes(url, metodo, conteudo, token) {
	return fetch(url, {
		method: metodo,
		headers: {
			"Content-Type": "application/json",
			Authorization: token && `Bearer ${token}`,
		},
		body: JSON.stringify(conteudo),
	}).then((resposta) => resposta.json());
}

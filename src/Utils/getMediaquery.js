import React from "react";

export function useMediaQuery(query, valorPadrao = false) {
	const [matches, setMatch] = React.useState(valorPadrao);

	React.useLayoutEffect(
		function efeito() {
			const mediaQuery = window.matchMedia(query);
			setMatch(mediaQuery.matches);

			function mediaQueryListener(event) {
				setMatch(event.matches);
			}

			mediaQuery.addListener(mediaQueryListener);

			return function limpador() {
				mediaQuery.removeListener(mediaQueryListener);
			};
		},
		[query]
	);

	return matches;
}

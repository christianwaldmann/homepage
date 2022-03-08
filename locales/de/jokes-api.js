import StyledLink from "../../components/styled-link";

export const de = {
	title: "Jokes API",
	description: [
		"API für Chuck Norris Fakten/Witze. Es handelt sich um einen API Proxy für ",
		<a href="https://api.chucknorris.io/">
			{" "}
			<StyledLink>api.chucknorris.io</StyledLink>
		</a>,
		". Die bestehende API wird durch ein neues (falsches) Attribut Autor ergänzt. Diese Information wird persistent gespeichert. Wenn ein Fakt das erste Mal angefragt wird, wird diesem ein zufälliger Autor zugewiesen. Diese Zuordnung wird anschließend in einer PostgreSQL Datenbank abgespeichert.",
	],
};

import StyledLink from "../../components/styled-link";

export const en = {
	title: "Jokes API",
	description: [
		"API for Chuck Norris facts/jokes. It is a API proxy for ",
		<a href="https://api.chucknorris.io/">
			{" "}
			<StyledLink>api.chucknorris.io</StyledLink>
		</a>,
		". The original API is supplemented by a new (fake) attribute author. This information is stored persistent. The first time a joke is fetched, it gets assigned a random author, which is then saved in a PostgreSQL database.",
	],
};

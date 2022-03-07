import Layout from "../../components/layouts/article";
import Paragraph from "../../components/paragraph";
import {
	Title,
	ProjectImage,
	ProjectBadge,
	ProjectList,
	ProjectListItem,
} from "../../components/project";
import StyledLink from "../../components/styled-link";

import thumbImage1 from "../../public/images/jokes_api.png";

export default function Project() {
	return (
		<Layout>
			<Title>Jokes API</Title>
			<Paragraph>
				API for Chuck Norris facts/jokes. It is a API proxy for{" "}
				<a href="https://api.chucknorris.io/">
					<StyledLink>api.chucknorris.io</StyledLink>
				</a>
				. The original API is supplemented by a new (fake) attribute
				author. This information is stored persistent. The first time a
				joke is fetched, it gets assigned a random author, which is then
				saved in a PostgreSQL database.
			</Paragraph>
			<ProjectList>
				<ProjectListItem>
					<ProjectBadge>Website</ProjectBadge>
					<a href="https://jokes-api100.herokuapp.com/">
						<StyledLink>
							https://jokes-api100.herokuapp.com/
						</StyledLink>
					</a>
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>Languages</ProjectBadge>
					Python
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>Frameworks</ProjectBadge>
					Flask
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>Tools</ProjectBadge>
					Git, Docker, Travis CI, Heroku, PostgreSQL
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>Source Code</ProjectBadge>
					<a href="https://github.com/christianwaldmann/jokes_api">
						<StyledLink>Github Repository</StyledLink>
					</a>
				</ProjectListItem>
			</ProjectList>
			<ProjectImage src={thumbImage1} alt="Jokes API" />
		</Layout>
	);
}

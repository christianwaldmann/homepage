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

import thumbImage1 from "../../public/images/autocomplete_postgres.png";

export default function Project() {
	return (
		<Layout>
			<Title>Autocomplete PostgreSQL</Title>
			<Paragraph>
				Project for testing out input autocompletion with PostgreSQL
				using randomly generated data. The suggestions are based on a
				substring search. The necessary query is done efficiently with a
				trigram index (pg_trgm, gin).
			</Paragraph>
			<ProjectList>
				<ProjectListItem>
					<ProjectBadge>Languages</ProjectBadge>
					Python, HTML, CSS, Javascript
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>Frameworks</ProjectBadge>
					Flask, React (Next.js), TailwindCSS
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>Tools</ProjectBadge>
					Git, Docker, PostgreSQL
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>Source Code</ProjectBadge>
					<a href="https://github.com/christianwaldmann/autocomplete_postgres">
						<StyledLink>Github Repository</StyledLink>
					</a>
				</ProjectListItem>
			</ProjectList>
			<ProjectImage src={thumbImage1} alt="Autocomplete PostgreSQL" />
		</Layout>
	);
}

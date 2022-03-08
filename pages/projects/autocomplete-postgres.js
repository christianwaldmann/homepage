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

import { getLanguage } from "../../hooks/getLanguage";
import { en } from "../../locales/en/autocomplete-postgres";
import { de } from "../../locales/de/autocomplete-postgres";
import { enw } from "../../locales/en/words";
import { dew } from "../../locales/de/words";

export default function Project() {
	const t = getLanguage() === "en" ? en : de;
	const w = getLanguage() === "en" ? enw : dew;

	return (
		<Layout>
			<Title>{t.title}</Title>
			<Paragraph>{t.description}</Paragraph>
			<ProjectList>
				<ProjectListItem>
					<ProjectBadge>{w.languages}</ProjectBadge>
					Python, HTML, CSS, Javascript
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>{w.frameworks}</ProjectBadge>
					Flask, React (Next.js), TailwindCSS
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>{w.tools}</ProjectBadge>
					Git, Docker, PostgreSQL
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>{w.sourcecode}</ProjectBadge>
					<a href="https://github.com/christianwaldmann/autocomplete_postgres">
						<StyledLink>Github Repository</StyledLink>
					</a>
				</ProjectListItem>
			</ProjectList>
			<ProjectImage src={thumbImage1} alt="Autocomplete PostgreSQL" />
		</Layout>
	);
}

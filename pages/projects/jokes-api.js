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

import { getLanguage } from "../../hooks/getLanguage";
import { en } from "../../locales/en/jokes-api";
import { de } from "../../locales/de/jokes-api";
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
					<ProjectBadge>{w.website}</ProjectBadge>
					<a href="https://jokes-api100.herokuapp.com/">
						<StyledLink>
							https://jokes-api100.herokuapp.com/
						</StyledLink>
					</a>
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>{w.languages}</ProjectBadge>
					Python
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>{w.frameworks}</ProjectBadge>
					Flask
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>{w.tools}</ProjectBadge>
					Git, Docker, Travis CI, Heroku, PostgreSQL
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>{w.sourcecode}</ProjectBadge>
					<a href="https://github.com/christianwaldmann/jokes_api">
						<StyledLink>Github Repository</StyledLink>
					</a>
				</ProjectListItem>
			</ProjectList>
			<ProjectImage src={thumbImage1} alt="Jokes API" />
		</Layout>
	);
}

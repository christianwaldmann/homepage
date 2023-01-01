import Layout from "../../components/layouts/article";
import Paragraph from "../../components/paragraph";
import {
	Title,
	ProjectImage,
	ProjectBadge,
	ProjectGrid,
	ProjectList,
	ProjectListItem,
} from "../../components/project";
import StyledLink from "../../components/styled-link";

import thumbImage1 from "../../public/images/geometrierechner.png";
import thumbImage2 from "../../public/images/geometrierechner2.png";
import thumbImage3 from "../../public/images/geometrierechner3.png";

import { getLanguage } from "../../hooks/getLanguage";
import { en } from "../../locales/en/geometrierechner";
import { de } from "../../locales/de/geometrierechner";
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
					<a href="https://geometrierechner.christianw.de/">
						<StyledLink>
						https://geometrierechner.christianw.de/
						</StyledLink>
					</a>
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>{w.languages}</ProjectBadge>
					HTML, CSS, Javascript
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>{w.frameworks}</ProjectBadge>
					React, TailwindCSS
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>{w.tools}</ProjectBadge>
					Git, Github Pages, Travis CI, Netlify
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>{w.sourcecode}</ProjectBadge>
					<a href="https://github.com/christianwaldmann/geometrierechner">
						<StyledLink>Github Repository</StyledLink>
					</a>
				</ProjectListItem>
			</ProjectList>
			<ProjectImage src={thumbImage1} alt="Geometrie Rechner" />
			<ProjectGrid>
				<ProjectImage src={thumbImage2} alt="Geometrie Rechner" />
				<ProjectImage src={thumbImage3} alt="Geometrie Rechner" />
			</ProjectGrid>
		</Layout>
	);
}

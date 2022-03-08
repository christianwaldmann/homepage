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

import thumbImage1 from "../../public/images/bookmarks.png";

import { getLanguage } from "../../hooks/getLanguage";
import { en } from "../../locales/en/bookmarks";
import { de } from "../../locales/de/bookmarks";
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
					<a href="https://bookmarks.christianw.de/">
						<StyledLink>
							https://bookmarks.christianw.de/
						</StyledLink>
					</a>
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>{w.languages}</ProjectBadge>
					HTML, CSS, Javascript, Python
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>{w.frameworks}</ProjectBadge>
					React, TailwindCSS, Django REST Framework
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>{w.tools}</ProjectBadge>
					Git, Nginx, VPS
				</ProjectListItem>
			</ProjectList>
			<ProjectImage src={thumbImage1} alt="Bookmarks" />
		</Layout>
	);
}

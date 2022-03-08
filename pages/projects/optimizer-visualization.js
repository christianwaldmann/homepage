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

import thumbImage1 from "../../public/images/optimizer_visualization.png";

import { getLanguage } from "../../hooks/getLanguage";
import { en } from "../../locales/en/optimizer-visualization";
import { de } from "../../locales/de/optimizer-visualization";
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
					Python
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>{w.libraries}</ProjectBadge>
					Numpy, Matplotlib
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>{w.tools}</ProjectBadge>
					Git
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>{w.sourcecode}</ProjectBadge>
					<a href="https://github.com/christianwaldmann/optimizer-visualization">
						<StyledLink>Github Repository</StyledLink>
					</a>
				</ProjectListItem>
			</ProjectList>
			<ProjectImage src={thumbImage1} alt="Optimizer Visualization" />
		</Layout>
	);
}

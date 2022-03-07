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

export default function Project() {
	return (
		<Layout>
			<Title>Geometrie Rechner</Title>
			<Paragraph>
				A website intended for mechanical engineers to easily calculate
				properties of simple geometries instead of having to do the
				calculations by hand.
			</Paragraph>
			<ProjectList>
				<ProjectListItem>
					<ProjectBadge>Website</ProjectBadge>
					<a href="https://www.geometrierechner.de/">
						<StyledLink>
							https://www.geometrierechner.de/
						</StyledLink>
					</a>
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>Languages</ProjectBadge>
					HTML, CSS, Javascript
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>Frameworks</ProjectBadge>
					React, TailwindCSS
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>Tools</ProjectBadge>
					Git, Github Pages, Travis CI, Netlify
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>Source Code</ProjectBadge>
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

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

import thumbImage1 from "../../public/images/orangeengine.png";

export default function Project() {
	return (
		<Layout>
			<Title>Orange Engine</Title>
			<Paragraph>
				Orange Engine is a game / rendering engine. This project is not
				implemented on my own. Rather it's my code following along the{" "}
				<a href="https://www.youtube.com/playlist?list=PLlrATfBNZ98dC-V-N3m0Go4deliWHPFwT">
					<StyledLink>tutorial series</StyledLink>
				</a>{" "}
				of the{" "}
				<a href="https://github.com/TheCherno/Hazel">
					<StyledLink>Hazel Engine</StyledLink>
				</a>
				.
			</Paragraph>
			<ProjectList>
				<ProjectListItem>
					<ProjectBadge>Languages</ProjectBadge>
					C++
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>Frameworks</ProjectBadge>
					OpenGL, Dear ImGui, Entt
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>Tools</ProjectBadge>
					Git, Premake
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>Source Code</ProjectBadge>
					<a href="https://github.com/christianwaldmann/Orange">
						<StyledLink>Github Repository</StyledLink>
					</a>
				</ProjectListItem>
			</ProjectList>
			<ProjectImage src={thumbImage1} alt="Orange Engine" />
		</Layout>
	);
}

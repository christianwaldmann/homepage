import Layout from "../../components/layouts/article";
import Paragraph from "../../components/paragraph";
import {
	Title,
	ProjectImage,
	ProjectBadge,
	ProjectList,
	ProjectListItem,
} from "../../components/project";

import thumbImage1 from "../../public/images/musicplayer.png";

export default function Project() {
	return (
		<Layout>
			<Title>Music Player</Title>
			<Paragraph>
				A music player for Windows with basic functionality.
			</Paragraph>
			<ProjectList>
				<ProjectListItem>
					<ProjectBadge>Languages</ProjectBadge>
					C++
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>Frameworks</ProjectBadge>
					Qt
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>Tools</ProjectBadge>
					Git, Premake
				</ProjectListItem>
			</ProjectList>
			<ProjectImage src={thumbImage1} alt="Music Player" />
		</Layout>
	);
}

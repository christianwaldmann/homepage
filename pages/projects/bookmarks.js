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

export default function Project() {
	return (
		<Layout>
			<Title>Bookmarks</Title>
			<Paragraph>
				Bookmarks is a website that helps you organize your bookmarks.
				This is especially useful if you set this website as the default
				site to open for new tabs in your browser. The application is
				split into a separate frontend and backend. The frontend is
				written in React, the backend with Django REST framework. User
				authentication is implemented. Both systems are deployed on a
				VPS with Nginx acting as a reverse proxy.
			</Paragraph>
			<ProjectList>
				<ProjectListItem>
					<ProjectBadge>Website</ProjectBadge>
					<a href="https://bookmarks.christianw.de/">
						<StyledLink>
							https://bookmarks.christianw.de/
						</StyledLink>
					</a>
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>Languages</ProjectBadge>
					HTML, CSS, Javascript, Python
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>Frameworks</ProjectBadge>
					React, TailwindCSS, Django REST Framework
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>Tools</ProjectBadge>
					Git, Nginx, VPS
				</ProjectListItem>
			</ProjectList>
			<ProjectImage src={thumbImage1} alt="Bookmarks" />
		</Layout>
	);
}

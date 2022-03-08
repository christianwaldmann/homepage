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

import { getLanguage } from "../../hooks/getLanguage";
import { en } from "../../locales/en/musicplayer";
import { de } from "../../locales/de/musicplayer";
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
					C++
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>{w.frameworks}</ProjectBadge>
					Qt
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>{w.tools}</ProjectBadge>
					Git, Premake
				</ProjectListItem>
			</ProjectList>
			<ProjectImage src={thumbImage1} alt="Music Player" />
		</Layout>
	);
}

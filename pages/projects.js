import Layout from "../components/layouts/article";
import Section from "../components/section";
import { ProjectGridItem } from "../components/grid-item";

import thumbGeometrierechner from "../public/images/geometrierechner_thumbnail.png";
import thumbBookmarks from "../public/images/bookmarks_thumbnail.png";
import thumbOrangeEngine from "../public/images/orangeengine_thumbnail.png";
import thumbMusicPlayer from "../public/images/musicplayer_thumbnail.png";
import thumbAutocompletePostgres from "../public/images/autocomplete_postgres_thumbnail.png";
import thumbOptimizerVisualization from "../public/images/optimizer_visualization_thumbnail.png";

import { getLanguage } from "../hooks/getLanguage";
import { en } from "../locales/en/projects";
import { de } from "../locales/de/projects";

export default function Projects() {
	const t = getLanguage() === "en" ? en : de;

	const projectList = [
		{
			id: "autocomplete-postgres",
			title: t.autocompleteTitle,
			description: t.autocompleteDescription,
			thumbnail: thumbAutocompletePostgres,
		},
		{
			id: "optimizer-visualization",
			title: t.optimizerTitle,
			description: t.optimizerDescription,
			thumbnail: thumbOptimizerVisualization,
		},
		{
			id: "geometrierechner",
			title: t.geometrierechnerTitle,
			description: t.geometrierechnerDescription,
			thumbnail: thumbGeometrierechner,
		},
		{
			id: "bookmarks",
			title: t.bookmarksTitle,
			description: t.bookmarksDescription,
			thumbnail: thumbBookmarks,
		},
		{
			id: "orangeengine",
			title: t.orangeengineTitle,
			description: t.orangeengineDescription,
			thumbnail: thumbOrangeEngine,
		},
		{
			id: "musicplayer",
			title: t.musicplayerTitle,
			description: t.musicplayerDescription,
			thumbnail: thumbMusicPlayer,
		},
	];

	return (
		<Layout>
			<h3 className="mb-3 text-lg font-bold">{t.projects}</h3>
			<div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
				{projectList.map((item, index) => (
					<Section
						delay={0.1 * (Math.floor(index / 2) + 1)}
						key={index}
					>
						<ProjectGridItem
							id={item.id}
							title={item.title}
							thumbnail={item.thumbnail}
						>
							{item.description}
						</ProjectGridItem>
					</Section>
				))}
			</div>
		</Layout>
	);
}

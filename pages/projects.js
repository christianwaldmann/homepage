import Layout from "../components/layouts/article";
import Section from "../components/section";
import { ProjectGridItem } from "../components/grid-item";
import Paragraph from "../components/paragraph";

import thumbGeometrierechner from "../public/images/geometrierechner_thumbnail.png";
import thumbBookmarks from "../public/images/bookmarks_thumbnail.png";
import thumbOrangeEngine from "../public/images/orangeengine_thumbnail.png";
import thumbMusicPlayer from "../public/images/musicplayer_thumbnail.png";
import thumbJokesAPI from "../public/images/jokes_api_thumbnail.png";
import thumbAutocompletePostgres from "../public/images/autocomplete_postgres_thumbnail.png";
import thumbOptimizerVisualization from "../public/images/optimizer_visualization_thumbnail.png";

export default function Projects() {
	return (
		<Layout>
			<h3 className="mb-3 text-lg font-bold">Projects</h3>
			<Paragraph>
				These are some of the projects I made in my free time. The main
				motivation behind them were learning purposes or just for fun.
			</Paragraph>
			<div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
				<Section delay={0.1}>
					<ProjectGridItem
						id="jokes-api"
						title="Jokes API"
						thumbnail={thumbJokesAPI}
					>
						proxy for existing API supplementing it with fake
						attribute
					</ProjectGridItem>
				</Section>
				<Section delay={0.1}>
					<ProjectGridItem
						id="autocomplete-postgres"
						title="Autocomplete with PostgreSQL"
						thumbnail={thumbAutocompletePostgres}
					>
						input autocompletion with PostgreSQL
					</ProjectGridItem>
				</Section>
				<Section delay={0.2}>
					<ProjectGridItem
						id="optimizer-visualization"
						title="Optimizer visualization"
						thumbnail={thumbOptimizerVisualization}
					>
						visualization of deep learning optimizers
					</ProjectGridItem>
				</Section>
				<Section delay={0.2}>
					<ProjectGridItem
						id="geometrierechner"
						title="Geometrie Rechner"
						thumbnail={thumbGeometrierechner}
					>
						website for calculating properties of simple geometries
					</ProjectGridItem>
				</Section>
				<Section delay={0.3}>
					<ProjectGridItem
						id="bookmarks"
						title="Bookmarks"
						thumbnail={thumbBookmarks}
					>
						website for organizing bookmarks
					</ProjectGridItem>
				</Section>
				<Section delay={0.3}>
					<ProjectGridItem
						id="orangeengine"
						title="Orange Engine"
						thumbnail={thumbOrangeEngine}
					>
						game / rendering engine
					</ProjectGridItem>
				</Section>
				<Section delay={0.4}>
					<ProjectGridItem
						id="musicplayer"
						title="Music Player"
						thumbnail={thumbMusicPlayer}
					>
						music player with basic functionality
					</ProjectGridItem>
				</Section>
			</div>
		</Layout>
	);
}

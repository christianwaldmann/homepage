import Head from "next/head";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import Bio from "../components/bio";
import Github from "../components/icons/github";
import Button, { GhostButton } from "../components/button";
import Link from "next/link";
import ChevronRight from "../components/icons/chevron-right";

import { getLanguage } from "../hooks/getLanguage";
import { en } from "../locales/en/index";
import { de } from "../locales/de/index";

export default function Home() {
	const t = getLanguage() === "en" ? en : de;

	return (
		<Layout>
			<Head>
				<title>Christian Waldmann - Homepage</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col w-full">
				<Section delay={0.1}>
					<Section.Header>{t.about}</Section.Header>
					<Paragraph>{t.aboutText}</Paragraph>
					<div className="flex justify-center mt-6">
						<Link href="/projects">
							<a>
								<Button
									rightIcon={
										<ChevronRight className="w-4 h-4 ml-2" />
									}
									skipTabFocus
								>
									{t.portfolioButton}
								</Button>
							</a>
						</Link>
					</div>
				</Section>
				<Section delay={0.2}>
					<Section.Header>{t.bio}</Section.Header>
					<Bio>
						{t.bioEntries.map((item, index) => (
							<Bio.Row key={index}>
								<Bio.Date>{item.date}</Bio.Date>
								<Bio.Text>{item.text}</Bio.Text>
							</Bio.Row>
						))}
					</Bio>
				</Section>
				<Section delay={0.3}>
					<Section.Header>Links</Section.Header>
					<ul>
						<li>
							<a href="https://github.com/christianwaldmann">
								<GhostButton
									leftIcon={
										<Github className="w-4 h-4 mr-2" />
									}
									skipTabFocus
								>
									Github
								</GhostButton>
							</a>
						</li>
					</ul>
				</Section>
			</main>
		</Layout>
	);
}

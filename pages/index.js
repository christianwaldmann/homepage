import Head from "next/head";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import Bio from "../components/bio";
import Github from "../components/icons/github";
import Button, { GhostButton } from "../components/button";
import Link from "next/link";
import ChevronRight from "../components/icons/chevron-right";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Christian Waldmann - Homepage</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col w-full">
				<Section delay={0.1}>
					<Section.Header>About</Section.Header>
					<Paragraph>
						I'm Christian, a student doing a masters degree in
						computer science. I graduated with a B.Eng. in
						mechanical engineering before making the decision to
						switch to computer science. On this website I display
						some of the projects I make in my free time.
					</Paragraph>
					<div className="flex justify-center mt-6">
						<Link href="/projects">
							<a>
								<Button
									rightIcon={
										<ChevronRight className="w-4 h-4 ml-2" />
									}
									skipTabFocus
								>
									My Portfolio
								</Button>
							</a>
						</Link>
					</div>
				</Section>
				<Section delay={0.2}>
					<Section.Header>Bio</Section.Header>
					<Bio>
						<Bio.Row>
							<Bio.Date>Since 2021</Bio.Date>
							<Bio.Text>
								Started the master's program in computer science
								at University of Applied Sciences Kempten
							</Bio.Text>
						</Bio.Row>
						<Bio.Row>
							<Bio.Date>2016 - 2020</Bio.Date>
							<Bio.Text>
								Graduated with a B.Eng. in mechanical
								engineering at University of Applied Sciences
								Kempten
							</Bio.Text>
						</Bio.Row>
						<Bio.Row>
							<Bio.Date>2008 - 2016</Bio.Date>
							<Bio.Text>Completed high school (Abitur)</Bio.Text>
						</Bio.Row>
						<Bio.Row>
							<Bio.Date>1997</Bio.Date>
							<Bio.Text>Born</Bio.Text>
						</Bio.Row>
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

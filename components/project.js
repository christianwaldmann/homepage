import Link from "next/link";
import ChevronRight from "./icons/chevron-right";
import StyledLink from "./styled-link";
import Image from "next/image";
import Badge from "./badge";
import { getLanguage } from "../hooks/getLanguage";

export function Title({ children }) {
	return (
		<div className="flex items-end mb-4">
			<Link href="/projects">
				<a>
					<StyledLink>
						{getLanguage() === "en" ? "Projects" : "Projekte"}
					</StyledLink>
				</a>
			</Link>
			<ChevronRight className="w-4 h-4 mx-1 mb-0.5" />
			<h3 className="inline-block text-xl font-bold">{children}</h3>
		</div>
	);
}

export const ProjectImage = ({ src, alt }) => (
	<div className="mx-auto mt-6">
		<Image
			src={src}
			alt={alt}
			className="w-full rounded-lg"
			placeholder="blur"
		/>
	</div>
);

export const ProjectBadge = ({ children }) => (
	<span className="mr-2">
		<Badge>{children}</Badge>
	</span>
);

export const ProjectGrid = ({ children }) => (
	<div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6">{children}</div>
);

export const ProjectList = ({ children }) => (
	<ul className="mt-4 mb-6">{children}</ul>
);

export const ProjectListItem = ({ children }) => <li>{children}</li>;

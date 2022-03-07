import Link from "next/link";
import Image from "next/image";

export const ProjectGridItem = ({ children, id, title, thumbnail }) => (
	<div className="w-full">
		<Link href={`/projects/${id}`}>
			<a>
				<div>
					<Image
						src={thumbnail}
						alt={title}
						className="rounded-lg grid-item-thumbnail"
						placeholder="blur"
					/>
					<div className="text-center">
						<span className="mt-2 text-lg font-semibold text-center text-gray-600 dark:text-gray-200">
							{title}
						</span>
					</div>
					<span className="inline-block w-full mt-1 text-sm text-center text-gray-500 dark:text-gray-300">
						{children}
					</span>
				</div>
			</a>
		</Link>
	</div>
);

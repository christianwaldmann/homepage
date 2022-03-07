import Link from "next/link";
import ThemeToggleButton from "./theme-toggle-button";

export default function Navbar() {
	return (
		<div className="fixed z-10 w-full transition-colors duration-300 bg-beige dark:bg-gray-800 h-14">
			<div className="flex items-center h-full px-4 mx-auto md:w-192">
				<Link href="/">
					<a className="text-lg font-semibold text-gray-800 dark:text-gray-100">
						Christian Waldmann
					</a>
				</Link>
				<ThemeToggleButton className="ml-auto" />
			</div>
		</div>
	);
}

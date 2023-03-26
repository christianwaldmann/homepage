import Link from "next/link";
import ThemeToggleButton from "./theme-toggle-button";
import LanguageDropdown from "./language-dropdown";

export default function Navbar() {
	return (
		<div className="fixed z-10 w-full bg-white dark:bg-gray-800 h-14">
			<div className="flex items-center h-full px-4 mx-auto md:w-192">
				<Link href="/">
					<a className="text-lg font-semibold text-gray-800 dark:text-gray-100">
						Christian Waldmann
					</a>
				</Link>
				<LanguageDropdown className="ml-auto mr-4" />
				<ThemeToggleButton />
			</div>
		</div>
	);
}

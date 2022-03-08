import { ThemeContext } from "../context/theme";
import React from "react";

export const ThemeToggleButton = ({ children, ...restProps }) => {
	const { theme, setTheme } = React.useContext(ThemeContext);
	const [icon, setIcon] = React.useState();

	React.useEffect(() => {
		setIcon(isDark() ? <SunIcon /> : <MoonIcon />);
	}, [theme]);

	function isDark() {
		return theme === "dark";
	}

	return (
		<div {...restProps}>
			<button
				className="p-3 text-gray-800 bg-black rounded cursor-pointer dark:bg-opacity-10 dark:bg-white bg-opacity-10 dark:text-gray-300 group"
				onClick={() => {
					setTheme(isDark() ? "light" : "dark");
				}}
			>
				{icon}
			</button>
		</div>
	);
};

const MoonIcon = () => {
	return (
		<svg
			className="w-5 h-5 group-hover:fill-current"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
			/>
		</svg>
	);
};

const SunIcon = () => {
	return (
		<svg
			className="w-5 h-5 group-hover:fill-current"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
			/>
		</svg>
	);
};

export default ThemeToggleButton;

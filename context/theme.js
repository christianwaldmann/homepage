import React from "react";

const getInitialTheme = (_) => {
	if (typeof window !== "undefined" && window.localStorage) {
		const storedPrefs = window.localStorage.getItem("theme");
		if (typeof storedPrefs === "string") {
			return storedPrefs;
		}

		const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
		if (userMedia.matches) {
			return "dark";
		}
	}

	// If you want to use dark theme as the default, return "dark" instead
	return "light";
};

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
	const [theme, setTheme] = React.useState(getInitialTheme);

	const rawSetTheme = (theme) => {
		const root = window.document.documentElement;
		const isDark = theme === "dark";

		root.classList.remove(isDark ? "light" : "dark");
		root.classList.add(theme);

		localStorage.setItem("theme", theme);
	};

	if (initialTheme) {
		rawSetTheme(initialTheme);
	}

	React.useEffect(
		(_) => {
			rawSetTheme(theme);
		},
		[theme]
	);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

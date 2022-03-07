import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head />
				<body className="text-gray-800 bg-beige dark:bg-gray-800 dark:text-gray-200">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

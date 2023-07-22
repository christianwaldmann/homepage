import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<script
						async
						src={process.env.HOMEPAGE_UMAMI_TRACKING_LINK}
						data-website-id={
							process.env.HOMEPAGE_UMAMI_TRACKING_CODE
						}
					></script>
				</Head>
				<body className="text-gray-800 bg-white dark:bg-gray-800 dark:text-gray-200">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

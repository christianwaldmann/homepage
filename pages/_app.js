import "tailwindcss/tailwind.css";
import { ThemeProvider } from "../context/theme";
import Layout from "../components/layouts/main";
import { AnimatePresence } from "framer-motion";

function Website({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<Layout>
				<AnimatePresence exitBeforeEnter initial={true}>
					<Component {...pageProps} />
				</AnimatePresence>
			</Layout>
		</ThemeProvider>
	);
}

export default Website;

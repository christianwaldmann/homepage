import Head from "next/head";
import NavBar from "../navbar";
import Footer from "../footer";

export const Layout = ({ children }) => {
	return (
		<div className="pb-8">
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<title>Christian Waldmann - Homepage</title>
			</Head>
			<NavBar />
			<div className="px-4 mx-auto sm:w-130 pt-14">
				{children}
				<Footer />
			</div>
		</div>
	);
};

export default Layout;

import Button from "../components/button";
import Link from "next/link";
import { getLanguage } from "../hooks/getLanguage";
import { en } from "../locales/en/404";
import { de } from "../locales/de/404";

export default function NotFoundError() {
	const t = getLanguage() === "en" ? en : de;

	return (
		<>
			<h1 className="mt-4 text-3xl font-bold">{t.h1}</h1>
			<p className="mt-2">{t.description}</p>
			<div className="flex justify-center mt-8">
				<Link href="/">
					<a>
						<Button>{t.backButton}</Button>
					</a>
				</Link>
			</div>
		</>
	);
}

import Button from "../components/button";
import Link from "next/link";

export default function NotFoundError() {
	return (
		<>
			<h1 className="mt-4 text-3xl font-bold">404 - Not found</h1>
			<p className="mt-2">
				The page you're looking for can not be found.
			</p>
			<div className="flex justify-center mt-8">
				<Link href="/">
					<a>
						<Button>Return to home</Button>
					</a>
				</Link>
			</div>
		</>
	);
}

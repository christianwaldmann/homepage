export default function Badge({ children }) {
	return (
		<div className="inline-block px-1 text-xs font-bold text-green-700 uppercase bg-green-200 bg-opacity-75 dark:bg-green-100 dark:text-green-300 dark:bg-opacity-20">
			{children}
		</div>
	);
}

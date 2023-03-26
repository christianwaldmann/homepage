export default function StyledLink({ children }) {
	return (
		<span
			className="text-blue-600 dark:text-blue-300 hover:underline"
			style={{
				textUnderlineOffset: 2,
			}}
		>
			{children}
		</span>
	);
}

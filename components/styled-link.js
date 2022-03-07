export default function StyledLink({ children }) {
	return (
		<span
			className="text-blue-600 dark:text-pink-500 hover:underline"
			style={{
				textUnderlineOffset: 2,
			}}
		>
			{children}
		</span>
	);
}

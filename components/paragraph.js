export default function Paragraph({ children }) {
	return (
		<p className="text-justify indent-8" style={{ textIndent: 20 }}>
			{children}
		</p>
	);
}

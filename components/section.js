import { motion } from "framer-motion";

export default function Section({ children, delay = 0 }) {
	return (
		<motion.div
			className="mt-6"
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, delay }}
		>
			{children}
		</motion.div>
	);
}

Section.Header = function SectionHeader({ children }) {
	return (
		<h3
			className="mb-3 text-lg font-bold underline"
			style={{
				textDecorationThickness: 4,
				textDecorationColor: "#525252",
				textUnderlineOffset: 6,
			}}
		>
			{children}
		</h3>
	);
};

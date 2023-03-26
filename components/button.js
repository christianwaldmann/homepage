export default function Button({
	leftIcon,
	rightIcon,
	skipTabFocus,
	children,
}) {
	return (
		<button
			className="flex items-center px-5 py-2 font-semibold text-gray-100 transition rounded-lg bg-sky-600 dark:bg-sky-200 dark:text-gray-800 duration-400 dark:hover:bg-sky-300 hover:bg-sky-500"
			tabIndex={skipTabFocus ? "-1" : "0"}
		>
			{leftIcon}
			{children}
			{rightIcon}
		</button>
	);
}

export function GhostButton({ leftIcon, rightIcon, skipTabFocus, children }) {
	return (
		<button
			className="flex items-center px-5 py-2 font-semibold transition rounded-lg text-sky-600 dark:text-sky-400 duration-400 hover:bg-sky-300 hover:bg-opacity-10"
			tabIndex={skipTabFocus ? "-1" : "0"}
		>
			{leftIcon}
			{children}
			{rightIcon}
		</button>
	);
}

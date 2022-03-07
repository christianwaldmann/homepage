export default function Button({
	leftIcon,
	rightIcon,
	skipTabFocus,
	children,
}) {
	return (
		<button
			className="flex items-center px-5 py-2 font-semibold text-gray-100 transition bg-teal-600 rounded-lg dark:bg-teal-200 dark:text-gray-800 duration-400 dark:hover:bg-teal-300 hover:bg-teal-500"
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
			className="flex items-center px-5 py-2 font-semibold text-teal-600 transition rounded-lg dark:text-teal-400 duration-400 hover:bg-teal-300 hover:bg-opacity-10"
			tabIndex={skipTabFocus ? "-1" : "0"}
		>
			{leftIcon}
			{children}
			{rightIcon}
		</button>
	);
}

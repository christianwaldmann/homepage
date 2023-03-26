import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LanguageDropdown({ ...restProps }) {
	const [showModal, setShowModal] = React.useState(false);

	const router = useRouter();
	const { pathname, asPath, query } = router;

	const handleOnSelect = (language) => {
		router.push({ pathname, query }, asPath, {
			locale: language,
		});
		setShowModal(false);
	};

	return (
		<>
			{showModal && (
				<div
					className="fixed top-0 left-0 w-screen h-screen bg-transparent"
					onClick={() => setShowModal(false)}
				/>
			)}
			<div {...restProps}>
				<div className="relative">
					<button
						className="flex items-center p-3 rounded"
						onClick={() => setShowModal(!showModal)}
					>
						{router.locale.toUpperCase()}
						<svg
							className="w-4 h-4 ml-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>
					{showModal && (
						<LanguageDropdown.Modal
							handleOnSelect={handleOnSelect}
						/>
					)}
				</div>
			</div>
		</>
	);
}

LanguageDropdown.Modal = function Modal({ handleOnSelect }) {
	return (
		<div className="absolute right-0 flex flex-col p-2 bg-gray-100 rounded dark:bg-gray-900 w-36 top-12 gap-y-2">
			<LanguageDropdown.Button
				language="de"
				handleOnSelect={handleOnSelect}
			>
				Deutsch
			</LanguageDropdown.Button>
			<LanguageDropdown.Button
				language="en"
				handleOnSelect={handleOnSelect}
			>
				English
			</LanguageDropdown.Button>
		</div>
	);
};

LanguageDropdown.Button = function Button({
	children,
	language,
	handleOnSelect,
}) {
	return (
		<button
			className="px-3 py-2 text-left rounded dark:hover:bg-gray-800 hover:bg-white"
			onClick={() => handleOnSelect(language)}
		>
			<span className="mr-2">{language.toUpperCase()}</span>
			<span className="font-semibold">{children}</span>
		</button>
	);
};

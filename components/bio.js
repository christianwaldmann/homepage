export default function Bio({ children }) {
	return <div>{children}</div>;
}

Bio.Row = function BioRow({ children }) {
	return <div className="flex flex-row w-full mt-3">{children}</div>;
};

Bio.Date = function BioDate({ children }) {
	return (
		<div className="flex-shrink-0 h-full font-bold w-28">{children}</div>
	);
};

Bio.Text = function BioText({ children }) {
	return <div className="">{children}</div>;
};

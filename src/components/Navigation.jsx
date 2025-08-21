export default function Navigation({
	pagesNumber = 1,
	page = 1,
	onIncrementPage = () => {},
	onDecrementPage = () => {},
}) {
	return (
		<header className="d-flex justify-content-between align-items-center">
			<button
				type="button"
				className="btn btn-primary btn-sm"
				onClick={onDecrementPage}
				disabled={page <= 1}
			>
				Page: {page}
			</button>
			<button
				type="button"
				className="btn btn-primary btn-sm"
				onClick={onIncrementPage}
				disabled={page >= pagesNumber}
			>
				Page {page + 1}
			</button>
		</header>
	);
}

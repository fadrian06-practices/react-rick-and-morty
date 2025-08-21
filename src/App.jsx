import Characters from "./components/Characters";

export default function App() {
	return (
		<div className="container py-5 d-grid gap-5">
			<h1 className="text-center display-1">Rick and Morty</h1>
			<Characters />
		</div>
	);
}

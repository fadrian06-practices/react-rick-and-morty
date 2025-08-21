import { useEffect, useState } from "react";
import Character from "./Character";
import Navigation from "./Navigation";

export default function Characters() {
	const [characters, setCharacters] = useState([
		{
			id: 1,
			name: "Rick Sanchez",
			status: "Alive",
			species: "Human",
			type: "",
			gender: "Male",
			origin: {
				name: "Earth",
				url: "https://rickandmortyapi.com/api/location/1",
			},
			location: {
				name: "Earth",
				url: "https://rickandmortyapi.com/api/location/20",
			},
			image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
			episode: [
				"https://rickandmortyapi.com/api/episode/1",
				"https://rickandmortyapi.com/api/episode/2",
				// ...
			],
			url: "https://rickandmortyapi.com/api/character/1",
			created: "2017-11-04T18:48:46.250Z",
		},
		// ...
	]);

	const [page, setPage] = useState(1);
	const [pagesNumber, setPagesNumber] = useState(1);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
			.then((response) => response.json())
			.then((data) => {
				setCharacters(data.results);
				setIsLoading(false);
				setPagesNumber(data.info.pages);
			});
	}, [page]);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	return (
		<>
			<Navigation
				pagesNumber={pagesNumber}
				page={page}
				onIncrementPage={() => setPage(page + 1)}
				onDecrementPage={() => setPage(page - 1)}
			/>
			<ul className="list-unstyled row row-cols-xl-3">
				{characters.map((character) => (
					<Character key={character.id} {...character} />
				))}
			</ul>

			<Navigation
				page={page}
				onIncrementPage={() => setPage(page + 1)}
				onDecrementPage={() => setPage(page - 1)}
			/>
		</>
	);
}

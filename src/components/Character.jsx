export default function Character({
	name = "",
	image = "",
	origin: { name: originName = "" },
}) {
	return (
		<li className="text-center p-5">
			<h2>{name}</h2>
			<figure className="ratio ratio-1x1">
				<img className="img-fluid rounded-circle" src={image} alt={name} />
			</figure>
			<p>{originName}</p>
		</li>
	);
}

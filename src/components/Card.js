const Card = ( { name, id, description } ) => {
	return (
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img src={ `https://robohash.org/${ id }?200x200` } alt={ name }/>`
			<div>
				<h2>{ name }</h2>
				<p>{ description }</p>
			</div>
		</div>
	);
};

export default Card;

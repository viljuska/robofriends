import Card from './Card';

const CardList = ( { robots } ) => {
	return (
		<div>
			{ robots.map( ( robot ) => {
				return (
					<Card
						key={ robot.id }
						name={ robot.name }
						id={ robot.id }
						description={ robot.email }
					/>
				);
			} ) }
		</div>
	);
};

export default CardList;
const Scroll = ( props ) => {
	return (
		<div style={ { overflowY: 'scroll', border: '1px solid black', height: `${ window.innerHeight * 0.7 }px` } }>
			{ props.children }
		</div>
	);
};

export default Scroll;
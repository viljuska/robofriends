// Implement React Hooks. Hooks are functions that let you “hook into” React state and lifecycle features from function components.
// You don't have to use hooks right away, but they will be useful to know about as you build more complex React apps.

import { useEffect, useState } from 'react';
import CardList                from '../components/CardList';
import SearchBox               from '../components/SearchBox';
import './App.css';
import Scroll                  from '../components/Scroll';

/**
 * Lifecyle methods
 *
 * Mounting
 * constructor()
 * componentWillMount()
 * render()
 * componentDidMount()
 *
 * Updating
 * componentWillReceiveProps()
 * shouldComponentUpdate()
 * componentWillUpdate()
 * render()
 * componentDidUpdate()
 *
 * Unmounting
 * componentWillUnmount()
 *
 * Kada se komponenta prvi put renderuje, onda se pozivaju Mounting metode
 * Kada se komponenta update-uje, onda se pozivaju Updating metode
 * Kada se komponenta ukloni, onda se pozivaju Unmounting metode
 *
 * Ako imamo state, trebalo bi da koristimo class komponente
 */
const App = () => {
	const [ robots, setRobots ]           = useState( [] );
	const [ searchField, setSearchField ] = useState( '' );

	useEffect( () => {
		fetch( 'https://jsonplaceholder.typicode.com/users' )
			.then( ( response ) => response.json() )
			.then( ( users ) => setRobots( users ) );
	}, [] );

	const onSearchChange = ( event ) => {
		setSearchField( event.target.value );
	};

	const filteredRobots = robots.filter( ( robot ) => {
		return robot.name.toLowerCase().includes( searchField.toLowerCase() );
	} );

	return !robots.length ? <h1 className="tc">Loading...</h1> : (
		<div className="tc">
			<h1 className="f2">RoboFriends</h1>
			<SearchBox searchChange={ onSearchChange }/>
			<Scroll>
				<CardList robots={ filteredRobots }/>
			</Scroll>
		</div>
	);
};

export default App;
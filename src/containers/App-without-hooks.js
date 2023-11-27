import { Component, useState, useEffect } from 'react';
import CardList                           from '../components/CardList';
import SearchBox                          from '../components/SearchBox';
import './App.css';
import Scroll                             from '../components/Scroll';

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
class App extends Component {
	constructor() {
		super();

		this.state = {
			robots     : [],
			searchField: '',
		};
	}

	componentDidMount() {
		fetch( 'https://jsonplaceholder.typicode.com/users' )
			.then( ( response ) => response.json() )
			.then( ( users ) => this.setState( { robots: users } ) );

	}

	onSearchChange = ( event ) => {
		this.setState( { searchField: event.target.value } );

		// Ovde se this odnosi na SearchBox komponentu, a ne na App komponentu, osim ako se ne koristi arrow funkcija
		// const filteredRobots = this.state.robots.filter( ( robot ) => {
		// 	return robot.name.toLowerCase().includes( this.state.searchField.toLowerCase() );
		// } );

		// this.setState( { robots: filteredRobots } );
	};

	render() {
		const { robots, searchField } = this.state;

		const filteredRobots = robots.filter( ( robot ) => {
			return robot.name.toLowerCase().includes( searchField.toLowerCase() );
		} );

		return !robots.length ? <h1 className="tc">Loading...</h1> : (
			<div className="tc">
				<h1 className="f2">RoboFriends</h1>
				<SearchBox searchChange={ this.onSearchChange }/>
				<Scroll>
					<CardList robots={ filteredRobots }/>
				</Scroll>
			</div>
		);
	}
}

export default App;
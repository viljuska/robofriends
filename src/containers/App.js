import { Component }      from 'react';
import CardList           from '../components/CardList';
import SearchBox          from '../components/SearchBox';
import './App.css';
import Scroll             from '../components/Scroll';
import { connect }        from 'react-redux';
import { setSearchField } from '../actions';

// This comes from index.js file const store = createStore( searchRobots );
const mapStateToProps    = ( state ) => {
	      return {
		      searchField: state.searchField,
	      };
      },
      mapDispatchToProps = ( dispatch ) => {
	      return {
		      onSearchChange: ( event ) => dispatch( setSearchField( event.target.value ) ),
	      };
      };

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
			robots: [],
		};
	}

	componentDidMount() {
		fetch( 'https://jsonplaceholder.typicode.com/users' )
			.then( ( response ) => response.json() )
			.then( ( users ) => this.setState( { robots: users } ) );
	}

	render() {
		const { robots }                      = this.state;
		const { searchField, onSearchChange } = this.props;

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
	}
}

export default  connect(mapStateToProps, mapDispatchToProps)(App);

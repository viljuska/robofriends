import './index.css';
import 'tachyons';
import React                            from 'react';
import ReactDOM                         from 'react-dom/client';
import App                              from './containers/App';
import { applyMiddleware, createStore } from 'redux';
import { searchRobots }                 from './reducers';
import { Provider }                     from 'react-redux';
import { createLogger }                 from 'redux-logger/src';

const logger = createLogger();
const store  = createStore( searchRobots, applyMiddleware( logger ) );

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
	<React.StrictMode>
		<Provider store={ store }>
			<App/>
		</Provider>
	</React.StrictMode>,
);

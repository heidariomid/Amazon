import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import {BrowserRouter as Router} from 'react-router-dom';
// import {StateProvider} from './store/context/ContextManager';
import store from './store/redux';
import {Provider} from 'react-redux';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Provider store={store}>
				{/* NOTE  IF YOU WANT TO USE useContext*/}
				{/* <StateProvider> */}
				<App />
				{/* </StateProvider> */}
			</Provider>
		</Router>
		,
	</React.StrictMode>,
	document.getElementById('root'),
);

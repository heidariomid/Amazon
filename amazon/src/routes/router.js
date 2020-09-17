import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ErrorBoundry from '../Components/Error/ErrorBoundry';
import NotFound from '../Components/NotFound';
import Checkout from '../Components/Basket/Checkout';
import Payment from '../Components/Payment/Payment';
import Login from '../Components/Auth/Login';
import Header from '../Components/Header/Header';
import Product from '../Components/Product/Products';

const PublicRoute = (
	<div className="app">
		<ErrorBoundry>
			<Switch>
				<Route path="/payment">
					<Header />
					<Payment />
				</Route>
				<Route path="/auth/login">
					<Login />
				</Route>
				<Route path="/checkout">
					<Header />
					<Checkout />
				</Route>
				<Route path="/payment" exact={true}>
					<Header />
					<Payment />
				</Route>
				<Route path="/" exact={true}>
					<Header />
					<Product />
				</Route>
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</ErrorBoundry>
	</div>
);
export default PublicRoute;

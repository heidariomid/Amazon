import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ErrorBoundry from '../Components/Error/ErrorBoundry';
import NotFound from '../Components/NotFound';
import Checkout from '../Components/Basket/Checkout';
import Payment from '../Components/Payment/Payment';
import Login from '../Components/Auth/Login';
import Header from '../Components/Header/Header';
import Product from '../Components/Product/Products';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from '../Components/Orders/Orders';

const promise = loadStripe('pk_test_51HSQFEEMAc5fqet6VH567jyWYJM5CA6jrKmjunlaNU0MNjbmytwUlw9ND4GutQpQB0FHIvW1dXc0r4EUSGzAgGBv00Y9L6Hjmm');
const PublicRoute = (
	<>
		<ErrorBoundry>
			<Switch>
				<Route path="/auth/login">
					<Login />
				</Route>
				<Route path="/orders">
					<Orders />
				</Route>
				<Route path="/checkout">
					<Header />
					<Checkout />
				</Route>
				<Route path="/payment" exact={true}>
					<Header />
					<Elements stripe={promise}>
						<Payment />
					</Elements>
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
	</>
);
export default PublicRoute;

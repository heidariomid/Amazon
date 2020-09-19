import React, {useState, useEffect} from 'react';
import styles from './Payment.module.css';
import {connect} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import Product from '../Product/Product';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import axios from '../../API/axios';
import {db} from '../../db/firebase';
import CurrencyFormat from 'react-currency-format';
import {actions} from '../../store/actions';
import {total} from '../../store/reducer/products/productReducer';

const Payment = ({basket, user, emptyBasket}) => {
	const stripe = useStripe();
	const elements = useElements();
	const history = useHistory();
	const [disabled, setDisabled] = useState(true);
	const [error, setError] = useState(null);
	const [processing, setProcessing] = useState('');
	const [succeeded, setSucceeded] = useState(false);
	const [clientSecret, setClientSecret] = useState(true);

	useEffect(() => {
		// generate the special stripe secret which allows us to charge a customer
		const getClientSecret = async () => {
			const response = await axios({
				method: 'post',
				// Stripe expects the total in a currencies subunits
				url: `/payments/create?total=${total(basket) * 100}`,
			});
			setClientSecret(response.data.clientSecret);
		};

		getClientSecret();
	}, [basket]);

	// console.log('THE SECRET IS >>>', clientSecret);
	// console.log('👱', user);

	const renderText = (value) => (
		<>
			<h3>Order Total : {value}</h3>
		</>
	);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setProcessing(true);
		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({paymentIntent}) => {
				console.log(paymentIntent);

				db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
					basket: basket,
					amount: paymentIntent.amount,
					created: paymentIntent.created,
				});

				setSucceeded(true);
				setError(null);
				setProcessing(false);

				emptyBasket();
				history.replace('/orders');
			});
	};

	const handleChange = (e) => {
		setDisabled(e.empty);
		setError(e.error ? e.error.message : '');
	};

	return (
		<div className={styles.payment}>
			<div className={styles.payment_container}>
				<h1>
					Checkout (<Link to="/checkout">{basket?.length} items</Link>)
				</h1>

				{/* Payment section - delivery address */}
				<div className={styles.payment_section}>
					<div className={styles.payment_title}>
						<h3>delivery address</h3>
					</div>
					<div className={styles.payment_address}>
						<p>{user?.email}</p>
					</div>
				</div>

				{/* Payment section - Review Items */}
				<div className={styles.payment_section}>
					<div className={styles.payment_title}>
						<h3>Review items and delivery</h3>
					</div>
					<div className={styles.payment_items}>
						{basket?.map((item) => (
							<Product checkout id={item.id} title={item.title} image={item.image} price={item.price} star={item.star} />
						))}
					</div>
				</div>

				{/* Payment section - Payment method */}
				<div className={styles.payment_section}>
					<div className={styles.payment_title}>
						<h3>Payment Method</h3>
					</div>
					<div className={styles.payment_details}>
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div className="payment_priceContainer">
								<CurrencyFormat renderText={renderText} value={total(basket)} decimalScale={2} displayType={'text'} thousandSeparator={true} prefix={'$'} />
								<button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
								</button>
							</div>
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

const State = (state) => ({user: state.users.user, basket: state.products.items});
const Dispatch = (dispatch) => {
	return {
		emptyBasket: () => {
			dispatch({
				type: actions.EMPTY_BASKET,
				payload: null,
			});
		},
	};
};
export default connect(State, Dispatch)(Payment);

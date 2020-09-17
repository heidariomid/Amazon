import React from 'react';
import styles from './Payment.module.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Product from '../Product/Product';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const apiKey = loadStripe('pk_test_51HSQFEEMAc5fqet6VH567jyWYJM5CA6jrKmjunlaNU0MNjbmytwUlw9ND4GutQpQB0FHIvW1dXc0r4EUSGzAgGBv00Y9L6Hjmm');

const Payment = ({basket, user}) => {
	return (
		<Elements stripe={apiKey}>
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
							<form>
								<CardElement />
							</form>
						</div>
					</div>
				</div>
			</div>
		</Elements>
	);
};

const State = (state) => ({user: state.users.user, basket: state.products.items});
export default connect(State)(Payment);

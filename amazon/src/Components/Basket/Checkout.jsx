import React from 'react';
import {checkout, checkout_left, checkout_title, checkout_right} from './Basket.module.css';
import adBanner from '../../images/ad.gif';
import {connect} from 'react-redux';
import SubTotal from './SubTotal';
import Product from '../Product/Product';
const Checkout = ({basket}) => {
	return (
		<div className={checkout}>
			<div className={checkout_left}>
				<img src={adBanner} alt="ad" />
				<div>
					<h2 className={checkout_title}>Shopping Basket</h2>
					{basket.map((item) => (
						<Product checkout id={item.id} title={item.title} image={item.image} price={item.price} star={item.star} />
					))}
				</div>
			</div>
			<div className={checkout_right}>
				<SubTotal basket={basket} />
			</div>
		</div>
	);
};

const State = (state) => ({basket: state.products.items, messages: state.products.messages, errorMessages: state.products.errorMessages});
export default connect(State)(Checkout);

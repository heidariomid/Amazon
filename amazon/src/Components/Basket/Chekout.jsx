import React from 'react';
import '../../style/Basket.css';
import adBanner from '../../images/ad.gif';
import {connect} from 'react-redux';
import SubTotal from './SubTotal';
const Chekout = ({basket}) => {
	return (
		<div className="checkout">
			<div className="checkout_left">
				<img src={adBanner} alt="ad" />
				<div>
					<h2 className="checkout_title">Shopping Basket</h2>
				</div>
			</div>
			<div className="checkout_right">
				<SubTotal basket={basket} />
			</div>
		</div>
	);
};

const State = (state) => ({basket: state.products.items, messages: state.products.messages, errorMessages: state.products.errorMessages});
export default connect(State)(Chekout);

import React from 'react';
import CurrencyFormat from 'react-currency-format';
import '../../style/SubTotal.css';
const SubTotal = ({basket}) => {
	const renderText = (value) => (
		<>
			<p>
				SubTotal({basket?.lenght} items):
				<strong>{value}</strong>
			</p>
			<small className="subTotal_gif">
				<input type="checkbox" />
				this order contains a gift
			</small>
		</>
	);

	return (
		<div className="subTotal">
			<CurrencyFormat renderText={renderText} value={basket.lenght} decimalScale={2} displayType={'text'} thousandSeparataor={true} prefix={'$'} />
			<button>Procced to Checkout</button>
		</div>
	);
};

export default SubTotal;

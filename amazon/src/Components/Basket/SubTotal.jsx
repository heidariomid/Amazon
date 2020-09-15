import React from 'react';
import CurrencyFormat from 'react-currency-format';
import {useHistory} from 'react-router-dom';
import {subTotal, subTotal_gif} from './SubTotal.module.css';

const SubTotal = ({basket}) => {
	const history = useHistory();
	const total = () => basket?.reduce((a, b) => b.price + a, 0);
	const renderText = (value) => (
		<>
			<p>SubTotal({basket?.length} items):</p>
			<div>
				<strong>{value}</strong>
			</div>
			<small className={subTotal_gif}>
				<input type="checkbox" />
				this order contains a gift
			</small>
		</>
	);

	return (
		<div className={subTotal}>
			<CurrencyFormat renderText={renderText} value={total()} decimalScale={2} displayType={'text'} thousandSeparator={true} prefix={'$'} />
			<button onClick={(e) => history.push('/payment')}>Procced to Checkout</button>
		</div>
	);
};

export default SubTotal;

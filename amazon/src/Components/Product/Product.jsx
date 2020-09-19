import React from 'react';
import NoCover from '../../images/no-cover-book.png';
import {connect} from 'react-redux';
import {actions} from '../../store/actions';
import {product, product_info, product_title, product_price, product_star, product_img} from './Product.module.css';
import {product_checkout, product_info_checkout, product_title_checkout, product_price_checkout, product_star_checkout, product_img_checkout} from './CheckoutProduct.module.css';
const Product = ({checkout, hideBtn, addProduct, removeProduct, id, title = 'No Title Available', price = '-', star = 0, image = NoCover}) => {
	const addToBasket = () => {
		addProduct({
			id,
			title,
			price,
			star,
			image,
		});
	};
	return !checkout ? (
		<div className={product}>
			<div className={product_info}>
				<p className={product_title}>{title}</p>
				<p className={product_price}>
					<small>$</small>
					<strong> {price} </strong>
				</p>
				<div className={product_star}>
					{Array(star)
						.fill()
						.map(() => (
							<p>⭐️</p>
						))}
				</div>
			</div>
			<img className={product_img} src={image} alt="book" />
			{!hideBtn && <button onClick={addToBasket}>Add to Basket</button>}
		</div>
	) : (
		<div className={product_checkout}>
			<img className={product_img_checkout} src={image} alt="book" />

			<div className={product_info_checkout}>
				<p className={product_title_checkout}>{title}</p>
				<p className={product_price_checkout}>
					<small>$</small>
					<strong> {price} </strong>
				</p>
			</div>
			<button onClick={() => removeProduct({id})}>Remove</button>
		</div>
	);
};

const State = (state) => ({productState: state.products.items, messages: state.products.messages, errorMessages: state.products.errorMessages});
const Dispatch = (dispatch) => {
	return {
		addProduct: (payload) => {
			dispatch({
				type: actions.ADD_PRODUCT,
				payload,
			});
		},
		removeProduct: (payload) => {
			dispatch({
				type: actions.REMOVE_PRODUCT,
				payload,
			});
		},
	};
};
export default connect(State, Dispatch)(Product);

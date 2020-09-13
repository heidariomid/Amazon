import React from 'react';
import '../../style/Product.css';
import NoCover from '../../images/no-cover-book.png';
import {connect} from 'react-redux';
import {actions} from '../../store/actions';
const Product = ({addProduct, id, title = 'No Title Available', price = '-', star = 0, image = NoCover}) => {
	const addToBasket = () => {
		addProduct({
			id,
			title,
			price,
			star,
			image,
		});
	};
	return (
		<div className="product">
			<div className="product_info">
				<p className="product_title">{title}</p>
				<p className="product_price">
					<small>$</small>
					<strong> {price} </strong>
				</p>
				<div className="product_star">
					{Array(star)
						.fill()
						.map(() => (
							<p>⭐️</p>
						))}
				</div>
			</div>
			<img className="product_img" src={image} alt="book" />
			<button onClick={addToBasket}>Add to basket</button>
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
	};
};
export default connect(State, Dispatch)(Product);

import React from 'react';
import AmazonLogo from '../../images/Amazon-Logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../../style/Header.css';
const Header = ({basket}) => {
	return (
		<div className="header">
			<Link to="/">
				<img className="header_logo" src={AmazonLogo} alt="logo" />
			</Link>
			<div className="search">
				<input className="search_input" type="text" />
				<SearchIcon className="search_icon" />
			</div>
			<div className="nav">
				<div className="nav_options">
					<span className="nav_title_1">Hello</span>
					<span className="nav_title_2">Sign in</span>
				</div>
				<div className="nav_options">
					<span className="nav_title_1">Returns</span>
					<span className="nav_title_2">& Orders</span>
				</div>
				<div className="nav_options">
					<span className="nav_title_1">Your</span>
					<span className="nav_title_2">Prime</span>
				</div>
			</div>
			<Link to="/chekout">
				<div className="header_basket">
					<ShoppingBasketIcon />
					<span className="nav_title_2 header_basket_count">{basket.length}</span>
				</div>
			</Link>
		</div>
	);
};

const State = (state) => ({basket: state.products.items, messages: state.products.messages, errorMessages: state.products.errorMessages});
export default connect(State)(Header);

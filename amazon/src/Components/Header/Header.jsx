import React from 'react';
import AmazonLogo from '../../images/Amazon-Logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import styles from './Header.module.css';
import cx from 'classnames';
const Header = ({basket}) => {
	return (
		<div className={styles.header}>
			<Link to="/">
				<img className={styles.header_logo} src={AmazonLogo} alt="logo" />
			</Link>
			<div className={styles.search}>
				<input className={styles.search_input} type="text" />
				<SearchIcon className={styles.search_icon} />
			</div>
			<div className={styles.nav}>
				<Link to="/auth/login">
					<div className={styles.nav_options}>
						<span className={styles.nav_title_1}>Hello</span>
						<span className={styles.nav_title_2}>Sign in</span>
					</div>
				</Link>
				<div className={styles.nav_options}>
					<span className={styles.nav_title_1}>Returns</span>
					<span className={styles.nav_title_2}>& Orders</span>
				</div>
				<div className={styles.nav_options}>
					<span className={styles.nav_title_1}>Your</span>
					<span className={styles.nav_title_2}>Prime</span>
				</div>
			</div>
			<Link to="/chekout">
				<div className={styles.header_basket}>
					<ShoppingBasketIcon />
					<span className={cx(styles.nav_title_2, styles.header_basket_count)}>{basket.length}</span>
				</div>
			</Link>
		</div>
	);
};

const State = (state) => ({basket: state.products.items, messages: state.products.messages, errorMessages: state.products.errorMessages});
export default connect(State)(Header);

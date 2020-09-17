import React from 'react';
import AmazonLogo from '../../images/Amazon-Logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import styles from './Header.module.css';
import {auth} from '../../db/firebase';
import cx from 'classnames';
const Header = ({basket, user}) => {
	const handleAuthenticaton = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<div className={styles.header}>
			<Link to="/">
				<img className={styles.header_logo} src={AmazonLogo} alt="logo" />
			</Link>
			<div className={styles.search}>
				<input className={styles.search_input} type="text" />
				<SearchIcon className={styles.search_icon} />
			</div>
			<div className={styles.nav} onClick={handleAuthenticaton}>
				<Link to={!user && '/auth/login'}>
					<div className={styles.nav_options}>
						<span className={styles.nav_title_1}>Hello {!user ? 'Guest' : user.email}</span>
						<span className={styles.nav_title_2}>{user ? 'Sign Out' : 'Sign In'}</span>
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
			<Link to="/checkout">
				<div className={styles.header_basket}>
					<ShoppingBasketIcon />
					<span className={cx(styles.nav_title_2, styles.header_basket_count)}>{basket.length}</span>
				</div>
			</Link>
		</div>
	);
};

const State = (state) => ({basket: state.products.items, user: state.users.user});
export default connect(State)(Header);

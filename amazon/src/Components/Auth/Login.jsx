import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import {actions} from '../../store/actions';
import {Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {auth} from '../../db/firebase';
import Logo from '../../images/Amazon_Logo_Black.png';
import styles from './Login.module.css';
const Login = ({setUser}) => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signInHandler = (e) => {
		e.preventDefault();

		auth.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push('/');
			})
			.catch((error) => alert(error.message));
	};

	const registerHandler = (e) => {
		e.preventDefault();

		auth.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				// it successfully created a new user with email and password
				if (auth) {
					history.push('/');
				}
			})
			.catch((error) => alert(error.message));
	};
	return (
		<div className={styles.login}>
			<Link to="/">
				<img className={styles.login__logo} src={Logo} alt="logo" />
			</Link>
			<div className={styles.login__container}>
				<h1>Sign-in</h1>

				<form>
					<h5>E-mail</h5>
					<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

					<h5>Password</h5>
					<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

					<button type="submit" onClick={signInHandler} className={styles.login__signInButton}>
						Sign In
					</button>
				</form>

				<p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
				<Button className={styles.login__registerButton} onClick={registerHandler}>
					Create Account
				</Button>
			</div>
		</div>
	);
};

const Dispatch = (dispatch) => {
	return {
		setUser: (payload) => {
			dispatch({
				type: actions.AUTHENTICATION,
				payload,
			});
		},
	};
};
export default connect(null, Dispatch)(Login);

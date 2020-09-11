import React from 'react';
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

const Users = () => {
	return (
		<div>
			<h2>Welcom to User Component</h2>
			<Link to="/">
				<HomeIcon />
				back to
			</Link>
		</div>
	);
};

export default Users;

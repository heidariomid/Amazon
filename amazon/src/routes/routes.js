import NotFound from '../Components/NotFound';
import Users from '../Components/User/Users';
import Home from '../Components/Home/Home';
const routes = [
	{
		path: '/',
		exact: true,
		component: Home,
	},
	{
		path: '/user',
		exact: true,
		component: Users,
	},
	{
		component: NotFound,
	},
];

export default routes;

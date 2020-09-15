import NotFound from '../Components/NotFound';
import Chekout from '../Components/Basket/Chekout';
import Home from '../Components/Home/Home';
import Payment from '../Components/Payment/Payment';
import Login from '../Components/Auth/Login';
const routes = [
	{
		path: '/',
		exact: true,
		component: Home,
	},
	{
		path: '/chekout',
		exact: true,
		component: Chekout,
	},
	{
		path: '/payment',
		exact: true,
		component: Payment,
	},
	{
		path: '/auth/login',
		exact: true,
		component: Login,
	},
	{
		component: NotFound,
	},
];

export default routes;

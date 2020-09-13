import NotFound from '../Components/NotFound';
import Chekout from '../Components/Basket/Chekout';
import Home from '../Components/Home/Home';
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
		component: NotFound,
	},
];

export default routes;

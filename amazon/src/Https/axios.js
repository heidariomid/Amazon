import axios from 'axios';
class Axios {
	constructor() {
		this.defaultURL = 'http://localhost:7400';
	}
	get(url) {
		return axios.get(`${this.defaultURL}/${url}`);
	}
	post(url, data, headers) {
		return axios.post(`${this.defaultURL}/${url}`, data, headers);
	}
}
export default Axios;

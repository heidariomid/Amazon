import fireBase from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyCzme961DIdtNx1k-Dc0WNwp8idtRTKmp4',
	authDomain: 'fir-27f8b.firebaseapp.com',
	databaseURL: 'https://fir-27f8b.firebaseio.com',
	projectId: 'fir-27f8b',
	storageBucket: 'fir-27f8b.appspot.com',
	messagingSenderId: '169336782865',
	appId: '1:169336782865:web:b14946a3bc5020788731b0',
};

const fireBaseApp = fireBase.initializeApp(firebaseConfig);
const db = fireBaseApp.firestore();
const auth = fireBase.auth();
export {db, auth};

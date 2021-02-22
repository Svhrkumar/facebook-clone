import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAwTwbj231lqyeth8WlnOYp0N2yyHfV-rw',
	authDomain: 'facebook-e1bca.firebaseapp.com',
	databaseURL: 'https://facebook-e1bca.firebaseio.com',
	projectId: 'facebook-e1bca',
	storageBucket: 'facebook-e1bca.appspot.com',
	messagingSenderId: '637289096915',
	appId: '1:637289096915:web:48ad681299042074945626',
	measurementId: 'G-BLDDJWK3NX',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

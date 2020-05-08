import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAdOi2r-6CnIorK_XpeUz7jlG1TkUQbYUM',
	authDomain: 'clone-instagram-9dbb5.firebaseapp.com',
	databaseURL: 'https://clone-instagram-9dbb5.firebaseio.com',
	projectId: 'clone-instagram-9dbb5',
	storageBucket: 'clone-instagram-9dbb5.appspot.com',
	messagingSenderId: '847527411540',
	appId: '1:847527411540:web:aa2fe4ce9a8b8ba54912c1',
};
// Initialize Firebase

export default firebase.initializeApp(firebaseConfig);

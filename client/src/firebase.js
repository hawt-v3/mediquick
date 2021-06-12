import "firebase/analytics";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/performance";
import "firebase/storage";

const clientCredentials = {
	apiKey: 'AIzaSyD_Oqv_i4AwNmPPK1ICMc4EzAbj_oARggk',
	authDomain: "kyoi-dev.firebaseapp.com",
	databaseURL: "https://kyoi-dev-default-rtdb.firebaseio.com",
	projectId: "kyoi-dev",
	storageBucket: "kyoi-dev.appspot.com",
	messagingSenderId: "207661453937",
	appId: "1:207661453937:web:ecb724e3a16165f961c1d0",
	measurementId: "G-TRNWG2NXW9",
};

if (!firebase.apps.length) {
	firebase.initializeApp(clientCredentials);
	// Check that `window` is in scope for the analytics module!
	if (typeof window !== "undefined") {
		// Enable analytics. https://firebase.google.com/docs/analytics/get-started
		if ("measurementId" in clientCredentials) {
			firebase.analytics();
			firebase.performance();
		}
	}
}

export default firebase;
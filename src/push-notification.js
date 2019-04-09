import firebase from 'firebase';
import { firebaseWaiters } from './services/waitersService';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

export const initializeFirebase = () => {
  firebase.initializeApp(config);
  navigator.serviceWorker
    .register('../src/sources/firebase-messaging-sw.js')
    .then((registration) => {
      firebase.messaging().useServiceWorker(registration);
  });
}

export const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    const waiter = {
      id: "5cab814d2f185f2ea8d45b83", //harcodeado para que funcione, id del camarero
      token: token
    }
    console.log('token de usuario: ', token);
    firebaseWaiters(waiter);
    return token;
  } catch (error) {
    console.error(error);
  }
}
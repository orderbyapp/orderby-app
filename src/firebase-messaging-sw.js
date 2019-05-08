importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase.js');
importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase-messaging.js');

var config = {
  apiKey: "AIzaSyD8O1xPrTZawSz7BbpuvP6-ugPeO_FOmvc",
  authDomain: "orderby-a08ae.firebaseapp.com",
  databaseURL: "https://orderby-a08ae.firebaseio.com",
  projectId: "orderby-a08ae",
  storageBucket: "orderby-a08ae.appspot.com",
  messagingSenderId: "401884005336"
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

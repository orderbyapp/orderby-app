importScripts('https://www.gstatic.com/firebasejs/5.8.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.8.4/firebase-messaging.js');



firebase.initializeApp({messagingSenderId : '401884005336'});
const messaging = firebase.messaging();
// self.addEventListener('notificationclick', function(event) {
//   console.log('[Service Worker] Notification click Received.');
//   event.notification.close();
//   event.waitUntil(
//     clients.openWindow('http://localhost:3000/#/messages/')
//   );
// });
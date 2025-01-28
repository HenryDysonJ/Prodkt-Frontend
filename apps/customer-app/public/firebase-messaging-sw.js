/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');
firebase.initializeApp({
  apiKey: 'AIzaSyBv9_VGhZHc9lEFeMW-9qNqs2VggcnZugo',
  authDomain: 'prodkt-dev.firebaseapp.com',
  projectId: 'prodkt-dev',
  storageBucket: 'prodkt-dev.appspot.com',
  messagingSenderId: '675497896221',
  appId: '1:675497896221:web:9a81bc11907eee578ed9f4',
});
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
firebase.messaging();

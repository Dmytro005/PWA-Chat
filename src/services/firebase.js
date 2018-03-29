import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCU6Q3mZ7IoGfWHJp2743NUX8WsmlexsIc',
  authDomain: 'cropchat-8364d.firebaseapp.com',
  databaseURL: 'https://cropchat-8364d.firebaseio.com',
  projectId: 'cropchat-8364d',
  storageBucket: 'cropchat-8364d.appspot.com',
  messagingSenderId: '687724710074'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}

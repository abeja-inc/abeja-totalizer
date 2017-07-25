import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DATABASE_URL
}
const firebaseApp = firebase.initializeApp(config)

export default {
  firebaseApp
}

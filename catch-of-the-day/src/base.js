import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBHIt7djRp3ySdjX-F9-u7_3LhcDPLxDnk",
  authDomain: "catch-of-the-day-6186e.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-6186e-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());
//This is a named export
export { firebaseApp };
//This is a default export
export default base;

const firebase = require('firebase')
exports.c = () =>{

    const config = {
        apiKey: "AIzaSyBpp2d2JrsoLqZSF5NeGnFe7VIepABmxk8",
        authDomain: "testlogin-e65d7.firebaseapp.com",
        databaseURL: "https://testlogin-e65d7.firebaseio.com",
        projectId: "testlogin-e65d7",
        storageBucket: "testlogin-e65d7.appspot.com",
        messagingSenderId: "692937486711",
        appId: "1:692937486711:web:961ad8cc334ce744d37172",
        measurementId: "G-N838SD313D"
    };
    
    firebase.initializeApp(config); 
    return firebase
}
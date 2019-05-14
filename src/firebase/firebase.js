import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBkZGLfeqddRC7-FICXGjrkNOzdT6LdVpM",
    authDomain: "expensify-a16ee.firebaseapp.com",
    databaseURL: "https://expensify-a16ee.firebaseio.com",
    projectId: "expensify-a16ee",
    storageBucket: "expensify-a16ee.appspot.com",
    messagingSenderId: "98554056753",
    appId: "1:98554056753:web:8e28435d6418ac92"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name: 'Khalid Issa',
    age: 35,
    isSingle:true,
    location: {
        city: 'Maroua',
        country: 'Cameroon'
    }
});

// database.ref().set('This is my Data.!');
database.ref('age').set(39);
database.ref('location/city').set('Ndjamena');
database.ref('attrbutes').set({
    height: '181 cm',
    weight: '81 kg'
});
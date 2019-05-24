import * as firebase from 'firebase';


const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    // appId: "1:98554056753:web:8e28435d6418ac92"
}; 

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider,  database as default };


// //child_remove

// database.ref('expensee').on('child_removed', (snap) => {
//     console.log(snap.key, snap.val());
// });

// //child_changed


// database.ref('expensee').on('child_changed', (snap) => {
//     console.log(snap.key, snap.val());
// });

// //child_added

// database.ref('expensee').on('child_added', (snap) => {
//     console.log(snap.key, snap.val());
// });


// // database.ref('expensee')
// // .once('value')
// // .then((snap) => {
// //  const expenses = [];
 
// //  snap.forEach((childSnap) => {
// //    expenses.push({
// //        id: childSnap.key,
// //        ...childSnap.val()
// //    });
// //  });

// //  console.log(expenses);
// // });

// // database.ref('expensee').on('value', (snap) => {
// //      const expenses = [];

// //       snap.forEach((childSnap) => {
// //         expenses.push({
// //             id: childSnap.key,
// //             ...childSnap.val()
// //         });
// //       });

// //       console.log(expenses);
// // });


// database.ref('expensee').push({
//     description: 'Firebase is roll it',
//     note: 'I did it',
//     amount: 350,
//     createdAt: 5050
// });


// // database.ref().on('value', (snap) => {
// //     const val = snap.val()
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// // })










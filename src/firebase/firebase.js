import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:735012570566:web:5545a13846102457375ec7",
  measurementId: "G-3RP04JC1SR"
};

firebase.initializeApp(config);
const database=firebase.database();



export {firebase, database as default}; 
















// const expenses = [
// ];

// database.ref('expenses').push({
//   description: 'sapopo',
//   note: 'sibpopo',
//   amount: 2902902,
//   createdAt: 700
// },
// );

// // database.ref().set({
// //   name: 'Spopox',
// //   age: 26,
// //   isSingle: false,
// //   location: {
// //     city: 'Casablanca',
// //     country: 'Morocco'
// //   }
// // }).then(()=>{
// //   console.log('Data is changed');
// // }).catch((error)=>{
// //   console.log('Thisfailed', error)
// // });

// // database.ref('attributes').set({
// //   height: '1.95m',
// //   weight: '70kg'
// // });

// // database.ref('isSingle').remove().then(()=>{
// //   console.log('did changeeeeee')
// // }).catch((e=>{

// // }));
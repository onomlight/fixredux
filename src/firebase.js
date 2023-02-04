// //firebase.js
// import firebase from "firebase/compat/app"
// import 'firebase/compat/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyD6CPgwlimQ6LkySYhYYnxXCXYypmovyy4",
//     authDomain: "redux-54695.firebaseapp.com",
//     databaseURL: "https://redux-54695-default-rtdb.firebaseio.com",
//     projectId: "redux-54695",
//     storageBucket: "redux-54695.appspot.com",
//     messagingSenderId: "892889888497",
//     appId: "1:892889888497:web:314de915af85bd15391b50",
//     measurementId: "G-FTCBL7CRFK"
//   };

// // firebaseConfig 정보로 firebase 시작
// firebase.initializeApp(firebaseConfig);

// // firebase의 firestore 인스턴스를 변수에 저장
// const firestore = firebase.firestore();

// // 필요한 곳에서 사용할 수 있도록 내보내기
// // 다른 곳에서 불러올때 firestore로 불러와야 함!!
// export { firestore };
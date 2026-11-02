// Firebase 配置与数据库初始化
const firebaseConfig = {
  apiKey: "AIzaSyCUVqZIgK8YKNAQkZLyA7mHq0qHbPE4RQk",
  authDomain: "online-study-3a.firebaseapp.com",
  databaseURL: "https://online-study-3a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "online-study-3a",
  storageBucket: "online-study-3a.firebasestorage.app",
  messagingSenderId: "641152608367",
  appId: "1:641152608367:web:c6a1a0920d1988d156c59a"
};

let db = null;
try {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  db = firebase.database();
} catch (e) {
  console.warn("Firebase initialized already or in offline mode", e);
}

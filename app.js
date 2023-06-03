
import { initializeApp } from    "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = initializeApp({
    apiKey: "AIzaSyAS9ViZ5HWfw34gr5ImcuamPOUyzPxZFQI",
    authDomain: "req-wapp.firebaseapp.com",
    projectId: "req-wapp",
    storageBucket: "req-wapp.appspot.com",
    messagingSenderId: "1021089302346",
    appId: "1:1021089302346:web:68fe95c6c1d11a973223b3",
    measurementId: "G-PXM0LBGN09"
  });
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth= getAuth(firebaseApp)
  const gfirestore= getFirestore(firebaseApp)
//   const db= getFirestore(firebaseApp)

  var db =firebase.firestore()

// form acccessed
  var form=document.querySelector("#enter message");

  form.addEventListener("submit",function(e)
  {
    e.preventDefault();
    console.log(form.message.value)
  })
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCMXbpW6i6USYfjekVS1xEzhx7jOTC1Uv0",
  authDomain: "vue-fire-auth-710e8.firebaseapp.com",
  projectId: "vue-fire-auth-710e8",
  storageBucket: "vue-fire-auth-710e8.appspot.com",
  messagingSenderId: "22194701377",
  appId: "1:22194701377:web:ef869dbd18ff421f84f2c0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}
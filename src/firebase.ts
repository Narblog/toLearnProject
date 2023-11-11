import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCq_tY1MV2KQtBzOXe9IeDheduFWxXTMAo",
  authDomain: "tolearn-project.firebaseapp.com",
  projectId: "tolearn-project",
  storageBucket: "tolearn-project.appspot.com",
  messagingSenderId: "493661763491",
  appId: "1:493661763491:web:b5e4cbe7b6f36ca1ee0c16"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app }
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInitializeTion = () => {
    return initializeApp(firebaseConfig);
}
export default firebaseInitializeTion;
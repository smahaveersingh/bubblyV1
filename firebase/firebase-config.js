import * as firebase from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore, doc} from "firebase/firestore";
import * as storage from "firebase/storage";


const firebaseconfig = {
    apiKey: "AIzaSyCG4s0HuhEDELLUsZG3cI_J2N29IMqj9-c",
    authDomain: "bubblyv1-3a354.firebaseapp.com",
    databaseURL: "https://bubblyv1-3a354-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bubblyv1-3a354",
    storageBucket: "bubblyv1-3a354.appspot.com",
    messagingSenderId: "88794629131",
    appId: "1:88794629131:web:bc0831ee55e00dc4ae730e",
    measurementId: "G-SB5K0TMJNZ"
};

const app = firebase.initializeApp(firebaseconfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
export const referenceSupport = doc(db, 'users/21-01-2022');
export const filestorage = storage.getStorage(app);
// Create a storage reference from firebase storage service
export const storageRef = storage.ref(filestorage);


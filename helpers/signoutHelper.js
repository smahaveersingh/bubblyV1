import { signOut } from "firebase/auth";
import { authentication } from "../firebase/firebase-config";

export const signoutHelper = ({navigation}) => {
    signOut(authentication)
    .then((re) => {
        //setisSignedIn(false);
        console.log('signout succesfull!!! ')
        console.log(re)
        navigation.navigate("SignIn");
    })
    .catch((re)=>{
        console.log(re);
    })
}

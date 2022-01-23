import React, { useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from "react-native";
import { FONTS, SIZES, COLORS, icons, } from "../../constants"
import { AuthLayout } from "../";
import {
    CustomSwitch,
    FormInput,
    TextButton,
    TextIconButton
} from "../../components"
import { utils } from "../../utils";
import { authentication } from "../../firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";


const SignIn = ({ navigation }) => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [emailError, setEmailError] = React.useState("")
    const [isSignedIn, setisSignedIn] = React.useState(false)
    
    const [showPass, setShowPass] = React.useState(false)
    const [saveMe, setSaveMe] = React.useState(false)
  
    global.Myemail = email;


    function isEnableSignIn() {
        return email != "" && password != "" && emailError == ""
    }

    const SignInUser = () => {
        signInWithEmailAndPassword(authentication, email, password)
        .then((re)=>{
            console.log(re);
            const createdAt = re.user;
            console.log("creadted At" + JSON.stringify(createdAt));
            //console.log('User Details:' + userDetails);
            //SetUserData();
            navigation.navigate("Home", {
                paramKey: email
            });
            setisSignedIn(true);
        })
        .catch((re)=>{
            console.log(re);
            errorCode = re.code;
            errorMessage = re.message;
          if (errorCode === 'auth/wrong-password') {
            console.log("Wrong password");
            alert('Wrong password.');
          } else {
            console.log("Navigate to Home");
            navigation.navigate("Home");
            setisSignedIn(false);
          }
        })
    } 

    function getDocumentID(){
        const user = authentication.currentUser;
        var uid = '';
        if (user !== null) {
            const displayName = user.displayName;
            const email = user.email;
            uid = user.uid;
            console.log('UID: ' + uid + ' Name: ' + displayName);
        }       
        return uid;
    }

    const SetUserData = async () => {
        await setDoc(doc(db, "users", getDocumentID()),{
            address: "Not Updated",
            dob: "Not Updated",
            email: email,
            gender: "Not Updated",
            name: "Not Updated",
            number: "Not Updated"
        });
        //GetData();
        //console.log(path)
    }


    
    return(
        <AuthLayout
            title="Let's Sign You In"
            subtitle="Welcome back, you've been missed!"
        >
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.height > 800 ? SIZES.padding * 2 : SIZES.radius
                }}
            >
                {/* Form Inputs */}
                <FormInput
                    label="Email"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    value={email}
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={(email == "") || (email != "" && emailError == "") ? icons.correct : icons.cancel}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: (email == "") ? COLORS.gray : (email != "" && emailError == "") ? COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }
                />

                <FormInput
                    label="Password"
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    value={password}
                    onChange={(value) => setPassword(value)}
                    appendComponent={
                        <TouchableOpacity
                            style={{
                                width: 40,
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                            }}
                            onPress={() => setShowPass(!showPass)}
                        >
                            <Image
                                source={showPass ? icons.eye_close : icons.eye}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.gray
                                }}
                            />
                        </TouchableOpacity>
                    }
                />

                {/* Save me & Forgot pass */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'space-between'
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <CustomSwitch
                            label="Save Me"
                            value={saveMe}
                            onChange={(value) => setSaveMe(value)}
                        />
                    </View>
                    <TextButton
                        label="Forgot Password?"
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.gray,
                            ...FONTS.body4
                        }}
                        onPress={() => navigation.navigate("ForgotPassword")}
                    />
                </View>

                {/* Sign In & Sign Up */}
                <TextButton
                    label="Sign In"
                    disabled={isEnableSignIn() ? false : true}
                    buttonContainerStyle={{
                        height: 55,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnableSignIn() ? COLORS.primary : COLORS.transparentPrimary,
                    }}
                    onPress={SignInUser}
                />

                {/* Sign Up */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>Don't have an account? </Text>
                    <TextButton
                        label="Sign Up"
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => navigation.navigate("SignUp")}
                    />
                </View>
              
            </View>

            {/* Footer */}
            <View>
                <TextIconButton
                    containerStyle={{
                        height: 50,
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.blue,
                    }}
                    icon={icons.fb}
                    iconPosition="LEFT"
                    iconStyle={{
                        tintColor: COLORS.white
                    }}
                    label="Continue With Facebook"
                    labelStyle={{
                        marginLeft: SIZES.radius,
                        color: COLORS.white
                    }}
                    onPress={() => navigation.replace("Home")}
                />

                <TextIconButton
                    containerStyle={{
                        height: 50,
                        alignItems: 'center',
                        marginTop: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray2,
                    }}
                    icon={icons.google}
                    iconPosition="LEFT"
                    iconStyle={{
                        tintColor: null
                    }}
                    label="Continue With Google"
                    labelStyle={{
                        marginLeft: SIZES.radius,
                    }}
                    onPress={() => navigation.replace("Home")}
                />
            </View>
        </AuthLayout>
    )

}

export default SignIn;
import React, { useEffect } from 'react';
import {
    View,
    ScrollView,
    SafeAreaView,
    RefreshControl
} from 'react-native';

import {
    Header,
    IconButton,
    TextButton,
    InfoItem
} from "../../components"
import { COLORS, SIZES, icons } from "../../constants";
import { db, authentication } from '../../firebase/firebase-config';
import { doc, getDoc} from 'firebase/firestore';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

const MyAccount = ({ navigation }) => {

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
      GetUserData();
    }, []);


    const GetUserData = async () => {
        const user = authentication.currentUser;
        var uid = '';
        if (user !== null) {
            const displayName = user.displayName;
            const email = user.email;
            uid = user.uid;
            console.log('UID: ' + uid + ' Name: ' + displayName) + ' email: ' + email;
        }
        
        const docRef = doc(db, 'users', uid);
        const docSnap = await getDoc(docRef);
        const object = {};
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            console.log('Object Data: ' + object)
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }

     }

    function renderHeader() {
        return (
            <Header
                title="MY ACCOUNT"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray2,
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2
                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={
                    <TextButton
                        label="Edit"
                        labelStyle={{
                            color: COLORS.primary
                        }}
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        onPress={() => navigation.navigate("MyAccountEdit")}
                    />
                }
            />
        )
    }

    function renderSectionOne() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius,
                    paddingHorizontal: SIZES.radius,
                    backgroundColor: COLORS.lightGray2
                }}
            >
                <InfoItem
                    label="Full Name"
                    value="ByProgrammers"
                />

                <InfoItem
                    label="Phone Number"
                    value="111-222-3333"
                />

                <InfoItem
                    label="User ID"
                    value="1111 2222"
                    withDivider={false}
                />
            </View>
        )
    }

    function renderSectionTwo() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius,
                    paddingHorizontal: SIZES.radius,
                    backgroundColor: COLORS.lightGray2
                }}
            >
                <InfoItem
                    label="ID Card"
                    value="Not updated"
                />

                <InfoItem
                    label="Date of Birth"
                    value="03/03/1990"
                />

                <InfoItem
                    label="Gender"
                    value="Male"
                />

                <InfoItem
                    label="Joined"
                    value="March 2017"
                />

                <InfoItem
                    label="Email"
                    value="{global.Myemail}"
                />

                <InfoItem
                    label="Address"
                    value="Jalan Padungan, 93100 Kuching, Sarawak, Malaysia"
                    withDivider={false}
                />
            </View>
        )
    }

    useEffect(() => {
        //GetUserData();
    })

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {renderHeader()}
            
            <SafeAreaView 
                style={{
                    flex: 1
                }}
            >
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding
                }}
                refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
                }
            >
                {renderSectionOne()}
                {renderSectionTwo()}
            </ScrollView>                
            </SafeAreaView>

        </View>
    )
}

export default MyAccount;
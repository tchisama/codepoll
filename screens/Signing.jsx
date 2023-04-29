import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { colors } from "../public/Colors";
import { UserContext } from "../context/userContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth as Auth, UserColRef } from "../firebase";



import { v4 as uuidv4 } from 'uuid';
import { addDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Signing = ({ navigation }) => {
  const [singup, setSignup] = useState(false);

  const { auth, setAuth } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signingHandler = () => {
    if (singup) {
        let id =  new Date().getTime().toString() 
      createUserWithEmailAndPassword(Auth, email, password).then((cred) => {
        addDoc(UserColRef, {
            avatar: '',
            userId: cred.user.uid,
            userName: name,
            createdAt: id,
            donePosts:["default"]
        }).then(() => {
            setAuth({ ...cred.user, displayName: name });
            AsyncStorage.setItem("auth",JSON.stringify(cred.user))
            navigation.navigate("Home");
        });
      });
    }else{
        signInWithEmailAndPassword(Auth,email,password).then((res)=>{
            AsyncStorage.setItem("auth",JSON.stringify(res.user))
            setAuth(res.user)
        }).then(()=>{
            navigation.navigate("Home");
        })
    }
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.backgroundDark }}
      className="flex-1 pt-10 justify-center"
    >
      <View
        style={{ backgroundColor: colors.background }}
        className="py-8 mx-3 rounded-lg"
      >
        <Text style={{ color: colors.white }} className="text-4xl p-4">
          {singup ? "Sign Up" : "Sign In"}
        </Text>

        {singup && (
          <View className="p-0 px-4">
            <Text style={{ color: colors.white }} className="text-md py-2">
              User name
            </Text>
            <TextInput
              style={{
                backgroundColor: colors.backgroundDark,
                borderColor: colors.button,
              }}
              value={name}
              onChangeText={setName}
              className="rounded-lg py-2 px-3 border text-white"
            ></TextInput>
          </View>
        )}

        <View className="p-0 px-4">
          <Text style={{ color: colors.white }} className="text-md py-2">
            Email
          </Text>
          <TextInput
          keyboardType="email-address"
            style={{
              backgroundColor: colors.backgroundDark,
              borderColor: colors.button,
            }}
            value={email}
            onChangeText={setEmail}
            className="rounded-lg py-2 px-3 border text-white"
          ></TextInput>
        </View>
        <View className="p-0 px-4">
          <Text style={{ color: colors.white }} className="text-md py-2">
            Password
          </Text>
          <TextInput
            value={password}
            secureTextEntry={true} 
            onChangeText={setPassword}
            style={{
              backgroundColor: colors.backgroundDark,
              borderColor: colors.button,
            }}
            className="rounded-lg py-2 px-3 border text-white"
          ></TextInput>
        </View>

        <View className="p-2 px-4 justify-end items-end">
          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              borderColor: colors.button,
            }}
            onPress={signingHandler}
            className="rounded-lg py-2 px-4 border "
          >
            <Text style={{ color: colors.backgroundDark }} className="text-md ">
              {singup ? "Sign Up" : "Sign In"}
            </Text>
          </TouchableOpacity>
        </View>

        <View className="pt-4 px-4 flex-row">
          <Text
            style={{ color: colors.white }}
            className="flex-row items-center"
          >
            {singup
              ? "You have already an account"
              : "You don't have an account "}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setSignup((p) => !p);
            }}
            className=" px-4 "
          >
            <Text className="text-white ">{singup ? "signin" : "signup"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signing;

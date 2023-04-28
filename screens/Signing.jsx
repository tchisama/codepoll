import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors } from "../public/Colors";

const Signing = () => {
  const [singup, setSignup] = useState(true);

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.backgroundDark }}
      className="flex-1 pt-10 justify-center"
    >
      <View style={{backgroundColor:colors.background}} className="py-8 mx-3 rounded-lg">
        <Text style={{ color: colors.white }} className="text-4xl p-4">
                    {
                        singup? "Sign Up":"Sign In"
                    }
        </Text>
        <View className="p-0 px-4">
          <Text style={{ color: colors.white }} className="text-lg py-2">
            Email
          </Text>
          <TextInput
            style={{
              backgroundColor: colors.backgroundDark,
              borderColor: colors.button,
            }}
            className="rounded-lg py-2 px-3 border text-white"
          ></TextInput>
        </View>
        <View className="p-0 px-4">
          <Text style={{ color: colors.white }} className="text-lg py-2">
            Password
          </Text>
          <TextInput
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
              backgroundColor: colors.backgroundDark,
              borderColor: colors.button,
            }}
            className="rounded-lg py-2 px-4 border text-white"
          >
          <Text style={{ color: colors.white }} className="text-lg ">
                    {
                        singup? "Sign Up":"Sign In"
                    }
          </Text>
          </TouchableOpacity>
        </View>

        <View className="pt-4 px-4 flex-row">
            <Text style={{color:colors.white}} className="flex-row items-center">
                    {
                        singup? "You have already an account":"You don't have an account "
                    }
            </Text>
            <TouchableOpacity onPress={()=>{setSignup(p=>!p)}} className=" px-4 ">
                <Text className="text-white ">
                    {
                        singup? "signin":"signup"
                    }
                </Text>
            </TouchableOpacity> 
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signing;

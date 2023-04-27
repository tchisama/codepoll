import { View, Text, TouchableOpacity, ImageComponent } from "react-native";
import React from "react";
import { colors } from "../../public/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const Post = () => {
  return (
    <View
      style={{ backgroundColor: colors.background, borderColor: colors.border }}
      className="w-full rounded-xl p-2 my-3 border"
    >
      <View className="flex-row justify-between items-start">
        <View className="flex-row gap-x-2">
          <View className="w-10 h-10 bg-[#0006] rounded-full"></View>
          <View>
            <Text style={{ color: colors.white }}>user name</Text>
            <Text className="text-yellow-200 text-xs">JavaScript</Text>
            <View className="flex-row gap-x-1 items-center">
              <Text className="text-xs text-gray-600">
                100 people
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: colors.button,
            borderColor: colors.buttonBorder,
          }}
          className="flex-row border justify-center rounded-full p-2 items-center "
        >
              <Text className="text-xs mr-1" style={{ color: colors.white }}>
                15
              </Text>
          <Ionicons name="heart" size={12} color={colors.white} />
        </TouchableOpacity>
      </View>
      <Text className="px-1 pt-4 " style={{color:colors.white}} >
            what is the result of this code ? {"\n"} 
            var a = “hello” ;{"\n"}
            var b = a + “ world” ;{"\n"}
            console.log(b){"\n"}
      </Text>
      <View className="px-1">
        <TouchableOpacity className="p-3 rounded-md mb-1" style={{backgroundColor:colors.gray,color:colors.white}}>
            <Text style={{color:colors.white}}>option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-3 rounded-md mb-1" style={{backgroundColor:colors.gray,color:colors.white}}>
            <Text style={{color:colors.white}}>option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-3 rounded-md mb-1" style={{backgroundColor:colors.gray,color:colors.white}}>
            <Text style={{color:colors.white}}>option 3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Post;

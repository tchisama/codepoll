import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native";
import { colors } from "../public/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import NavbarHome from "./components/NavbarHome";
import Post from "./components/Post";
import { PostContext } from "../context/postsContext";

const Home = ({navigation}) => {
  const {posts} = useContext(PostContext)
  return (
    <SafeAreaView style={{backgroundColor:colors.backgroundDark}} className={`flex-1 w-full `}>
      <NavbarHome navigation={navigation} />
      <TouchableOpacity style={{backgroundColor:colors.primary}} className="absolute rounded-xl bottom-8 right-8 z-50 w-14 h-14 justify-center items-center">
        <Ionicons name="add" size={30} color={"#fff"} />
      </TouchableOpacity>
      <ScrollView className="flex-1  px-2">
        {
          posts.map((post,key)=>{
            return(
              <Post key={key} post={post} />
            )
          })
        }
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

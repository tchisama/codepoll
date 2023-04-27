import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { colors } from "../public/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import NavbarHome from "./components/NavbarHome";
import Post from "./components/Post";
import { PostContext } from "../context/postsContext";
import { getDocs } from "firebase/firestore";
import { postColRef } from "../firebase";
import Catbar from "./components/Catbar";

const Home = ({navigation}) => {
  const {posts ,setPosts,upPosts, setUpPosts} = useContext(PostContext)


  return (
    <SafeAreaView style={{backgroundColor:colors.backgroundDark}} className={`flex-1 w-full `}>
      <NavbarHome navigation={navigation} />
      <ScrollView className="flex-1  px-2">
        <Catbar/>
        <Text style={{color:colors.white}} className="text-2xl p-3 pt-5">Feed</Text>
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

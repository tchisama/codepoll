import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { colors } from "../public/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import NavbarHome from "./components/NavbarHome";
import Post from "./components/Post";

const Home = () => {
  return (
    <SafeAreaView className={`flex-1 w-full `}>
      <NavbarHome />
      <TouchableOpacity style={{backgroundColor:colors.primary}} className="absolute rounded-xl bottom-8 right-8 z-50 w-14 h-14 justify-center items-center">
        <Ionicons name="add" size={30} color={"#fff"} />
      </TouchableOpacity>
      <ScrollView className="flex-1  px-2">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

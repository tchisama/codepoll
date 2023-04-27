import {
  View,
  Text,
  TouchableOpacity,
  ImageComponent,
  Image,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../public/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const Post = ({ post }) => {
  const [optionSelected, setOptionSelected] = useState(0);
  const [show, setshow] = useState(false);
  const check = (option) => {
    setOptionSelected(option);
    setshow(true);
  };
  const optionLogic = (option) => {
    if (show) {
      if (option == post.correctAnswer[0]) {
        return colors.yes;
      } else if (option == optionSelected && option != post.correctAnswer[0]) {
        return colors.no;
      } else {
        return colors.gray;
      }
    } else {
      return colors.gray;
    }
  };
  return (
    <View
      style={{ backgroundColor: colors.background, borderColor: colors.border }}
      className="w-full rounded-xl p-2 my-3 border"
    >
      <View className="flex-row justify-between items-start">
        <View className="flex-row gap-x-2">
          <Image
            className="w-12 h-12 rounded-full"
            source={{ uri: post?.avatar }}
          ></Image>
          <View>
            <Text style={{ color: colors.white }}>{post?.userName}</Text>
            <Text className="text-yellow-200 text-xs">{post.cat}</Text>
            <View className="flex-row gap-x-1 items-center">
              <Text className="text-xs text-gray-600">
                {post.player?.length} people
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
            {post.likes?.length}
          </Text>
          <Ionicons name="heart" size={12} color={colors.white} />
        </TouchableOpacity>
      </View>
      <Text className="px-1 py-4 " style={{ color: colors.white }}>
        {post?.question}
      </Text>
      <View className="px-1">
        {post.options.map((option, key) => {
          return (
            <TouchableOpacity
              onPress={() => check(option)}
              key={key}
              className="p-3 rounded-md mb-1"
              style={{
                backgroundColor: optionLogic(option),
                color: colors.white,
              }}
            >
              <Text style={{ color: colors.white }}>{option}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Post;

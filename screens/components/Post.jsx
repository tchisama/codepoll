import {
  View,
  Text,
  TouchableOpacity,
  ImageComponent,
  Image,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { colors } from "../../public/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FieldValue, arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { UserContext } from "../../context/userContext";
import { CatsColRef, db } from "../../firebase";
import { CatsContext } from "../../context/CatsContext";

const Post = ({ post }) => {
  const [optionSelected, setOptionSelected] = useState(null);
  const [show, setshow] = useState(false);
  const { user } = useContext(UserContext);
  const { cats } = useContext(CatsContext);
  const [liked,setLiked]=useState(false)

  useEffect(()=>{
    let isLiked = user?.likes?.findIndex(l=>l==post.id)==-1? false : true
    setLiked(isLiked)
  },[user])


  const handelLike=()=>{
    if (liked) {
      const userRef = doc(db,"users",user.id);
      updateDoc(userRef,{
        likes:arrayRemove(post.id)
      })
      const postRef = doc(db,"posts",post.id);
      updateDoc(postRef,{
        likes:arrayRemove(user.id)
      })
    } else {
      const userRef = doc(db,"users",user.id);
      updateDoc(userRef,{
        likes:arrayUnion(post.id)
      })
      const postRef = doc(db,"posts",post.id);
      updateDoc(postRef,{
        likes:arrayUnion(user.id)
      })
    }
  }


  const confirm = () => {
    setshow(true);
    let win = optionSelected == post.correctAnswer[0];
    const docRef = doc(db, "users", user.id);
    const updateDocfn = updateDoc(docRef, {
      win: win ? user.win + 1 : user.win,
      play: user.play + 1,
    });

      const postRef = doc(db,"posts",post.id);
      updateDoc(postRef,{
        player:arrayUnion(user.id)
      })
      const userRef = doc(db,"users",user.id);
      updateDoc(userRef,{
        donePosts:arrayUnion(post.postId)
      })


    return () => {
      updateDocfn();
    };
  };

  const check = (option) => {
    if (!show) {
      setOptionSelected(option);
    }
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
    } else if (optionSelected == option) {
      return "#fff1";
    }
    {
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
          <View className="items-start">
            <Text style={{ color: colors.white }}>{post?.userName}</Text>
            <Text
              style={{ color: cats.find((c) => c.name == post.cat)?.color }}
              className="text-xs py-1 px-2  bg-[#fff1] rounded-md"
            >
              {post.cat}
            </Text>
            <Text className="text-xs text-gray-600">
              {post.player?.length} people
            </Text>
          </View>
        </View>




        <TouchableOpacity
          style={{
            backgroundColor: colors.button,
            borderColor: liked?"#FC6E5A": colors.buttonBorder,
          }}
          onPress={handelLike}
          className="flex-row border justify-center rounded-full p-2 px-3 items-center "
        >
          <Text className="text-xs mr-1" style={{ color: liked?"#FC6E5A":colors.white}}>
            {post.likes?.length}
          </Text>
          <Ionicons name="heart" size={12} color={liked?"#FC6E5A":colors.white} />
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
              className="p-3 text-white rounded-md mb-1"
              style={{
                backgroundColor: optionLogic(option),
              }}
            >
              <Text style={{ color: colors.white }}>{option}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {optionSelected && !show && (
        <View className="px-1 py-2 flex-row justify-end">
          <TouchableOpacity
            onPress={confirm}
            style={{
              backgroundColor: colors.button,
              borderColor: colors.buttonBorder,
            }}
            className="border p-2 px-4 rounded-full "
          >
            <Text className="text-white">confirm</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Post;

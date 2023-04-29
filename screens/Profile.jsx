import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useContext, useState } from "react";
import { colors } from "../public/Colors";
import Ionicons from "../public/Ionicons";
import { UserContext } from "../context/userContext";
import { CatsContext } from "../context/CatsContext";
import { signOut } from "firebase/auth";
import { auth as Auth, db, storage } from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytes, uploadBytesResumable } from "firebase/storage";



import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Profile = ({ navigation }) => {
  const { user, setAuth, auth } = useContext(UserContext);
  const { cats } = useContext(CatsContext);

  const [image, setImage] = useState(null);

  const addImage = async () => {

    let img = ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
    }).then((result) => {
      if (!result.cancelled) {
        const storageRef = ref(storage, "avatars/" + new Date() + ".jpg");

        const blob = new Blob([result.assets[0].uri], { type: `image/jpeg` });
        console.log(blob)
        setImage(result.assets[0].uri);
        uploadBytesResumable(storageRef, blob, {
          contentType: "image/jpeg",
          firebaseStorageDownloadTokens:new Date()
        });
        alert("done");
      }
    });


  };

  useEffect(() => {
    if (auth == null || auth == "") {
      navigation.navigate("Signing");
    }
  }, []);

  const counts = {};
  user?.win
    ?.map((v) => v.slice(18))
    .forEach(function (x) {
      counts[x] = (counts[x] || 0) + 1;
    });

  const logout = () => {
    signOut(Auth).then(() => {
      setAuth(null);
      AsyncStorage.setItem("auth", "");
      navigation.navigate("Signing");
    });
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.backgroundDark }}
      className="flex-1 pt-10"
    >
      <View className="h-12 flex-row items-center justify-between px-2">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="p-2 rounded-full"
        >
          <Ionicons name="arrow-back-outline" size={24} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity onPress={logout} className="p-2 rounded-full">
          <Ionicons name="log-out-outline" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>
      <View className="flex-col items-center gap-y-2">
        <View className="relative">
          <Image
            className=" w-28 h-28  rounded-full  "
            style={{ backgroundColor: colors.background }}
            source={{ uri: image }}
          ></Image>

          <TouchableOpacity
            onPress={addImage}
            style={{ backgroundColor: colors.primary }}
            className="p-2 rounded-full absolute bottom-0 right-0 "
          >
            <Ionicons name="camera" size={20} color={colors.white} />
          </TouchableOpacity>
        </View>
        <Text style={{ color: colors.white }} className="text-lg">
          {user.userName}
        </Text>
        <Text
          style={{ color: colors.white }}
          className="opacity-60 text-sm px-3 text-center"
        >
          {user?.info || "hey i'm using codepoll"}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: colors.background,
          borderColor: colors.buttonBorder,
        }}
        className="border m-4 rounded-xl justify-between items-center h-14 flex-row overflow-hidden relative"
      >
        <View
          style={{
            width: (user?.win?.length * 100) / user?.play + "%",
            backgroundColor: colors.primary,
          }}
          className={"absolute bg-blue-950 h-14 left-0 top-0"}
        ></View>
        <Text className="text-white text-2xl px-4  pt-1 ">
          {user?.win?.length || "0"} win
        </Text>
        <Text className="text-white text-lg px-4  pt-1 ">
          {user?.play || "0"} plays
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("NewPost")}
        style={{ backgroundColor: colors.primary }}
        className="absolute rounded-xl bottom-8 right-8 z-50 w-14 h-14 justify-center items-center"
      >
        <Ionicons name="add" size={30} color={"#fff"} />
      </TouchableOpacity>

      <View className="p-3 ">
        <Text style={{ color: colors.white }} className="text-xl">
          Technologies
        </Text>
        <View className="items-start py-4">
          {user?.win
            ?.map((v) => v.slice(18))
            .filter((v, i, a) => a.indexOf(v) === i)
            .map((w, key) => {
              return (
                <Text
                  key={key}
                  style={{
                    backgroundColor: cats.find((c) => c.name == w)?.color,
                  }}
                  className="text-white my-1 rounded-full px-4 py-2 bg-blue-950"
                >
                  {w} : {counts[w]}
                </Text>
              );
            })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useContext, useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../public/Colors";
import Ionicons from "../public/Ionicons";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { UserColRef, postColRef } from "../firebase";
import { UserContext } from "../context/userContext";
import { PostContext } from "../context/postsContext";
import { CatsContext } from "../context/CatsContext";

const NewPost = ({ navigation }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [fake1, setFake1] = useState("");
  const [fake2, setFake2] = useState("");
  const [fake3, setFake3] = useState("");
  const [fakes,setFakes]=useState(2)
  const { user } = useContext(UserContext);
  const { setUpPosts } = useContext(PostContext);
  const {cats }= useContext(CatsContext)
  const [cat,setCat]=useState("javascript")




  const post = () => {
    let ans = [];
    if (fake1) {
       ans.push(fake1) 
    }
    if (fake2) {
       ans.push(fake2) 
    }
    if (fake3) {
       ans.push(fake3) 
    }
    addDoc(postColRef, {
      avatar: user.avatar,
      cat: cat,
      correctAnswer: [answer],
      likes: [],
      options: [...ans,answer],
      player: [],
      postId: new Date().getTime().toString(),
      question: question,
      userId: user.userId,
      userName: user.userName,
      createdAt:serverTimestamp(),
    }).then(() => {
      navigation.goBack();
      setUpPosts((p) => p + 1);
    });
  };
  return (
    <SafeAreaView
      style={{ backgroundColor: colors.backgroundDark }}
      className="flex-1 pt-10 px-4"
    >
      <Text style={{ color: colors.white }} className="pb-4 text-4xl pt-8 ">
        New post
      </Text>

      <ScrollView>

    <View>
    <Text style={{color:colors.white}} className="text-xl  py-2 ">Catagories</Text>
    <ScrollView horizontal={true} className="h-fit">
        {
            cats.map((c,key)=>{
                return(
                    <TouchableOpacity onPress={()=>{setCat(c.name)}} key={key} style={{backgroundColor:cat==c.name?c.color:colors.background,borderColor:colors.button}} className="py-2 px-4 ml-2 rounded-full border">
                        <Text style={{color:cat==c.name?"#000":c.color}}>{c.name}</Text>
                    </TouchableOpacity>
                )
            })
        }
    </ScrollView>
    </View>

        <Text style={{ color: colors.white }} className="py-2 text-sm ">
          the question
        </Text>
        <TextInput
          multiline
          numberOfLines={4}
          value={question}
          onChangeText={setQuestion}
          className="min-h-[80px] p-2 rounded-md border text-white"
          style={{
            borderColor: colors.button,
            backgroundColor: colors.background,
          }}
        ></TextInput>
        <Text style={{ color: colors.white }} className="py-2 text-sm ">
          correct answer
        </Text>
        <TextInput
          className="min-h-[30px] p-2 rounded-md border-blue-500 border text-white"
          value={answer}
          onChangeText={setAnswer}
          style={{
            backgroundColor: colors.background,
          }}
        ></TextInput>
        <Text style={{ color: colors.white }} className="py-2 text-sm ">
          fake answer 1
        </Text>
        <TextInput
          className="min-h-[30px] p-2 rounded-md border-red-400 border text-white"
          value={fake1}
          onChangeText={setFake1}
          style={{
            backgroundColor: colors.background,
          }}
        ></TextInput>
        {
            fakes>2 &&
            <>
        <Text style={{ color: colors.white }} className="py-2 text-sm">
          fake answer 2
        </Text>
        <TextInput
          value={fake2}
          onChangeText={setFake2}
          className="min-h-[30px] p-2 rounded-md border-red-400 border text-white"
          style={{
            backgroundColor: colors.background,
          }}
        ></TextInput>
            </>
        }
        {
            fakes>3 &&
            <>
        <Text style={{ color: colors.white }} className="py-2 text-sm">
          fake answer 3
        </Text>
        <TextInput
          value={fake3}
          onChangeText={setFake3}
          className="min-h-[30px] p-2 rounded-md border-red-400 border text-white"
          style={{
            backgroundColor: colors.background,
          }}
        ></TextInput>
            </>
        }
        {
            fakes<4&&
        <View className="flex-row py-8  gap-x-2">
          <TouchableOpacity
            onPress={() => setFakes(p=>p+1)}
            style={{ backgroundColor: colors.background }}
            className="flex-row items-center rounded-full px-4 py-2"
          >
            <Ionicons name="add" size={24} color="#fff"></Ionicons>
            <Text className="text-white ml-2">Add answer</Text>
          </TouchableOpacity>
        </View>
        }        




        <View className="flex-row py-8 justify-end gap-x-2">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ backgroundColor: colors.gray }}
            className="flex-row items-center rounded-full px-6 py-3"
          >
            <Text className="text-white ">close</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => post()}
            style={{
              backgroundColor:
                question && answer && fake1 
                  ? colors.primary
                  : colors.gray,
            }}
            className="flex-row items-center rounded-full px-6 py-3"
          >
            <Text className="text-white mr-2">done</Text>
            <Ionicons name="send" color="#fff"></Ionicons>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewPost;

import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native'
import { colors } from '../../public/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { UserContext } from '../../context/userContext';

const NavbarHome = ({navigation}) => {
     const {user}= useContext(UserContext)
  return (
        <View className=" px-3 py-2 mt-10 w-full flex-row items-center justify-between">
            <View className={"flex-row gap-x-2 items-center justify-between"}>
                {/* <TouchableOpacity className="p-1 rounded-full justify-center items-center">
                    <Ionicons name="menu" size={30} color={colors.white} />
                </TouchableOpacity> */}
                <Text style={{color:colors.white}} className="text-3xl pl-2">Home</Text>
            </View>

            <View className={"flex-row gap-x-1 items-center justify-between"}>
                <TouchableOpacity className="p-2 rounded-full ">
                    <Ionicons name="notifications" size={20} color={colors.white} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("Profile")} style={{borderColor:colors.whiteDark,backgroundColor:colors.background}} className={"p-1  border rounded-full  flex-row items-center shadow-md justify-between gap-x-2"}>
                    <Text style={{color:colors.white}} >{user?.userName}</Text>
                    <Image  className=" w-8 h-8  rounded-full  " style={{backgroundColor:colors.primary}} source={{uri:user.avatar||" "}}></Image>
                </TouchableOpacity>
            </View>
        </View>
  )
}

export default NavbarHome
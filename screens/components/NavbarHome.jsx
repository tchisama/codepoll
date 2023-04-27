import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { colors } from '../../public/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

const NavbarHome = () => {
  return (
        <View className=" px-3 py-2 mt-10 w-full flex-row items-center justify-between">
            <View className={"flex-row gap-x-2 items-center justify-between"}>
                <TouchableOpacity className="p-1 rounded-full justify-center items-center">
                    <Ionicons name="menu" size={30} color={colors.white} />
                </TouchableOpacity>
                <Text style={{color:colors.white}} className="text-xl">Home</Text>
            </View>

            <View className={"flex-row gap-x-1 items-center justify-between"}>
                <TouchableOpacity className="p-2 rounded-full ">
                    <Ionicons name="notifications" size={20} color={colors.white} />
                </TouchableOpacity>
                <TouchableOpacity style={{borderColor:colors.whiteDark}} className={"p-1 bg-[#fff1] border rounded-full  flex-row items-center shadow-md justify-between gap-x-2"}>
                    <Text style={{color:colors.white}} >Tchi</Text>
                    <View className="w-8 h-8 rounded-full bg-blue-300 overflow-hidden justify-center items-center">
                    </View>
                </TouchableOpacity>
            </View>
        </View>
  )
}

export default NavbarHome
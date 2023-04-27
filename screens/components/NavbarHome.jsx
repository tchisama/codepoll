import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { colors } from '../../public/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

const NavbarHome = ({navigation}) => {
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
                <TouchableOpacity onPress={()=>navigation.navigate("Profile")} style={{borderColor:colors.whiteDark}} className={"p-1 bg-[#fff1] border rounded-full  flex-row items-center shadow-md justify-between gap-x-2"}>
                    <Text style={{color:colors.white}} >Tchi</Text>
                    <Image  className=" w-8 h-8  rounded-full  " source={{uri:"https://scontent.frak1-2.fna.fbcdn.net/v/t39.30808-6/272903096_1179661402805532_104898404720613763_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEs_5DFN-2Cy9Vo3E5e1l5LwQJqJyaWMXzBAmonJpYxfDnXv4-k5p3D4CIPKQmvBQsI-M64HVPlsq_PgvkCoMDW&_nc_ohc=CMI1GSpuWosAX-D0Aa6&_nc_ht=scontent.frak1-2.fna&oh=00_AfD7TJ2290NeeoF7jaeL1CYPB0SlCN_2OFzlFQbtyHuUzQ&oe=64500925"}}></Image>
                </TouchableOpacity>
            </View>
        </View>
  )
}

export default NavbarHome
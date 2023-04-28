import { View, Text, SafeAreaView, TouchableOpacity, Image,Dimensions  } from 'react-native'
import React, { useCallback, useContext } from 'react'
import { colors } from '../public/Colors'
import Ionicons from '../public/Ionicons'
import { UserContext } from '../context/userContext'
import { LineChart } from 'react-native-chart-kit'
import { ChartData } from 'react-native-chart-kit/dist/HelperTypes'
import { Link } from '@react-navigation/native'
import { Line } from 'react-native-svg'






const Profile = ({navigation}) => {
    const {user}= useContext(UserContext)

  return (
    <SafeAreaView style={{backgroundColor:colors.backgroundDark}} className="flex-1 pt-10">
        <View className="h-12 flex-row items-center justify-between px-2">
            <TouchableOpacity onPress={()=>{navigation.goBack()}} className="p-2 rounded-full">
                <Ionicons name="arrow-back-outline" size={24} color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 rounded-full">
                <Ionicons name="ellipsis-vertical" size={24} color={colors.white} />
            </TouchableOpacity>
        </View>
        <View className="flex-col items-center gap-y-2">
            <View className="relative">
                <Image  className=" w-28 h-28  rounded-full  " source={{uri:"https://scontent.frak1-2.fna.fbcdn.net/v/t39.30808-6/272903096_1179661402805532_104898404720613763_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEs_5DFN-2Cy9Vo3E5e1l5LwQJqJyaWMXzBAmonJpYxfDnXv4-k5p3D4CIPKQmvBQsI-M64HVPlsq_PgvkCoMDW&_nc_ohc=CMI1GSpuWosAX-D0Aa6&_nc_ht=scontent.frak1-2.fna&oh=00_AfD7TJ2290NeeoF7jaeL1CYPB0SlCN_2OFzlFQbtyHuUzQ&oe=64500925"}}></Image>
                <TouchableOpacity style={{backgroundColor:colors.primary}} className="p-2 rounded-full absolute bottom-0 right-0 ">
                    <Ionicons name="camera" size={20} color={colors.white} />
                </TouchableOpacity>
            </View>
            <Text style={{color:colors.white}} className="text-lg">tchi sama</Text>
            <Text style={{color:colors.white}} className="opacity-60 text-sm px-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sunt id quae consequatur aspernatur ab veritatis cumque porro, omnis similique quasi cupiditate fuga debitis minus eius placeat accusantium consequuntur itaque? sama</Text>
        </View>
            <View style={{backgroundColor:colors.background,borderColor:colors.buttonBorder}} className="border m-4 rounded-xl justify-between items-center h-14 flex-row overflow-hidden relative">
                <View style={{width:(((user?.win*100)/user?.play)+"%"),backgroundColor:colors.primary}} className={"absolute bg-blue-950 h-14 left-0 top-0"}></View>
                <Text className="text-white text-4xl px-4  pt-1 ">{user?.win}</Text>
                <Text className="text-white text-lg px-4  pt-1 ">{user?.play} plays</Text>
            </View>
      <TouchableOpacity onPress={()=>navigation.navigate("NewPost")} style={{backgroundColor:colors.primary}} className="absolute rounded-xl bottom-8 right-8 z-50 w-14 h-14 justify-center items-center">
        <Ionicons name="add" size={30} color={"#fff"} />
      </TouchableOpacity>




    <Line/>





    </SafeAreaView>
  )
}

export default Profile
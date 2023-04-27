import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { colors } from '../../public/Colors'
import { CatsContext } from '../../context/CatsContext'

const Catbar = () => {
    const {cats ,currentCat,setCurrentCat}= useContext(CatsContext)
  return (
    <View>
    <Text style={{color:colors.white}} className="text-2xl  p-3 ">Catagories</Text>
    <ScrollView horizontal={true} className="h-fit">
        {
            cats.map((cat,key)=>{
                return(
                    <TouchableOpacity onPress={()=>{setCurrentCat(cat.name)}} key={key} style={{backgroundColor:currentCat==cat.name?cat.color:colors.background,borderColor:colors.button}} className="py-2 px-4 ml-2 rounded-full border">
                        <Text style={{color:currentCat==cat.name?"#000":cat.color}}>{cat.name}</Text>
                    </TouchableOpacity>
                )
            })
        }
    </ScrollView>
    </View>
  )
}

export default Catbar
import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

const Signing = () => {
    const [singup,setSignup]=useState(true)

  return (
    <SafeAreaView>
      <Text>Sign Up</Text>
    </SafeAreaView>
  )
}

export default Signing
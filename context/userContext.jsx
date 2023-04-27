import { createContext, useState } from "react"
import { useEffect } from 'react';
import { onSnapshot, query, where } from 'firebase/firestore';
import { UserColRef } from "../firebase";

export const UserContext = createContext(null)

export const UserProvider= ({children})=>{
    const [user,setUser]=useState({})
    const [updateUser,setUpdateUser]=useState(0)
    const value ={
        user,
        setUser,
        updateUser,
        setUpdateUser
    }
  useEffect(()=>{
    const q = query (UserColRef,where("userId","==","0"))
    const getData = onSnapshot(q,(snapshot)=>{
        setUser(snapshot.docs[0].data())
    })
      return()=>{
        getData();
      }
  },[])

    return (
        <UserContext.Provider value={{...value}}>
            {children}
        </UserContext.Provider>
    )
}

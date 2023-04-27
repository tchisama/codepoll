import { createContext, useContext, useState } from "react"
import { useEffect } from 'react';
import { getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { postColRef } from "../firebase";
import { CatsContext } from "./CatsContext";

export const PostContext = createContext(null)

export const PostsProvider= ({children})=>{
    const [posts,setPosts]=useState([])
    const [upPosts,setUpPosts]=useState(0)
    const {currentCat}=useContext(CatsContext)
    const value ={
        posts,
        setPosts,
        upPosts,
        setUpPosts
    }

  useEffect(()=>{
    const q = query(postColRef,where("cat","==",currentCat))


    onSnapshot(q,(snapshot)=>{
      let newPosts = [];
      snapshot.docs.forEach(doc=>newPosts.push({...doc.data(),id:doc.id}));
      setPosts(newPosts)
    })

  },[upPosts,currentCat])

    return (
        <PostContext.Provider value={{...value}}>
            {children}
        </PostContext.Provider>
    )
}

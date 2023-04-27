import { createContext, useState } from "react"
import { useEffect } from 'react';
import { getDocs } from 'firebase/firestore';
import { postColRef } from "../firebase";

export const PostContext = createContext(null)

export const PostsProvider= ({children})=>{
    const [posts,setPosts]=useState([])
    const [upPosts,setUpPosts]=useState(0)
    const value ={
        posts,
        setPosts,
        upPosts,
        setUpPosts
    }

  useEffect(()=>{
    getDocs(postColRef)
      .then(snapshot=>{
        let newPosts = [];
        snapshot.docs.forEach(doc=>newPosts.push({...doc.data(),id:doc.id}));
        setPosts(newPosts)
      })
      .catch(err=>console.log(err));
  },[upPosts])

    return (
        <PostContext.Provider value={{...value}}>
            {children}
        </PostContext.Provider>
    )
}

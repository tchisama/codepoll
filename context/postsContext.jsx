import { createContext, useState } from "react"
import { useEffect } from 'react';
import { getDocs } from 'firebase/firestore';
import { postColRef } from "../firebase";

export const PostContext = createContext(null)

export const PostsProvider= ({children})=>{
    const [posts,setPosts]=useState([])
    const [updatePosts,setUpdatePosts]=useState(0)
    const value ={
        posts,
        setPosts,
        updatePosts,
        setUpdatePosts
    }
  useEffect(()=>{
    const getData = getDocs(postColRef)
      .then(snapshot=>{
        let newPosts = [];
        snapshot.docs.forEach(doc=>newPosts.push({...doc.data(),id:doc.id}));
        setPosts(newPosts)
      })
      .catch(err=>console.log(err));
      return()=>{
        getData();
      }
  },[])

    return (
        <PostContext.Provider value={{...value}}>
            {children}
        </PostContext.Provider>
    )
}

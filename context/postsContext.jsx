import { createContext, useContext, useState } from "react"
import { useEffect } from 'react';
import { and, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { postColRef } from "../firebase";
import { CatsContext } from "./CatsContext";
import { UserContext } from "./userContext";

export const PostContext = createContext(null)

export const PostsProvider= ({children})=>{
    const [posts,setPosts]=useState([])
    const [upPosts,setUpPosts]=useState(0)
    const {currentCat}=useContext(CatsContext)
    const {user}= useContext(UserContext)
    const value ={
        posts,
        setPosts,
        upPosts,
        setUpPosts
    }

  useEffect(()=>{
    var q;
    if(user?.donePosts?.length>0){
      q = query(postColRef, and( where("postId" , "not-in" , [...user.donePosts]) , where("cat","==",currentCat) ))
    }else{
      q = query(postColRef,where("cat" , "==" , currentCat ))
  }

    onSnapshot(q,(snapshot)=>{
      let newPosts = [];
      snapshot.docs.forEach(doc=>newPosts.push({...doc.data(),id:doc.id}));
      setPosts(newPosts);
    })

  },[upPosts,currentCat,user])

    return (
        <PostContext.Provider value={{...value}}>
            {children}
        </PostContext.Provider>
    )
}

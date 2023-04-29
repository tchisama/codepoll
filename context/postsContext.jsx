import { createContext, useContext, useState } from "react"
import { useEffect } from 'react';
import { and, getDocs, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { postColRef } from "../firebase";
import { CatsContext } from "./CatsContext";
import { UserContext } from "./userContext";

export const PostContext = createContext(null)

export const PostsProvider= ({children})=>{
    const [posts,setPosts]=useState([])
    const [myPosts,setMyPosts]=useState([])
    const [upPosts,setUpPosts]=useState(0)
    const {currentCat}=useContext(CatsContext)
    const {user}= useContext(UserContext)
    const value ={
        posts,
        setPosts,
        myPosts,
        setMyPosts,
        upPosts,
        setUpPosts
    }

  useEffect(()=>{
    if (user?.donePosts?.length>0) {
// and( where("postId" , "not-in" , [...user.donePosts]) 
      var q;
        q = query(postColRef,  where("cat","==",currentCat) ,orderBy("postId"))

      onSnapshot(q,(snapshot)=>{
        let newPosts = [];
        snapshot.docs.forEach(doc=>newPosts.push({...doc.data(),id:doc.id}));
        setPosts(newPosts);
      })
    }

  },[currentCat,user])
  // useEffect(()=>{
  //     var q;
  //       q = query(postColRef, where("postId" , "in" , [...user.donePosts]),orderBy("postId"))

  //     onSnapshot(q,(snapshot)=>{
  //       let newPosts = [];
  //       snapshot.docs.forEach(doc=>newPosts.push({...doc.data(),id:doc.id}));
  //       setMyPosts(newPosts);
  //     })
  // },[])

    return (
        <PostContext.Provider value={{...value}}>
            {children}
        </PostContext.Provider>
    )
}

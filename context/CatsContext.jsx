import { createContext, useState } from "react"
import { useEffect } from 'react';
import { getDocs } from 'firebase/firestore';
import { CatsColRef, postColRef } from "../firebase";

export const CatsContext = createContext(null)

export const CatsProvider= ({children})=>{
    const [cats,setCats]=useState([])
    const [currentCat,setCurrentCat]=useState("javascript")
    const value ={
        cats,
        setCats,
        currentCat,
        setCurrentCat
    }

  useEffect(()=>{
    getDocs(CatsColRef)
      .then(snapshot=>{
        let newCats = [];
        snapshot.docs.forEach(doc=>newCats.push({...doc.data(),id:doc.id}));
        setCats(newCats)
      })
      .catch(err=>console.log(err));
  },[])

    return (
        <CatsContext.Provider value={{...value}}>
            {children}
        </CatsContext.Provider>
    )
}

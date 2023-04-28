import { View, Text } from "react-native";
import React, { Children } from "react";
import { PostsProvider } from "./postsContext";
import { UserProvider } from "./userContext";
import { CatsProvider } from "./CatsContext";

const Contextes = ({ children }) => {
  return (
   <UserProvider>
     <CatsProvider>
       <PostsProvider>{children}</PostsProvider>
     </CatsProvider>
   </UserProvider>
  );
};

export default Contextes;

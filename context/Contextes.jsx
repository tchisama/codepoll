import { View, Text } from "react-native";
import React, { Children } from "react";
import { PostsProvider } from "./postsContext";
import { UserProvider } from "./userContext";
import { CatsProvider } from "./CatsContext";

const Contextes = ({ children }) => {
  return (
    <CatsProvider>
      <PostsProvider>
        <UserProvider>{children}</UserProvider>
      </PostsProvider>
    </CatsProvider>
  );
};

export default Contextes;

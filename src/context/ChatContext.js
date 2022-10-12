import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState, createContext } from "react";
import { auth } from "../firebase"

export const ChatContext = createContext()

export const ChatContextProvider = ({ children }) => {
   

    return (
        <ChatContext.Provider value={{ currentUser }}>
            {children}
        </ChatContext.Provider>
    );
}
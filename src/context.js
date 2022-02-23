import React, { useContext, useState } from "react";

const AppContext = React.createContext()

export const AppProvider = ({children})=>{
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const [location, setLocation] = useState({})
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const openSubmenu = (coordinates)=>{
        setLocation(coordinates)
        setIsSubmenuOpen(true)
   }
    const closeSubmenu = ()=>{
        setIsSubmenuOpen(false)
    }

    return <AppContext.Provider value={{
        location,
        openSubmenu,
        closeSubmenu,
        isSubmenuOpen,
        isSidebarOpen,
        setIsSidebarOpen,
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
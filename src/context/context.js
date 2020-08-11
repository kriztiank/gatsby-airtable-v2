/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import sublinks from "../constants/links"

// Provider, Consumer (with useContext hook you dont need the Consumer)
const GatsbyContext = React.createContext()

// Create a component to wrap the whole application with.
const GatsbyProvider = ({ children }) => {
  // check if the sidebar is open.
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  // distribute links across the project with "links", "setLinks" is not used.
  const [links, setLinks] = useState(sublinks)

  const showSidebar = () => {
    setIsSidebarOpen(true)
  }
  const hideSidebar = () => {
    setIsSidebarOpen(false)
  }

  // the value object will be shared all across the application
  // used in layout and NavBar:
  // import React, { useContext } from "react"
  // import { GatsbyContext } from "../context/context"

  return (
    <GatsbyContext.Provider value={{isSidebarOpen, links, showSidebar, hideSidebar}}>
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }

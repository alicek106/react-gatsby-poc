import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Navigation from "./Navigation"
import { UserInfoContextProvider } from "../context/userContext"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  }
}))

interface Props {
  children?: React.ReactNode,
  location?: Location,
}

const Layout: React.FC<Props> = ({ children, location }) => {
  const classes = useStyles()

  return (
    <UserInfoContextProvider>
      <div className={classes.root}>
        <Navigation/>
        {children}
      </div>
    </UserInfoContextProvider>
  )
}

export default Layout
import React from 'react'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { useUserState } from "../context/userContext"

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}))

type TopBarProps = {
  color: string;
}

const TopBar: React.FC<TopBarProps> = ({ color }) => {
  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.appBar} style={{ background: color }}>
      <Toolbar>
        <Typography variant="h6" noWrap style={{ color: '#000000' }}>
          테스트용 Top Bar
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import CssBaseline from "@material-ui/core/CssBaseline"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import TopBar from "./TopBar"

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: "auto"
  }
}))

const Navigation: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <TopBar color='#FFE4E1'/>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <Toolbar/>
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>
              <ListItemIcon> <InboxIcon/> </ListItemIcon>
              <ListItemText primary='my Button'/>
            </ListItem>
          </List>
          <Divider/>
        </div>
      </Drawer>

    </div>
  )
}

export default Navigation
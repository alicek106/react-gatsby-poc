import React, { useContext, useEffect, useState } from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import { UserStateContext, UserDispatchContext } from "../components/context/userContext"

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

const MainPage: React.FC = () => {
  const classes = useStyles()
  const userInfo = useContext(UserStateContext)
  const userInfoDispatch = useContext(UserDispatchContext)

  const [starsCount, setStarsCount] = useState(0)
  useEffect(() => {
    // get data from GitHub api
    fetch(`https://api.github.com/repos/gatsbyjs/gatsby`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        console.log(resultData)
        setStarsCount(resultData.stargazers_count)
      }) // set data for the number of stars
  }, [])
  // highlight-end


  function onClick(e: React.MouseEvent){
    e.preventDefault()
    userInfoDispatch({
      type: "TEST_ACTION_2",
      userInfo: {
        userName: 'test',
        email: '1234'
      }
    })
  }

  return (
    <main className={classes.content}>
      <Toolbar/>
      <Typography paragraph>
        테스트 { userInfo.email }
      </Typography>
      <p>Runtime Data: Star count for the Gatsby repo {starsCount}</p>
      <button onClick={onClick}>test</button>
    </main>
  )
}

export default MainPage
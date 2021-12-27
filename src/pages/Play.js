import Gamebar from "../components/Gamebar"
import World from '../styles/images/world1.jpeg'
import classes from '../styles/Play.module.css'

const Play = () => {
  return (
    <div className={classes.container}>
      <Gamebar />
      <div className={classes.play}>
        <img src={World} alt='World' />
      </div>
    </div>
  )
}

export default Play

import characters from '../characterlist.js'
import classes from '../styles/Gamebar.module.css';

const Gamebar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.gamebar}>
        <div>
          <button>Pause</button>
        </div>
        <div>
          <span>Time: 0:00</span>
        </div>
      </div>
      <div className={classes.imgs}>
        {characters.map((character) => {
          return (<div>
            <img key={character.id} src={character.img} alt='Character' />
          </div>)
        })}
      </div>
    </div>
  )
}

export default Gamebar

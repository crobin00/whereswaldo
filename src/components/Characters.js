import classes from '../styles/Characters.module.css';
import Character from './Character';
import { Link } from 'react-router-dom';
import characters from '../characterlist.js'

const Characters = () => {
  return (
    <div className={classes.container}>
      <div>
        <h3>Find these characters to win!</h3>
      </div>
      <div>
        <div className={classes.characters}>
          {/* Componenents of characters */}
          {characters.map((character) => {
            return <Character name={character.name} img={character.img} key={character.id} />
          })}
        </div>
      </div>
      <div>
        <Link to='/play'>
          <button>Start!</button>
        </Link>
      </div>
    </div>
  )
}

export default Characters

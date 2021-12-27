import classes from '../styles/Characters.module.css';
import Character from './Character';
import { Link } from 'react-router-dom';

const Characters = () => {

  const characters = [
    {
      name: 'Waldo',
      img: null,
      id: 1
    },
    {
      name: 'Odlaw',
      img: null,
      id: 2
    },
    {
      name: 'Wenda',
      img: null,
      id: 3
    },
    {
      name: 'Wizard Whitebeard',
      img: null,
      id: 4
    }
  ]

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

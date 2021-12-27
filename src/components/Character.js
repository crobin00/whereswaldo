import classes from '../styles/Character.module.css';

const Character = ({name, img}) => {
  return (
    <div className={classes.character}>
        <img src={img} alt="Character" />
        <span>{name}</span>
    </div>
  )
}

export default Character

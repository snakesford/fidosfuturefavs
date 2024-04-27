import './card.styles.css';
import { Link } from 'react-router-dom'

const Card = ({ monster }) => {
  const { id, name, email } = monster;

  return (
    <div className='card-container'>
      <Link to={`https://robohash.org/${id}?set=set2&size=180x180`}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
      </Link>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;

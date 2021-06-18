import { Link } from 'react-router-dom';

function Card({image, name, temperament, id}){

    return (
        <div>
            <Link to={`/description/${id}`}>
                <img src={image} alt="no se encontró" style={{width: "200px", height: "200px"}} />
            </Link><br />
            <b>nombre:</b> {name} <br />
            <b>Temperamento:</b> {temperament}  
        </div>
    )
}

export default Card;
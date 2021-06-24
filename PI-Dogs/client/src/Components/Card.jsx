import { Link } from 'react-router-dom';
import '../Css/Card.css'

function Card({image, name, id}){

    return (
        <span className="espacio">
            <Link to={`/description/${id}`}>
                <span className="columnas"><img src={image} alt="no se encontró" style={{width: "190px", height: "190px"}} /></span>
            </Link><br />
            <label className="label1">nombre:</label> <span className="label1">{name}</span> <br /> <br />
        </span>
    )
}

export default Card;
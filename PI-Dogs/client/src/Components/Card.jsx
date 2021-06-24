import { Link } from 'react-router-dom';
import '../Css/Card.css';
import { Fragment } from 'react';

function Card({image, name, id}){

    if(image.url){
        image=image.url
    }

    return (
        <Fragment>
        <span className="espacio">
            <Link to={`/description/${id}`}>
                <span className="columnas"><img src={image} alt="no se encontró" style={{width: "190px", height: "190px"}} /></span>
            </Link><br />
            <label className="label1">Nombre:</label> <span className="label1">{name}</span> <br /> <br />
        </span>
        </Fragment>
    )
}

export default Card;
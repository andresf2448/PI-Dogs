function Card({image, name, temperament}){

    return (
        <div>
            <img src={image} alt="no se encontró" style={{width: "200px", height: "200px"}} /><br />
            <b>nombre:</b> {name} <br />
            <b>Temperamento:</b> {temperament}    
        </div>
    )
}

export default Card;
import { Fragment } from 'react';
import { connect } from 'react-redux';

function CardDetail({match, creados, filtrados}){
    if(match.params.id.length > 9){
        for(let i = 0; i < filtrados.length; i++){    
            if(filtrados[i].id === match.params.id){
                var image = filtrados[i].image.url;
                var name = filtrados[i].name;
                var height = filtrados[i].height
                var weight = filtrados[i].weight.join(" - ");
                var life_span = filtrados[i].life_span;
                if(!image){
                    image = "https://cdn2.thedogapi.com/images/B1d5me547.jpg";
                }
                break;
            }
        }
    
        for(let j = 0; j < creados.length; j++){
            if(name === creados[j].name){
                var temperaments = creados[j].temperaments;
                break;
            }
        }
    }else{
        for(let i = 0; i < filtrados.length; i++){    
            if(filtrados[i].id === Number(match.params.id)){
                var image = filtrados[i].image.url;
                var name = filtrados[i].name;
                var height = filtrados[i].height.metric;
                var weight = filtrados[i].weight.join(" - ");
                var life_span = filtrados[i].life_span;
                var temperaments = filtrados[i].temperament;
                break;
            }
        }
    }
    
    return (
        <Fragment>
            <div>
                <img src={image} alt="no se encontró" style={{width: "200px", height: "200px"}} /> <br />
                <b>Nombre:</b> {name} <br />
                <b>Altura:</b> {height} <br />
                <b>Peso:</b> {weight} <br />
                <b>Años de vida:</b> {life_span}
            </div>
        </Fragment>
    )
}

function mapStateToProps(state){
    return {
        creados: state.creados,
        filtrados: state.filtrados
    }
}

export default connect(mapStateToProps,null)(CardDetail);
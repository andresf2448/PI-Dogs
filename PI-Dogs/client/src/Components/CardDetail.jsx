import { Fragment } from 'react';
import { connect } from 'react-redux';
import '..//Css/CardDetail.css';
import { Link } from 'react-router-dom';

function CardDetail({match, creados, filtrados}){
    if(match.params.id.length > 11){
        for(let i = 0; i < filtrados.length; i++){    
            if(filtrados[i].id === match.params.id){
                var image = filtrados[i].image;
                var name = filtrados[i].name;
                var height = filtrados[i].height;
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
                console.log(image)
                if(!filtrados[i].image.url){
                    image = filtrados[i].image;
                }
                if(image === undefined){
                    image = "https://cdn2.thedogapi.com/images/B1d5me547.jpg";
                }
                if(height === undefined){
                    height = filtrados[i].height
                }
                if(filtrados[i].weight.metric === undefined){
                    if(filtrados[i].weight.metric === undefined){
                        var weight = filtrados[i].weight
                    }else{
                        var weight = filtrados[i].weight.join(" - ");
                    }
                }else{
                    var weight = filtrados[i].weight.metric;
                }
                var life_span = filtrados[i].life_span;
                var temperaments = filtrados[i].temperament;

                if(temperaments === undefined){
                    temperaments = filtrados[i].temperaments
                }
                break;
            }
        }
        
    }
    
    
    return (
        <Fragment>
            <div className="containerMayor">
                <img src={image} alt="no se encontró" style={{width: "300px", height: "300px"}} className="imgDetail"/>
                <span className="containerDetail">
                    <label className="labelDetail">Nombre:</label> <label className="labelDetail">{name}</label> <br />
                    <label className="labelDetail">Altura:</label> <label className="labelDetail">{height}</label> <br />
                    <label className="labelDetail">Peso:</label> <label className="labelDetail">{weight}</label> <br />
                    <label className="labelDetail">Años de vida:</label> <label className="labelDetail">{life_span}</label> <br />
                    <label className="labelDetail">Temperamentos:</label> <label className="labelDetail">{temperaments}</label> <br />
                </span>
                
            </div>
            <Link to="/principal">
                <button className="but2">Regresar</button>
            </Link>
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
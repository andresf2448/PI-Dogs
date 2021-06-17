import { Fragment } from 'react';
import { connect } from 'react-redux';
import Card from './Card';

function Cards({ filtrados, creados }){
    return (
        <Fragment>
            <h1>Ruta Cards</h1>
            {filtrados.length === 0?null:filtrados.map(x => {
                  
                    if(!x.temperament){
                        for(let i = 0; i < creados.length; i++){
                            if(x.name === creados[i].name){
                                var temperaments = creados[i].temperaments;
                                if(!x.image){
                                    x.image = "https://cdn2.thedogapi.com/images/B1d5me547.jpg";
                                }
                                break;
                            }
                        }
                        return <Card key={x.id} image={x.image} name={x.name} temperament={temperaments} id={x.id}/>
                    }
                
                return <Card key={x.id} image={x.image.url} name={x.name} temperament={x.temperament} id={x.id}/>
            })}
        </Fragment>
    )
}

function mapStateToProps(state){
    return {
        filtrados: state.filtrados,
        creados: state.creados
    }
}

export default connect(mapStateToProps, null)(Cards);
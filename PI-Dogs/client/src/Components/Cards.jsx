import { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import '../Css/Cards.css'

function Cards({ filtrados, creados }){

    const [limit, setLimit] = useState(0);

    function disminuye(){
        setLimit(limit - 8);
    }

    function aumenta(){
        setLimit(limit + 8);
    }

    return (
        <Fragment>
            {filtrados.length === 0?null:filtrados.slice(limit,limit+8).map(x => {
                  
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
                        return <span><Card key={x.id} image={x.image} name={x.name} temperament={temperaments} id={x.id}/></span>
                    }
                
                return <span><Card key={x.id} image={x.image.url} name={x.name} temperament={x.temperament} id={x.id}/></span>
            })}
            {filtrados.length !== 0 && limit !== 0?<button onClick={disminuye}>Anterior</button>:null}
            {filtrados.length !== 0 && limit !== filtrados.length-(filtrados.length%8) && filtrados.length>8?<button onClick={aumenta}>Siguiente</button>:null}
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
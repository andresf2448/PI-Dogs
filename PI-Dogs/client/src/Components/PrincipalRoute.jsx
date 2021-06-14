import { connect } from 'react-redux';
import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { cargaTemperaments, filtradoTemperamento } from '../Redux/actions';

function PrincipalRoute({ temperamentsE, cargaTemperaments, filtradoTemperamento }){
    useEffect(() => {
        cargaTemperaments();
     }, [])

    function cambiaSelect(e){
        const value = e.target.value;
        filtradoTemperamento(value);
    }

    return (
        <Fragment>
            <NavBar />
            <b>Buscar por:</b>
            <div>
                <b>Temperamento:</b>
                {!temperamentsE?<h1>Cargando...</h1>:
                    <select onChange={cambiaSelect}>
                        <option key={-1} value={""}></option>
                        {
                            temperamentsE.map((item, i) => (
                                <option key={i} value={item}>{item}</option>
                            ))
                        }
                    </select>
                }
            </div>
            <div>
                crea
            </div>
        </Fragment>
    )
}

function mapStateToProps(state){
    return {
        temperamentsE: state.temperamentsE
    }
}

function mapDispatchToProps(dispatch){
    return {
        cargaTemperaments: function (){
            dispatch(cargaTemperaments());
        },
        filtradoTemperamento: function(temperamento){
            dispatch(filtradoTemperamento());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrincipalRoute);
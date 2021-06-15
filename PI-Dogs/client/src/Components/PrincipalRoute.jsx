import { connect } from 'react-redux';
import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { cargaTemperaments, razas, ordenamiento_AZ, ordenamiento_ZA, ordenamiento_Peso_Asc, ordenamiento_Peso_Desc/* , filtradoTemperamento */ } from '../Redux/actions';

function PrincipalRoute({ temperamentsE, cargaTemperaments, filtradoTemperamento, razas, ordenamiento_AZ, ordenamiento_ZA, ordenamiento_Peso_Asc, ordenamiento_Peso_Desc }){
    useEffect(() => {
        cargaTemperaments();
     }, [])

    function selectTemp(e){
        const value = e.target.value;
        filtradoTemperamento(value);
    }

    function selectCreado(e){
        const value = e.target.value;
        razas(value);
    }

    function filtroOrden(e){
        if(e.target.value === "Alfabético A-Z"){
            ordenamiento_AZ();
        }else if(e.target.value === "Alfabético Z-A"){
            ordenamiento_ZA();
        }else if(e.target.value === "Peso asc"){
            ordenamiento_Peso_Asc();
        }else{
            ordenamiento_Peso_Desc();
        }
    }

    return (
        <Fragment>
            <NavBar />
            <b>Buscar por:</b>
            <div>
                <label>Temperamento:</label>
                {!temperamentsE?<h1>Cargando...</h1>:
                    <select onChange={selectTemp}>
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
                <label>Creados:</label>
                <select onChange={selectCreado}>
                    <option value=""></option>
                    <option value="Creados">Creados</option>
                    <option value="Todos">Todos</option>
                </select>
            </div>
            <div>
                <label>Ordenamiento:</label>
                <select onChange={filtroOrden}>
                    <option value=""></option>
                    <option value="Alfabético A-Z">Alfabético A-Z</option>
                    <option value="Alfabético Z-A">Alfabético Z-A</option>
                    <option value="Peso asc">Peso asc</option>
                    <option value="Peso desc">Peso desc</option>
                </select>
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
        razas: function(){
            dispatch(razas());
        },
        ordenamiento_AZ: function (){
            dispatch(ordenamiento_AZ())
        },
        ordenamiento_ZA: function (){
            dispatch(ordenamiento_ZA())
        },
        ordenamiento_Peso_Asc: function (){
            dispatch(ordenamiento_Peso_Asc())
        },
        ordenamiento_Peso_Desc: function (){
            dispatch(ordenamiento_Peso_Desc())
        }
        /* filtradoTemperamento: function(temperamento){
            dispatch(filtradoTemperamento());
        } */
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrincipalRoute);
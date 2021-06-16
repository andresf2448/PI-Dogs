import { Fragment } from 'react';
import { connect } from 'react-redux';
import CardDetail from './CardDetail';

function Cards({ filtrados }){
    return (
        <Fragment>
            <h1>Ruta Cards</h1>
            {filtrados.length === 0?null:<CardDetail />}
        </Fragment>
    )
}

function mapStateToProps(state){
    return {
        filtrados: state.filtrados
    }
}

export default connect(mapStateToProps, null)(Cards);
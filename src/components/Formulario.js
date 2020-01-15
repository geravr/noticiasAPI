import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {
    state = { 
        categoria : 'general',
        cantNoticias : '9'
     }


     cambiarCategoria = e => {
         this.setState({
             categoria : e.target.value
         }, () => {
            //Pasarlo a la página principal
            this.props.consultarNoticias(this.state.categoria, this.state.cantNoticias);
         });
         
     }

     cambiarCantNoticias = e => {
         this.setState({
             cantNoticias : e.target.value
         }, () => {
            //Pasarlo a la página principal
            this.props.consultarNoticias(this.state.categoria, this.state.cantNoticias);
         });
     }

    render() { 
        return ( 
            <div className="buscador row">
                <div className="col 12 m8 offset-m2">
                    <form>
                        <h2>Encuentra Notcias Por Categoría</h2>
                        <div className="input-field col s12 m8 offset-m1">
                            <select
                                onChange={this.cambiarCategoria}
                            >
                                <option value="general">General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnología</option>
                            </select>
                        </div>
                        <div className="input-field col s12 m2">
                            <select
                                onChange={this.cambiarCantNoticias}
                            >
                                <option value="20">20</option>
                                <option value="40">40</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
Formulario.propTypes = {
    consultarNoticias : PropTypes.func.isRequired
}

export default Formulario;
import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { Navigate } from 'react-router-dom'
export default class CreateDepartamentos extends Component {
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();
    state = {
        status:false
    }

    insertarDepartamento = (e)=>{
        e.preventDefault()
        let id = parseInt(this.cajaId.current.value);
        let nombre = this.cajaNombre.current.value;
        let localidad = this.cajaLocalidad.current.value
        let departamento ={
            numero:id,
            nombre:nombre,
            localidad:localidad
        }

        let request = "api/departamentos"
        let url = Global.apiUrlDepartamentos+request;

        axios.post(url,departamento).then(response=>{
            this.setState({
                status: true
            })
        })
    }
  render() {
    if(this.state.status == true){
        return(<Navigate to="/"/>)
    }else{ 
    return (
      <div>
        <h1>Crear departamento</h1>
        <form onSubmit={this.insertarDepartamento}>
            <label>Id departamento</label>
            <input type="text" ref={this.cajaId} />
            <label>Nombre </label>
            <input type="text" ref={this.cajaNombre} />
            <label>Localidad</label>
            <input type="text" ref={this.cajaLocalidad} />
            <button className='btn btn-light'>Insertar</button>
        </form>
      </div>
    )}
  }
}

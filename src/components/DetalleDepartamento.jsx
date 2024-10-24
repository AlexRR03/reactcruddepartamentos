import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'
import loading from '../assets/images/loading.gif'
import { NavLink } from 'react-router-dom'
export default class DetalleDepartamento extends Component {

    state = {
        departamento:null
    }
    findDepartamento = ()=>{
        let request ="api/departamentos/"+this.props.id;
        let url = Global.apiUrlDepartamentos+request
        axios.get(url).then(response=>{
            this.setState({
                departamento: response.data
            })
        })
    }
    componentDidMount = ()=>{
        this.findDepartamento();
    }
  render() {
    return (
      <div>
        <h1>Detalle departamento: {this.props.id}</h1>

        <NavLink to="/">volver a la lista</NavLink> 
        {
            this.state.departamento ? (
                <ul className='list-group'>
                    <li className='list-group-item'>
                        Numero: {this.state.departamento.numero}
                    </li>
                    <li className='list-group-item'>
                        Nombre: {this.state.departamento.nombre}
                    </li>
                    <li className='list-group-item'>
                        Localidad: {this.state.departamento.localidad}
                    </li>
                </ul>
            ):(
                <img src={loading} alt="loading" />
            )
        }

      </div>
    )
  }
}

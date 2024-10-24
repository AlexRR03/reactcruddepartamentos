import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import loadingImage from'./../assets/images/loading.gif'
import { NavLink } from 'react-router-dom'
export default class HomeDepartamentos extends Component {
    state ={
        status:false,
        departamentos: []
    }

    loadDepartamentos = ()=>{
        let request = "api/departamentos"
        let url = Global.apiUrlDepartamentos+request
        axios.get(url).then(response=>{
            this.setState({
                departamentos:response.data,
                status:true
            })
        })
    }
    componentDidMount = ()=>{
        this.loadDepartamentos();
    }
  render() {
    if (this.state.status == false ) {
        return(<img src={loadingImage}/>)
    }else{ 
    return (
      <div>
        <h1>Home Departamentos</h1>
        <table className='table table-warning'> 
            <thead>
                <tr>
                    <th>Id Departamento</th>
                    <th>Nombre</th>
                    <th>Localidad</th>
                    <th>Detalles</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.departamentos.map((departamento,index)=>{
                        return(
                            <tr key={index}>
                                <td>{departamento.numero}</td>
                                <td>{departamento.nombre}</td>
                                <td>{departamento.localidad}</td>
                                <td>
                                    
                                    <NavLink to={"/detalle/"+departamento.numero}>
                                        <button>
                                            Detalles
                                        </button>
                                    </NavLink>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    )}
  }
}

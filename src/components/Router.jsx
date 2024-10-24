import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import HomeDepartamentos from './HomeDepartamentos'
import MenuDepartamentos from './MenuDepartamentos'
import CreateDepartamentos from './CreateDepartamentos'
import DetalleDepartamento from './DetalleDepartamento'

export default class Router extends Component {
  render() {
    function DetalleDepartamentoElement (){
        let {iddepartamento} = useParams();
        return(<DetalleDepartamento id={iddepartamento}/>)
    }
    return (
      <div>
        <BrowserRouter>
        <MenuDepartamentos/>
            <Routes>
                <Route path='/' element={<HomeDepartamentos/>}></Route>
                <Route path='/create' element = {<CreateDepartamentos />}></Route>
                <Route path='/detalle/:iddepartamento' element={<DetalleDepartamentoElement/>}></Route>
            </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
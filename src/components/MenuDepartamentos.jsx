import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class MenuDepartamentos extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">

                    <div className="container-fluid">
                        <NavLink to="/" className="navbar-brand">
                            Departamentos
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample03">
                            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                                <li className="nav-item">
                                    <NavLink to="/create" className="nav-link active" aria-current="page">Crear departamento</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/detalle" className="nav-link" >Detalle</NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
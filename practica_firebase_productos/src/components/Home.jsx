import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css';

export default function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to Terry´s Store!</h1>
            <p className="home-description">¿Deseas ver, modificar o eliminar algún producto? Haz Click abajo</p>
            <Link to="/productos" className="home-link">IR</Link>
        </div>
    );
}
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <Link to="/">Home</Link>
            { ' | ' }
            <Link to="/about">About</Link>
            <h1>React Todo</h1>
        </header>
    )
}

export default  Header

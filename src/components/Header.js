import React from 'react'
import './Header.css'
import meals from '../assets/meals.jpg'

function Header() {
    return (
        <React.Fragment>
            <div id="header-cont">
                <p>Recipe Book</p>
            </div>
            <div id="header-image">
                <img src={meals} alt='meals-on-table-image' />
            </div>
        </React.Fragment>

    )
}

export default Header
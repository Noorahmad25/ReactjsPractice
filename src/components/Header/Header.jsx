import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <div className='mainContainer'>
            <div className='left-sh'>
                <span>Left side image</span>
                <ul className='h-menu'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Video Contact</li>
                    <li>Order</li>
                </ul>
            </div>
            <div className='right-sh'>
                <span>Right side with button</span>
            </div>
        </div>
    )
}

export default Header
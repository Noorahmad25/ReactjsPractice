import React from 'react'
import Header from '../Header/Header'
import './Home.css'
export const Home = () => {
    return (
        <div className='mainhomeContainer'>
            <div className='header'>
                <Header></Header>
            </div>
            <div className='b-header-screen'>
                <div className='left-s'>
                    <span>We are here for you</span>
                    <span>Call when you want we r 24/7 available</span>
                    <span>we have a lot to say to you</span>
                </div>
                <div className='right-s'><span>div2</span></div>
            </div>
        </div>
    )
}

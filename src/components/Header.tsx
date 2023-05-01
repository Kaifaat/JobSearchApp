import React from 'react';
import appLogo from '../assets/img/Union.png';
import { Link } from "react-router-dom";



export const Header: React.FC = () => {


    return (
        <div className="header">
            <div className="container">
                <Link to='/'>
                <div className='logo-container'>
                    <img src={appLogo} alt='app-logo'/>
                    <span>Jobored</span>
                </div>
                </Link>
                <div className='header-menu'>
                    <Link to='/vakansy'>
                    <span>Поиск вакансий</span>
                    </Link>
                    <Link to='/favourites'>
                    <span>Избранное</span>
                    </Link>
                </div>
                <div></div>


            </div>
        </div>
    )
}


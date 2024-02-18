import React, {useEffect, useState} from "react";
import './Root.scss'
import { Link, Outlet, NavLink } from "react-router-dom";

export default function Root() {
    return <div className="main-page">
        <div className="header">
            <div className="navigation">
                <div className="hrefs">
                    <NavLink className='nav-href' to={'about_me/'}>Обо мне</NavLink>
                    
                    <NavLink className='nav-href' to={'portfolio/'}>Мои работы</NavLink>
                    <NavLink className='nav-href' to={'contacts/'}>Контакты</NavLink>
                </div>
                
            </div>
        </div>
        <div id="detail">
            <Outlet/>
        </div>
        {/* <div className="footer">что то внизу</div> */}
        {/* <h3>c днём всех влюблённых</h3>
        <h1>ЛЮБЛЮ ТЕБЯ</h1> */}
    </div>
}
import React from 'react';
import Router from 'next/router';
import header from '../../styles/Header.module.css'
import back from '../../styles/Back.module.css'

export default function Header ({children}) {

    return (
        <header className={header.header}>
            <div className={back.btn} >
                <i className={back.arrow} onClick={() => Router.push('../')}/>
            </div>
            {children}
        </header>        
    )
}

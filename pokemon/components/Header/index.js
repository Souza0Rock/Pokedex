import React from 'react';
import header from '../../styles/Header.module.css'

export default function Header ({children}) {

    return (
        <header className={header.header}>
            {children}
        </header>        
    )
}

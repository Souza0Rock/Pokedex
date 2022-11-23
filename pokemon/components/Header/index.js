import React, { useState } from 'react';
import Router from 'next/router'
import header from '../../styles/Header.module.css'

export default function Header ({teste}) {
    
    const [search, setSearch] = useState('')
    
    return (
        <header className={header.header} teste={search}>
            <div className={header.container}>
                <img alt='voltar' src='../images/icon-voltar.png' className={header.iconBack} onClick={() => Router.push('../')} />                    
                <h1 className={header.header_title}>Lista de Pokemons</h1>
                <form className={header.formsContainer}>
                    <input type={"text"} placeholder={"Encontre seu pokemon"} className={header.formRequest} onChange={event => {setSearch(event.target.value)}}/>
                </form>
            </div>
        </header>        
    )
}
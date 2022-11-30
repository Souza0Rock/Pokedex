import React, { useState } from 'react';
import Router from 'next/router'
import header from '../../styles/Header.module.css'

export default function Header () {

    const [busca, setBusca] = useState('');

    const frutas = [
        'banana',
        'maça',
        'laranja',
        'abacaxi',
        'abacate',
        'uva'
    ]

    const frutasFiltradas = frutas
        .filter((fruta) => fruta.startsWith(busca));

    console.log(frutasFiltradas, 'busca');

    return (
        <header className={header.header}>
            <div className={header.container}>
                <img alt='voltar' src='../images/icon-voltar.png' className={header.iconBack} onClick={() => Router.push('../')} />                    
                <h1 className={header.header_title}>Lista de Pokemons</h1>
                <div className={header.formsContainer}>
                    <input type={"text"} 
                    placeholder={"Encontre seu pokemon"} 
                    value={busca}
                    onChange={(ev) => setBusca(ev.target.value)}
                    className={header.formRequest} />
                </div>
            </div>
        </header>        
    )
}
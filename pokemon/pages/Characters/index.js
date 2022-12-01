import React, { useState, useMemo } from 'react'
import Router from 'next/router'
import Header from '../../components/Header'
import Main from '../../components/Main'
import styles from '../../styles/Characters.module.css'
import header from '../../styles/Header.module.css'

export default function Characters () {

    const [busca, setBusca] = useState('');

    return (
        <div className={styles.containerBody}>
            <Header busca={busca}>
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
            </Header>
            <Main />
        </div>
    )
}
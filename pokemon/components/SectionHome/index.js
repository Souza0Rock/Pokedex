import React, { useState } from 'react';
import Router from 'next/router'
import styles from '../../styles/Home.module.css'

export default function SectionHome() {

    const [pokemon, setPokemon] = useState("");

    const pokemoLendas = (id) => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => {
            setResposta(response.data);
            setOpenModal(true);
        })
    };  

    return (
        <section>
            <div className={styles.container}>
                <form className={styles.formsContainer}>
                    <div>
                        <input type={"text"} placeholder={"Encontre seu pokemon!"} className={styles.formRequest} onChange={(e) => setPokemon(e.target.value)} />
                        <button type='submit' className={styles.formRequest} action={() => pokemoLendas(pokemon)} >Abrir</button>
                    </div>
                    <div>
                        <button type='button' className={styles.button} onClick={() => {Router.push('/Characters')}}>Todos os Pokemons</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
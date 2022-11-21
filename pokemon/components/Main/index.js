import axios from "axios";
import { useState, useEffect } from "react";
import styles from '../../styles/Characters.module.css'

export default function Main () {

    const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    const [character, setCharacter] = useState()

    useEffect (() => {
        axios.get(baseURL)
        .then((response) => 
        setCharacter(response.data.results))
    }, [])

    console.log(character)

    return (
        <main>
            <ul className={styles.ulCharacters}>
            {character?.map((character, index) => {
                return (
                    <li key={index} className={styles.li}>
                        <h3 className={styles.li_name}>{character?.name}</h3>
                    </li>
                    );
                })}
            </ul>
        </main>
    )
}
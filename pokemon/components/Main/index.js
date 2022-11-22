import axios from "axios";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from '../../styles/Characters.module.css'
import modalStyle from '../../styles/ModalStyles.module.css'

Modal.setAppElement("#__next");

export default function Main () {

    const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    const [character, setCharacter] = useState()

    const [pokemonInfo, setPokemonInfo] = useState()

    useEffect (() => {
        axios.get(baseURL)
        .then((response) => 
        setCharacter(response.data.results))
    }, [])

    const [modalVisible, setModalVisible] = useState(false);
    const [itemSelect, setItemSelect] = useState(null);

    const onItemClicked = (item) => {

        const base2URL = `https://pokeapi.co/api/v2/pokemon/1/`

        setItemSelect(item);
        setModalVisible(true);

        axios.get(base2URL)
        .then((response) => 
        setPokemonInfo(response.data))
    }

    console.log(pokemonInfo, 'deu certo')

    function closeModal() {
        setModalVisible(false);
    }

    return (
        <main>
            <ul className={styles.ulCharacters}>
                {character?.map((character, index) => {
                    return (
                        <li key={index} className={styles.li} onClick={() => {onItemClicked(character)}}>
                            <h3 className={styles.li_name}>{character?.name}</h3>
                        </li>
                    );
                })}
            </ul>
            <div className={modalStyle.container}>
                <Modal
                isOpen={modalVisible}
                onRequestClose={closeModal}
                overlayClassName={modalStyle.modalOverlay}
                className={modalStyle.modalContent}>
                    <div>
                        <h1>{itemSelect?.name}</h1>
                    </div>
                    <ul>
                        {character?.map((character, index) => {
                            return (
                                <>
                                    <li>
                                        <p>hp = </p>
                                    </li>
                                    <li>
                                        <p>attack = </p>
                                    </li>
                                    <li>                   
                                        <p>defense = </p>
                                    </li>
                                    <li>                   
                                        <p>special-attack = </p>
                                    </li>
                                    <li>                   
                                        <p>special-defense = </p>
                                    </li>
                                    <li>                   
                                        <p>speed = </p>
                                    </li>
                                    <li>                   
                                        <p>type = </p>
                                    </li>
                                </>
                            )
                        })}
                    </ul>
                </Modal>
            </div>
        </main>
    )
}
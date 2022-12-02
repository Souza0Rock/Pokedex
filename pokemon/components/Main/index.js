import axios from "axios";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from '../../styles/Characters.module.css'
import modalStyle from '../../styles/ModalStyles.module.css'

Modal.setAppElement("#__next");

export default function Main ({ pokemonFilter }) {

    const [character, setCharacter] = useState();
    const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

    const [pokemonInfo, setPokemonInfo] = useState();

    const pokemonFiltered = character?.filter((item) =>
        item.name.toLowerCase().includes(pokemonFilter.toLowerCase())
    );

    useEffect (() => {
        axios.get(baseURL)
        .then((response) => 
        setCharacter(response.data.results))
    }, []);

    const [modalVisible, setModalVisible] = useState(false);
    const [itemSelect, setItemSelect] = useState(null);

    const onItemClicked = (info) => {
        const infoBaseURL = `https://pokeapi.co/api/v2/pokemon/${info?.name}`;

        setItemSelect(info);
        setModalVisible(true);

        axios.get(infoBaseURL)
        .then((response) => 
        setPokemonInfo(response.data))
    };

    function closeModal() {
        setModalVisible(false);
    }

    return (
        <main>
            <ul className={styles.ulCharacters}>
                {pokemonFiltered?.map((character, index) => {
                    return (
                        <li className={styles.li} key={index} onClick={() => {onItemClicked(character)}}>
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
                    <section className={modalStyle.section}>
                        <div className={modalStyle.divHead}>
                            <h1 className={modalStyle.title}>{itemSelect?.name}</h1>
                            <div className={modalStyle.divXClose} onClick={() => setModalVisible(false)}>
                                <p className={modalStyle.xClose}>x</p>
                            </div>
                        </div>
                        <div className={modalStyle.divBody}>
                            <div className={modalStyle.contentTxt}>
                                <ul className={modalStyle.ulTxt}>                    
                                    <li className={modalStyle.li_info}>
                                        <p className={modalStyle.li_txt}>hp = {pokemonInfo && pokemonInfo?.stats[0]?.base_stat}</p>
                                    </li>
                                    <li className={modalStyle.li_info}>
                                        <p className={modalStyle.li_txt}>attack = {pokemonInfo && pokemonInfo?.stats[1]?.base_stat}</p>
                                    </li>
                                    <li className={modalStyle.li_info}>                   
                                        <p className={modalStyle.li_txt}>defense = {pokemonInfo && pokemonInfo?.stats[2]?.base_stat}</p>
                                    </li>
                                    <li className={modalStyle.li_info}>                   
                                        <p className={modalStyle.li_txt}>special-attack = {pokemonInfo && pokemonInfo?.stats[3]?.base_stat}</p>
                                    </li>
                                    <li className={modalStyle.li_info}>                   
                                        <p className={modalStyle.li_txt}>special-defense = {pokemonInfo && pokemonInfo?.stats[4]?.base_stat}</p>
                                    </li>
                                    <li className={modalStyle.li_info}>                   
                                        <p className={modalStyle.li_txt}>speed = {pokemonInfo && pokemonInfo?.stats[5]?.base_stat}</p>
                                    </li>
                                    <li className={modalStyle.li_info}>                   
                                        <p className={modalStyle.li_txt}>type = {pokemonInfo && pokemonInfo?.types[0]?.type?.name}</p>
                                    </li>                       
                                </ul>
                            </div>
                            <div className={modalStyle.divModalImg}>
                                <img src={pokemonInfo && pokemonInfo?.sprites?.front_default} alt={itemSelect?.name} className={modalStyle.modalImg}/>
                            </div>
                        </div>
                    </section>
                </Modal>
            </div>
        </main>
    )
}
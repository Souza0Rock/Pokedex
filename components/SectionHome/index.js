import React, { useEffect, useState } from 'react';
import Router from 'next/router'
import axios from 'axios';
import styles from '../../styles/Home.module.css'
import modalStyle from '../../styles/ModalStyles.module.css'
import Modal from 'react-modal';

export default function SectionHome() {

    const [resposta, setResposta] = useState("");
    const [pokemon, setPokemon] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const failed = (pokemon) => {
        if (pokemon === '') {
            alert("Digite o nome de um pokemon!")
        }
    }

    const pokemoLendas = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => {

        setResposta(response.data);
        setOpenModal(true);
        })
        .catch((error) => {
            alert("Quem é esse pokemon?");
        });
    };

    function closeModal() {
        setOpenModal(false);
    }

    return (
        <section>
            <div className={styles.container}>
                <div className={styles.divImgLogo}>
                    <img src='../images/pokemon-bg.png' className={styles.imgLogo} />
                </div>
                <div className={styles.formsButton} >
                    <div className={styles.formsContainer}>
                        <input
                            type={"text"} 
                            placeholder={"Encontre seu pokemon!"} 
                            className={styles.formRequest} 
                            onChange={(e) => 
                                setPokemon(e.target.value.toLowerCase(pokemon))
                            } 
                        />
                        <button type='submit' className={styles.formRequest} 
                        onClick={() => {
                        pokemoLendas();
                        failed()}}>Abrir</button>
                    </div>
                    <button type='button' className={styles.button} onClick={() => { Router.push('/Characters') }}>Todos os Pokemons</button>
                </div>
            
                {openModal && resposta && (
                <Modal
                isOpen={openModal}
                onRequestClose={closeModal}
                overlayClassName={modalStyle.modalOverlay}
                className={modalStyle.modalContent}>
                    <section className={modalStyle.section}>
                        <div className={modalStyle.divHead}>
                            <h1 className={modalStyle.title}>{resposta?.name}</h1>
                            <div className={modalStyle.divXClose} onClick={() => setOpenModal(false)}>
                                <p className={modalStyle.xClose}>x</p>
                            </div>
                        </div>
                        <div className={modalStyle.divBody}>
                            <div className={modalStyle.contentTxt}>
                                <ul className={modalStyle.ulTxt}>                    
                                    <li className={modalStyle.li_info}>
                                        <p className={modalStyle.li_txt}>hp = {resposta && resposta?.stats[0]?.base_stat}</p>
                                    </li>
                                    <li className={modalStyle.li_info}>
                                        <p className={modalStyle.li_txt}>attack = {resposta && resposta?.stats[1]?.base_stat}</p>
                                    </li>
                                    <li className={modalStyle.li_info}>                   
                                        <p className={modalStyle.li_txt}>defense = {resposta && resposta?.stats[2]?.base_stat}</p>
                                    </li>
                                    <li className={modalStyle.li_info}>                   
                                        <p className={modalStyle.li_txt}>special-attack = {resposta && resposta?.stats[3]?.base_stat}</p>
                                    </li>
                                    <li className={modalStyle.li_info}>                   
                                        <p className={modalStyle.li_txt}>special-defense = {resposta && resposta?.stats[4]?.base_stat}</p>
                                    </li>
                                    <li className={modalStyle.li_info}>                   
                                        <p className={modalStyle.li_txt}>speed = {resposta && resposta?.stats[5]?.base_stat}</p>
                                    </li>
                                    <li className={modalStyle.li_info}>                   
                                        <p className={modalStyle.li_txt}>type = {resposta && resposta?.types[0]?.type?.name}</p>
                                    </li>                       
                                </ul>
                            </div>
                            <div className={modalStyle.divModalImg}>
                                <img src={resposta && resposta?.sprites?.front_default} alt={resposta?.name} className={modalStyle.modalImg}/>
                            </div>
                        </div>
                    </section>
                </Modal>)}
            </div>
        </section>
    )
}
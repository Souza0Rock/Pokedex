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

    const falha = (pokemon) => {
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
                <div>
                    <input type={"text"} placeholder={"Encontre seu pokemon!"} className={styles.formRequest} onChange={(e) => setPokemon(e.target.value)} />
                    <button type='submit' className={styles.formRequest} 
                    onClick={() => {
                        pokemoLendas();
                        falha()}}>Abrir</button>
                </div>
                <div>
                    <button type='button' className={styles.button} onClick={() => { Router.push('/Characters') }}>Todos os Pokemons</button>
                </div>
            
                {openModal && resposta && (
                <Modal
                    isOpen={openModal}
                    onRequestClose={closeModal}
                    overlayClassName={modalStyle.modalOverlay}
                    className={modalStyle.modalContent}>
                    <section className={modalStyle.section}>
                        <div className={modalStyle.nameDiv}>
                            <h1 className={modalStyle.title}>{resposta && resposta?.name}</h1>
                        </div>
                        <div className={modalStyle.contentTxt}>
                            <ul>
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
                            <img src={resposta && resposta?.sprites?.front_default} alt={pokemon?.name} className={modalStyle.modalImg} />
                        </div>
                        <div className={modalStyle.divXClose} onClick={() => setOpenModal(false)}>
                            <p className={modalStyle.xClose}>x</p>
                        </div>
                    </section>
                </Modal>)}
            </div>
        </section>
    )
}
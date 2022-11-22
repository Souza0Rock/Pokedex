import Router from 'next/router'
import styles from '../../styles/Characters.module.css'

export default function Header () {
    return (
        <header>
            <div className={styles.container}>
                <img alt='voltar' src='../images/icon-voltar.png' width={'110px'} className={styles.iconBack} onClick={() => Router.push('../')} />                    
                <h1 className={styles.header_title}>Lista de Pokemons</h1>
            </div>
        </header>        
    )
}
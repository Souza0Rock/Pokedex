import Router from 'next/router'
import styles from '../../styles/Characters.module.css'

export default function Header () {
    return (
        <header>
            <div>
                <h1 className={styles.header_title}>Lista de Pokemons</h1>
                <img alt='voltar' src='../images/icon-voltar.png' width={'150px'} className={styles.iconBack} onClick={() => Router.push('../')} />                    
            </div>
        </header>        
    )
}
import styles from '../../styles/Characters.module.css'
import Header from '../../components/Header'
import Main from '../../components/Main'

export default function Characters () {
    return (
        <div className={styles.containerBody}>
            <Header />
            <Main />
        </div>
    )
}
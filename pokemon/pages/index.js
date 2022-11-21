import styles from '../styles/Home.module.css'
import { Router } from 'next/router'

export default function Home() {
  return (
    <div className={styles.container}>
      <form className={styles.formsContainer}>
        <div>
          <input type={"text"} name={"name"} placeholder={"POKEMON"} className={styles.formRequest} />
          <button type='submit' className={styles.formRequest}>Abrir</button>
        </div>
        <div>
          <button type='button' className={styles.button} onClick={() => {Router.push('/Characters')}}>All Pokemons</button>
        </div>
      </form>
    </div>
  )
}

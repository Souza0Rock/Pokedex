import Router from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <form className={styles.formsContainer}>
        <div>
          <input type={"text"} name={"name"} placeholder={"Encontre seu pokemon!"} className={styles.formRequest} />
          <button type='submit' className={styles.formRequest}>Abrir</button>
        </div>
        <div>
        <button type='button' className={styles.button} onClick={() => {Router.push('/Characters')}}>Todos os Pokemons</button>
        </div>
      </form>
    </div>
  )
}

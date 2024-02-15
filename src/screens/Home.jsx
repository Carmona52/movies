import React from 'react'
import styles from "../styles/home.module.css"

const Home = () => {
  return (
    <main className={styles.main}>
    <h1 className={styles.title}>PELICULAS & Series CARMONA, LA MEJOR PIRATERIA DE INTERNET</h1>
    <div className={styles.container}>
      <div className={styles.Peliculas}>
        <h2 className={styles.textos}>Peliculas</h2>
        <div>
          <div> <a href="/movies"><img src="https://th.bing.com/th/id/R.7035b3da4a1afc74552ad12cd3a1b4a2?rik=VkWdSWQtb0GsPA&riu=http%3a%2f%2fblog.karachicorner.com%2fwp-content%2fuploads%2f2013%2f04%2flarge%2fTheWolverine%2bmovie%2bposters.jpg&ehk=N%2bbfqw%2bRWmlunIYyKg0rzZvWYKrqrujZiaIw1YB5%2fhs%3d&risl=&pid=ImgRaw&r=0" alt="" style={{ padding: 20, height: 600 }} /></a></div>
        </div>
      </div>
      <div className={styles.Series}>
        <h2 className={styles.textos}>Series</h2>
        <div>
          <div><a href="./series"><img src="https://th.bing.com/th/id/OIP.KTYm6Is-fyUpbRwLwUKT_AAAAA?rs=1&pid=ImgDetMain" alt="" style={{ padding: 20, height: 600 }} /></a></div>
        </div>
      </div>
    </div>
  </main>
);
}

export default Home
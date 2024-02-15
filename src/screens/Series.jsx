import React from 'react';
import styles from "../styles/Movies.module.css";
import Card from "../components/serieCard"

const movies = () => {
  return (
    <main className={styles.main}>
      <div> <Card></Card></div>
    </main>
  )
}

export default movies
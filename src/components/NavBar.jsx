import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../styles/NavBar.module.css"
const links = [{
    name: "Home",
    href:"/home"
},
{
    name:"Movies",
    href:"/movies"
},
{
    name:"Series",
    href:"/series"
}
]
const NavBar = () => {
  return (
    <main className={styles.main}>
    <div>
    {links.map((x)=> (
        <Link to={x.href} className={styles.links}>{x.name}</Link>
    ))}
    </div>
    </main>
  )
}

export default NavBar
import styles from './layout.module.scss'
import Image from 'next/image'

export default function Header() {
    return(
    <header className={styles.header}>
        <Image className={styles.headerLogo} priority src={"/images/logo.png"} alt='image isnt loading' 
        sizes='100vw' width={0} height={0} placeholder='empty'></Image>
        <div className={styles.searchBar}>
            <p>test</p>
        </div>
        <div className={styles.rightSide}>
            <p>Header</p>
        </div>
        <div className={styles.navbar}>
            <p>New in Stock</p>
            <p>Topsellers</p>
            <p>Vinyl</p>
            <p>CDs</p>
            <p>Genres</p>
        </div>
    </header>
    )
}
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Layout = (props) => {
    return (
        <div className={styles.container}>
        <Head>
          <title>Wolftrack - Runners happy place</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
            {props.children}
       </main>
  
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/wolfpack-logo.png" alt="Wolfpack Logo" className={styles.logo} />
          </a>
        </footer>
      </div>

    )
}

export default Layout;
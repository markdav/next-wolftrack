import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import {useQuery} from 'react-query';

export const getStaticProps = async(context) => {
  return {
    props: {
      content: "Good Dog",
    }
  }
}

async function getUserProfile(){
  const res = await fetch('http://localhost:3000/api/user')
  return await res.json();
}

export default function Home() {
  const {isLoading, error, data} = useQuery('user', getUserProfile);
  return (
    <Layout>
      <div>      
      <p className={styles.description}>
          <img src='/wolfpack-logo.png'></img>
        </p>
        <h1 className={styles.title}>
          Welcome { data?.user.firstName} to <Link href="/"><a>Wolftrack!</a></Link>
        </h1>

        <p className={styles.description}>
          The home of good training!
        </p>

        <div className={styles.grid}>
          <a href="/profile" className={styles.card}>
            <h3>My Profile&rarr;</h3>
            <p>Update details about your training data.</p>
          </a>
          
          <a href="/plan" className={styles.card}>
            <h3>My Plan &rarr;</h3>
            <p>View your training plan!</p>
          </a>

          <a href="/log" className={styles.card}>
            <h3>My Training Log&rarr;</h3>
            <p>View your progress versus your plan.</p>
          </a>          

          <a
            href="/athletes"
            className={styles.card}
          >
            <h3>Athletes  &rarr;</h3>
            <p>Manage the athletes you coach.</p>
          </a>

          <a
            href="/clubs"
            className={styles.card}
          >
            <h3>Clubs &rarr;</h3>
            <p>
              Search for and join Clubs
            </p>
          </a>

          <Link href="/about">
          <a className={styles.card}>
            <h3>About Wolftrack &rarr;</h3>
            <p>Learn about Craughwell AC's Wolfpack tracking app</p>
          </a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

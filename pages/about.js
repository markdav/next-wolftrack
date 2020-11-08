import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

const About = () => {
    
    return(
    <Layout>
        <div>
            <h1 className={styles.title}>About Wolftrack</h1>
            <p>An application to allow coaches track wolves.  It will all start here!</p>
        </div>
    </Layout>
    )
}

export default About;


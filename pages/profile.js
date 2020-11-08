import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export async function getStaticProps(context) {
    // const res = await fetch('http://localhost:3000/api/hello');
    
    return {
      props: {
          content: "Mark"
        }, // will be passed to the page component as props
    }
  }

const Profile = ({content}) => {
    
    return(
    <Layout>
        <div>
            <h1 className={styles.title}>My Profile</h1>
    <p>{content}: View some detail on your profile here!</p>
        </div>
    </Layout>
    )
}

export default Profile;
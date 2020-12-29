import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => {
  return(
    <Layout>
      <h1>About</h1>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </Layout>
  );
};

export default AboutPage

import { Database } from '../utils/database';
import Layout from '../components/Layout'

const IndexPage = (props: any) => {
  return(
    <Layout>
      <div className="row">
        <div className="col-6">
          <h1>Hello World 👋</h1>
        </div>
        <div className="col-6">
          <p>col-6</p>
        </div>
        <div className="col-12">
          <h1>col-12</h1>
        </div>
      </div>
    </Layout>
  );
}

IndexPage.getInitialProps = async function () { 

  await Database.getDatabaseConnection();

  return {
    success: true
  }
}

export default IndexPage

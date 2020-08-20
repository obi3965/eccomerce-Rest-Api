import React from 'react'
import { Button, Jumbotron } from 'react-bootstrap'
import Layout from '../../components/Layout';

const Home= (props) => {
    return ( 
        <div className="app">
        <Layout>
            <Jumbotron>
                hi
            </Jumbotron>
             <Button variant="primary">Primary</Button>
        </Layout>
        </div>
    )
}

export default Home;
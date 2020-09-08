import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import './category.css'
import { getAllCategories } from '../../actions'
/**
* @author
* @function Category
**/

const Category = (props) => {

     const dispatch = useDispatch();

    useEffect(() =>{
   dispatch(getAllCategories())
    }, [])

  return(
    <Layout sidebar>
    <Container>
        <Row>
            <Col md={12}>
              <div className="category-box">
                  <h3>all categories</h3>
                  <Button>Add Category</Button>
              </div>
            </Col>
        </Row>
    </Container>
    
    </Layout>
   )

 }

export default Category
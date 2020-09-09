import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col, Button, Modal, Form, } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./category.css";
import { getAllCategories, addCategory } from "../../actions";
import Input from "../../components/UI/Input";
/**
 * @author
 * @function Category
 **/

const Category = (props) => {
  const category = useSelector((state) => state.category);
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
   const [parentCategoryId, setParentCategoryId] = useState("");
   const [categoryImage, setCategoryImage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const handleClose = () => {
    const form = new FormData()
    form.append('name', categoryName)
    form.append('parentId', parentCategoryId)
    form.append('categoryImage', categoryImage)
    
    dispatch(addCategory(form))

    setShow(false); 
  }
 

  const handleShow = () => setShow(true);


  const handleCategoryImage = (e) =>{

   setCategoryImage(e.target.files[0])
  }
  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li key={category.name}>
          {category.name}
          {category.children.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }
    return myCategories;
  };

  const createCategoryList = (categories, options = []) =>{
  for(let category of categories){
    options.push({ value: category._id, name:category.name})
    if(category.children.length > 0){
      createCategoryList(category.children, options)
    }
  }
  return options
  }

  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div className="category-box">
              <h3>categories</h3>
               
              <Button onClick={handleShow}>Add Category</Button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div className="category-box">
              <ul>
                {renderCategories(category.categories)}
                
              </ul>
              
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            value={categoryName}
            placeholder={`category Name`}
            onChange={(e) => setCategoryName(e.target.value)}
          />
       <Form.Group>
           <Form.Control as="select" size="md" value={parentCategoryId }
            onChange={(e) => setParentCategoryId(e.target.value)}>
             <option>select categories</option>
             {createCategoryList(category.categories).map(option => <option key={option.value}>{option.name}</option>)}    
             </Form.Control>
           </Form.Group>
           <Form.File id="file" name="categoryImage" onChange={handleCategoryImage} label="Example file input" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" size="md" onClick={handleClose}>
           Create
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default Category;

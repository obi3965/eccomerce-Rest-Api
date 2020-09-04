import React from 'react'
//import { Container } from 'react-bootstrap'
/**
* @author
* @function Layout
**/

import Header from '../Header/index'
const Layout = (props) => {
  return(
    <>
    <Header/>
   
      {props.children}
    
    
    </>
   ) 

 }

export default Layout

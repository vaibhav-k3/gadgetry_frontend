import React from "react";
import { Container , Row , Col } from "react-materialize";

import ProductCard from "./ProductCard/ProductCard";

const AllProductsPage = () =>{
    let keys = [1,2,3,4,5]
    const AllProductsPage = 
    <Container>
        <Row>
            {
                keys.map((i)=>{
                   return ( 
                   <Col
                   m = {4}>
                   
                    <a href="#">
                            <ProductCard cardkey = {i.toString()} />
                    </a>
                    </Col>
                     )
                   })

            }

        </Row>
    </Container>

    return AllProductsPage

}

export default AllProductsPage
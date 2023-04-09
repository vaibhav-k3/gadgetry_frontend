import React from "react";
import 'materialize-css'
import { Card } from "react-materialize";
import {CardTitle , Icon} from "react-materialize";

const ProductCard = (props) =>{
    console.log(props.cardkey)
    const ProductCard = 
      <Card
        actions={[
          <a key="1" href="#">This is a link</a>,
          <a key="2" href="#">This is a link</a>
        ]}
        className="blue lighten-5 "
        closeIcon={<Icon>close</Icon>}
        revealIcon={<Icon>more_vert</Icon>}
        textClassName="black-text"
        title="Card title"
        key={props.cardkey}
        header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
      >
        I am a very simple card.
      </Card>

    return ProductCard
}

export default ProductCard
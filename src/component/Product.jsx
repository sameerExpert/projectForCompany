import React, { useEffect, useState } from "react";
import ProductItems from "./ProductItems";
import { Link } from "react-router-dom";

// import Categoryitems from "./Categoryitems";

const Product = (props) => {


      const[article,setFake]=useState([])
      useEffect(()=>{
        fakestore()
      },[])
    const fakestore=async()=>{
        const Data = await fetch('https://fakestoreapi.com/products/')
        const parseData= await Data.json();
        setFake(parseData)
    }
  

  return (
    <main className="main">
      <div className="container fech ">
        <div className="container NewProduct">
          <div className="container newproduct-list">
            <div className=" n">New Product</div>
            <div className=" arrow">
              <div className="arrow2"></div>
              <div className="arrow1"></div>
            </div>
          </div>
          <div className="container line1"></div>
        </div>

        <section className=" section2">
        <div className="nav4">
        <ul type="none" className="ul">
       <li>
      <Link className="a2" to="/Electronics ">
        Electronics
      </Link>
    </li>
    <li>
      <Link className="a2" to="/Jewelery ">
        Jewelery
      </Link>
    </li>
    <li>
      <Link className="a2" to="/Mens Clothing ">
        Men's Clothing
      </Link>
    </li>
    <li>
      <Link className="a2" to="/Womens Clothing ">
        Women's Clothing
      </Link>
    </li>
  </ul>
           </div>

          <div className=" container product">
            <div className="product-item">
                {article.map((element)=>{
                    return(
                        <div  key={element.id} >
                           <ProductItems
                           image={element.image}
                           description={element.description.slice(0,145)}
                           title={element.title}
                           price={element.price}
                           />
                        </div>
                    )
                     
                })}
              
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Product;

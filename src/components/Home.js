import React, { useState } from "react";
import Tabs from "./Tabs";
import data from "../data";
import Food from "./Food";

const allcategories = ['All' , ...new Set (data.map((item) => item.category))] 

function Home() {
    const [dataa , setData] = useState(data)
    const [categories , setCategories] = useState(allcategories)
    const filterItems = (category) =>{
        if(category === 'All'){
            setData(data)
            return
        }
        const newItems = data.filter((item) => item.category === category)
        setData(data)
        setData(newItems)
    }
    
  return (
    <div className="container">
      <div className="container-header">
        <h1 className="container-header-title">Our Menu</h1>
        <div className="line"></div>
      </div>
      <Tabs categories={categories} filter={filterItems}/>
      <div className="food-container">
        {dataa.map((food) =>{
            return( <Food key={food.id} food={food} /> )
        })}
      </div>
    </div>
  );
}

export default Home;

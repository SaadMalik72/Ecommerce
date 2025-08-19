import React from 'react'
import Heading from '../Shared/Heading';
import ProductCard from './ProductCard';
import Img1 from '/Created Website/ECommers in react.js/Ecommerce/src/assets/product/p-1.jpg';
import Img2 from '/Created Website/ECommers in react.js/Ecommerce/src/assets/product/p-2.jpg';
import Img3 from '/Created Website/ECommers in react.js/Ecommerce/src/assets/product/p-3.jpg';
import Img4 from '/Created Website/ECommers in react.js/Ecommerce/src/assets/product/p-4.jpg';
import Img5 from '/Created Website/ECommers in react.js/Ecommerce/src/assets/product/p-5.jpg';
import Img6 from '/Created Website/ECommers in react.js/Ecommerce/src/assets/product/p-7.jpg';
import Img7 from '/Created Website/ECommers in react.js/Ecommerce/src/assets/product/p-9.jpg';

const ProductsData = [
    {
        id:1,
        img: Img1,
        title: "Boat Headphone",
        price: "120",
        asoDelay: "0",
    },
    {
        id:2,
        img: Img2,
        title: "Rocky Mountain",
        price: "420",
        asoDelay: "200",
    },
    {
        id:3,
        img: Img3,
        title: "Goggles",
        price: "320",
        asoDelay: "400",
    },
    {
        id:4,
        img: Img4,
        title: "Printed",
        price: "220",
        asoDelay: "600",
    },
]
const ProductsData2 = [
    {
        id:1,
        img: Img5,
        title: "Boat Headphone",
        price: "120",
        asoDelay: "0",
    },
    {
        id:2,
        img: Img6,
        title: "Rocky Mountain",
        price: "420",
        asoDelay: "200",
    },
    {
        id:3,
        img: Img7,
        title: "Goggles",
        price: "320",
        asoDelay: "400",
    },
    {
        id:4,
        img: Img1,
        title: "Printed",
        price: "220",
        asoDelay: "600",
    },
]
const Products = () => {
return (
    <div>
        <div className="contanier">
            {/* Header Section */}
                <Heading title="Our Products" subtitle={"Explore Our Product"}/>
            {/* Body Section */}
            <ProductCard data= {ProductsData}/>
            <ProductCard data= {ProductsData2}/>
        </div>
    </div>
)
}

export default Products;
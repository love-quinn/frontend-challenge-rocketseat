"use client"

import useProducts from "@/hooks/useProducts";

const ProductList = () => {
    const { data } = useProducts();
    console.log(data);
    return ( 
        <></>
     
    
    );
}
 
export default ProductList;
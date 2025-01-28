import React from "react";
import { BothNavBars } from "../../HOC";
import Products from "./products";

const ProductsParent = BothNavBars(() => {
    return (
        <Products />
    )
});
export default ProductsParent
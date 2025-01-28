import React from "react";
import { BothNavBars } from "../../HOC";
import Categories from "./categories";

class CategoriesParent extends React.Component {
    render() {
        return <Categories />;
    }
}

export default BothNavBars(CategoriesParent);

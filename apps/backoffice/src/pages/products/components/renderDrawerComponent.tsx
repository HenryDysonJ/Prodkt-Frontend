import { AddProductComp } from "./addProductComp";
import { FilterComp } from "./filterComp";
import { drawerComponentInterface } from "../interface";
import { ViewProduct } from "./viewProduct";

export const renderDrawerComponent = (props: drawerComponentInterface) => {
    const {
        drawerType,
        handleChange,
        addProductState,
        viewProductDetials,
        handleDeleteImage,
        handleAddSpecs,
    } = props;
    switch (drawerType) {
        case 'singleRequestDrawer':
            return <AddProductComp
            handleChange={handleChange}
            addProductState={addProductState}
            handleDeleteImage={handleDeleteImage}
            handleAddSpecs={handleAddSpecs}
        />
            break;
        case 'filter':
            return <FilterComp
                addProductState={addProductState}
                handleChange={handleChange}
            />
            break;
        case 'add':
            return <AddProductComp
                handleChange={handleChange}
                addProductState={addProductState}
                handleDeleteImage={handleDeleteImage}
                handleAddSpecs={handleAddSpecs}
            />
            break;
        case 'view':
            return <ViewProduct viewProductDetials={viewProductDetials} />
            break;

        default:
            break;
    }
}
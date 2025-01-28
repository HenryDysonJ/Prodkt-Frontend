import { AddCategoryComp } from "./addCategoryComp";
import { ViewCategory } from "./viewCategory";

export const renderDrawerComponent = (props: any) => {
    const {
        drawerType,
        handleChange,
        categoryState,
        handleDeleteImage,
        handleAddSpecs,
        handleUndoSpecs,
    } = props;
    switch (drawerType) {
        case 'edit':
            return <AddCategoryComp
                handleChange={handleChange}
                addProductState={categoryState}
                handleDeleteImage={handleDeleteImage}
                handleAddSpecs={handleAddSpecs}
                isEdit={true}
                handleUndoSpecs={handleUndoSpecs}
            />
            break;
        case 'add':
            return <AddCategoryComp
                handleChange={handleChange}
                addProductState={categoryState}
                handleDeleteImage={handleDeleteImage}
                handleAddSpecs={handleAddSpecs}
                handleUndoSpecs={handleUndoSpecs}
                isEdit={false}
            />
            break;
        case 'view':
            return <ViewCategory viewCategoryDetials={categoryState} />
            break;
        default:
            break;
    }
}
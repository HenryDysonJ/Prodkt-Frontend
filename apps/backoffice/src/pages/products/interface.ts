import { AddProductStateInterface } from "@core/store/interface";
import { TableProps } from "@crayond_dev/ui_table"

export interface drawerComponentInterface {
    drawerType?: string;
    addProductState?: AddProductStateInterface;
    handleChange?: (key: string, value: string | number, index?: number, warrantItem?: string) => void;
    handleFilter?: () => void;
    handleSelectCategory?: () => void;
    viewProductDetials?: AddProductStateInterface;
    handleDeleteImage: (value: string) => void;
    handleAddSpecs: (label: string, value: string) => void;
    file?: File
}


export interface viewProductInterface {
    viewProductDetials: AddProductStateInterface;
}

export interface tableWithTabsProps {
    header: TableProps['Header'];
    tableData: TableProps['tableData'];
    dataList: TableProps['dataList']
}
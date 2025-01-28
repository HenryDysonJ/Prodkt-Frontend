import {
    TablePagination
} from "@mui/material";


interface Pagination {
    totalCount?: string | null;
    page?: string | null;
    rowsPerPage?: string | null;
    rowsPerPageOptions?: string;
    handleChangePage?: (e: React.MouseEvent<HTMLButtonElement> | null, number: null) => void;
    handleChangeRowsPerPage?: () => void;
}


export const CustomTablePagination = (props: any) => {
    const { rowsPerPageOptions = '', totalCount = '', rowsPerPage = '', page = '', handleChangePage, handleChangeRowsPerPage } = props;


    return (
        <>
            <TablePagination
            // sx={{"& .MuiTablePagination-selectLabel": {
            //     color: "#71707E",
            //   },
            //   "& .MuiTablePagination-displayedRows": {
            //     color: "#71707E",
            //   },
            //   "& .css-bigdbh-MuiInputBase-root-MuiTablePagination-select": {
            //     color: "#71707E",
            //     "@media (max-width: 426px)": {
            //       marginRight: "4px !important",
            //       marginLeft: "0px",
            //     },
            //   },
            //   "& .MuiTablePagination-actions": {
            //     "@media (max-width: 426px)": {
            //       marginLeft: "2px",
            //     },
            //   },}}
                rowsPerPageOptions={rowsPerPageOptions}
                component="div"
                count={totalCount}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    )
}
import { Pagination, PaginationProps } from '@crayond_dev/ui_pagination';
import { Typography } from '@mui/material';

import usePagination from '../../../utils/hooks/usePagination';
// import { DownPagenationArrow,LeftPaginationArrow, RightPaginationArrow } from '../../assets';
import DownPagenationArrow from '../../assets/paginationDownArrow'
import LeftPaginationArrow from '../../assets/paginationLeftArrow'
import RightPaginationArrow from '../../assets/paginationRightArrow'

export interface ICustomPaginationProps extends PaginationProps {
  totalRowCount: number;
  onPerPageChange: (e:any,val: number) => void;
  onPageChange: (val: number) => void;
  perPageOptions?: Array<string>;
  defaultPerPageCount?: string;
  offset?: any, limit?: any, totalCountNo?: any,
}

export function CustomPagination(props: ICustomPaginationProps) {
  const {
    totalRowCount,
    onPerPageChange,
    onPageChange,
    perPageOptions = ['5', '10', '15', '20', '25'],
    defaultPerPageCount = '10',
    offset, limit, totalCountNo,
    ...rest
  } = props;

  const { numberOfPages, pageNumber, perPageCount, handlePerPageChange, handlePageChange } = usePagination({
    totalRowCount,
    defaultPerPageCount,
  });

  return (
    <Pagination
      count={numberOfPages} // Number of pages (number)
      perPage={pageNumber} // Current Page Number (number)
      totalCount={["5", "10", "15", "20", "25"]}
      value={perPageCount} // Stores the per page count (string)
      handleChange={(event) => handlePerPageChange(event.target.value, onPerPageChange)} // Handles the select options for per page change
      handleChangePage={(event, page) => handlePageChange(page, onPageChange)} // Handles the page change
      pageText='Page'
      variant='text'
      shape='rounded'
      disabled={false}
      size='small'
      startIcon={<LeftPaginationArrow />}
      endIcon={<RightPaginationArrow />}
      selectIcon={<DownPagenationArrow />}
      paginationBoxStyle={{
        '& .MuiSelect-icon': {
          top: '0.2rem',
          right: '-0.2rem',
        },
      }}
      showPaginationBottomCountText={
        <>
          <Typography sx={{
            fontSize: "1.2rem",
            fontWeight: "400",
            lineHeight: "1.6rem",
            color: "text.secondary",
          }}>
            {`showing ${offset * limit + 1} - ${totalCountNo < (offset + 1) * limit
              ? totalCountNo
              : (offset + 1) * limit
              } of ${totalCountNo} records`}
          </Typography>
        </>
      }
      {...rest}
    />
  );
}

export default CustomPagination;

import './style.css';

import { CustomMenu, CustomPagination, ICustomPaginationProps } from '@atoms';
import { getDefaultTableProperties, IColumnData, IHeaderData } from '@core/utils';
import { Pagination } from '@crayond_dev/ui_pagination';
import { Table } from '@crayond_dev/ui_table';
import { Box, SxProps, useTheme } from '@mui/material';
import { type PopupState } from 'material-ui-popup-state/hooks';

export interface IActionMenuItem {
  id: string;
  label: string;
  value?: string;
  [key: string]: any;
}

export interface CustomTableProps extends ICustomPaginationProps {
  header: Array<IHeaderData>;
  dataList: Array<{ [key: string]: any }>;
  columnData: Array<IColumnData>;
  actionMenuItems: Array<IActionMenuItem>;
  popupState: PopupState;
  handleMenuItemClick: (val: any) => void;
  hidePagination?: boolean;
  totalRowCount: any;
  onPageChange: (val: any) => void
  onPerPageChange: (val: any) => void
  value?: any
}

export function CustomTable(props: CustomTableProps) {
  const theme = useTheme();

  const {
    header,
    dataList,
    columnData,
    actionMenuItems,
    popupState,
    handleMenuItemClick,

    // Pagination Props
    hidePagination = false,
    totalRowCount,
    onPerPageChange,
    onPageChange,
    perPageOptions,
    defaultPerPageCount,
    offset,
    limit,
    totalCountNo,
    count,
    value,
  } = props;

  const defaultTableProps = {
    ...getDefaultTableProperties(theme),
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 216px)'

        // gap: 4,
        // backgroundColor: '#fff',
      }}
    >
      <Box sx={{ height: `calc(100% - ${hidePagination ? '0px' : '80px'})` }}>
        <Table
          {...(defaultTableProps as any)}
          sx={{
            'height': '100%',
            'minHeight': '100%',
            '& div': {
              height: '100%',
            },
          }}
          Header={header}
          dataList={dataList}
          tableData={columnData}
          tableMaxHeight={'100%'}
        />

        <CustomMenu
          popupState={popupState}
          actionMenuItems={actionMenuItems}
          handleMenuItemClick={handleMenuItemClick}
        />
      </Box>

      {
        !hidePagination && (
          <Box sx={{ mt: '20px' }}>
            <CustomPagination
              totalRowCount={totalRowCount}
              onPageChange={onPageChange}
              onPerPageChange={onPerPageChange}
              perPageOptions={perPageOptions}
              defaultPerPageCount={defaultPerPageCount}
              offset={offset}
              limit={limit}
              totalCountNo={totalCountNo}
              count={count}
              value={value}
            />
          </Box>
        )
      }
    </Box >
  );
}

export default CustomTable;

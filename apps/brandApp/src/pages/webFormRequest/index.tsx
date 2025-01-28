import { useBrandWebForm, useModuleMasters } from "@core/store/brand-app";
import DataListOptionsBar from "@core/ui/atoms/dataListOptionsBar";
import CustomTable, { IActionMenuItem } from "@core/ui/atoms/table";
import TopBar from "@core/ui/components/brandTopBar";
import { getHeaderData } from "@core/utils";
import { useTableMenu } from "@core/utils/hooks";
import { Box, Grid, Stack, SxProps, Theme } from "@mui/material";
import moment from "moment";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { isObject } from "underscore";

import { segmentStyle } from "./style";

export interface SegmentProp {
  className?: string;
  sx?: SxProps<Theme>;
}

export function WebFormRequest(props: SegmentProp): JSX.Element {
  const { className = "", sx = {}, ...rest } = props;
  const { webFormmMaster } = useBrandWebForm();
  const {
    search,
    sortItem,
    webFormId,
    WebformResponseList,
    getWebformResponseList,
    sethandleSortItem,
    setHandleSearch,
    getWebformExportModule,
    getWebformImportModule,
    importData,
    exportData,
    setLimit,
    setOffset,
    limit,
    offset,
  } = useModuleMasters();
  const {
    popupState,
    restBindTriggerProps,
    currentRow,
    handleMenuClick,
    handleMenuClose,
  } = useTableMenu({
    popupId: "warranty-menu",
  });

  const { webform_id } = useParams();

  const handleSortByChange = (sortBy: any) => {
    sethandleSortItem(sortBy);
  };

  const handleMenuItemClick = (menuItem: IActionMenuItem) => {
    console.log("handleMenuItemClick \n", menuItem);
    console.log("handleMenuItemClick currentRow\n", currentRow);
    handleMenuClose();
  };

  const handlePageChange = (e: any, page: any) => {
    setOffset(page - 1);
  };

  const handlePerPageChange = (e: any) => {
    const perPage = parseInt(e.target.value, 10);
    setLimit(perPage);
    setOffset(0);
  };

  const changeName = (name: string) => {
    return name.replace(/\s+/g, "_");
  };

  // This Part helps to pagination
  const totalCount = WebformResponseList?.webformResponseData?.length || 0;
  const pageCount = Math.ceil(totalCount / parseInt(String(limit), 10));
  const currentPageString = limit?.toString();

  const moduleHeader: { id: string; label: string }[][] =
    (WebformResponseList?.webformResponseData?.length > 0 &&
      WebformResponseList?.webformResponseData?.map((forms) => {
        const heads: { id: string; label: string }[] = [];
        forms?.value_json?.formDataList?.forEach((list: any) => {
          if (list?.componentType?.label !== "Button" && list?.isMandatory) {
            heads.push({
              id: changeName(list?.questions),
              label: list?.questions,
            });
          }
        });
        return heads;
      })) ||
    [];

  const header = getHeaderData([
    { id: "Registered_Date", label: "Registered Date and Time" },
    { id: "Ticket_ID", label: "Ticket ID" },
    ...(moduleHeader.length > 0 ? moduleHeader[0] : []),
    // { id: "action", label: "" },
  ]);
  const columnData = header?.map((list) => {
    return { type: ["TEXT"], name: list?.id };
  });

  const moduleColumnData = [...(columnData?.length > 0 ? columnData : [])];

  const listingData: any[] =
    (WebformResponseList?.webformResponseData?.length > 0 &&
      WebformResponseList?.webformResponseData?.map((forms) => {
        const lists: any[] = [];
        forms?.value_json?.formDataList?.forEach((items: any, i: number) => {
          header?.forEach((list) => {
            if (changeName(items?.questions) === list?.id) {
              const obj = {
                [list?.id]: isObject(items?.compValue)
                  ? items?.compValue?.label ||
                  `${items?.compValue?.mobileCode} ${items?.compValue?.mobile}`
                  : items?.compValue,
                Registered_Date: moment(items?.created_at).format(
                  "DD-MM-YYYY, hh:mm A"
                ),
                Ticket_ID: items?.id,
              };
              lists.push(obj);
            }
          });
        });
        const result = {};
        for (const item of lists) {
          Object.assign(result, item);
        }
        return result;
      })) ||
    [];

  const findFormName = () => {
    return webFormmMaster?.webFormMasterData?.find(
      (forms: any) => forms?.id === webform_id
    );
  };

  const initialCall = async () => {
    await getWebformResponseList(webform_id ? webform_id : "");
  };

  useEffect(() => {
    if (webform_id) {
      initialCall();
    }
    getWebformExportModule(webform_id);
    getWebformImportModule(webform_id);
  }, [webform_id]);

  return (
    <Box
      sx={[
        {
          ...segmentStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <TopBar title={findFormName()?.name} backBtn={false} />
      <Stack sx={segmentStyle.tableCardStyle}>
        <Grid container sx={segmentStyle.gridContainer}>
          <Grid item xs={12}>
            <DataListOptionsBar
              hideFilter
              ctaVariant={"outlined"}
              search={search}
              handleSearch={(e) => setHandleSearch(e?.target?.value)}
              inputPlaceholder={"Search by customer name"}
              sortItem={sortItem}
              ctaText={"Export as CSV"}
              // ctaTextSecondary={'Import data'}
              // handleFilterClick={toggleFilter}
              handleOnSortChange={handleSortByChange}
              hrefExport={exportData}
              hrefImport={importData}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} spacing={2}>
            <CustomTable
              header={header}
              dataList={listingData || []}
              // columnData={[] as any}
              columnData={moduleColumnData as any}
              actionMenuItems={[{ id: "1", label: "Manage" }]}
              popupState={popupState}
              handleMenuItemClick={handleMenuItemClick}
              totalRowCount={listingData && listingData?.length}
              onPageChange={handlePageChange}
              onPerPageChange={handlePerPageChange}
              offset={offset}
              limit={limit}
              count={pageCount}
              value={parseInt(currentPageString, 10).toString()}
              totalCountNo={totalCount}
            />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

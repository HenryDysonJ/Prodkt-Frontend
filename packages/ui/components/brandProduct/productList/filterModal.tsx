import { TickIcon } from "@assets/brandAssets/tickIcon";
import { SelectChip } from "@crayond_dev/ui_select-chip";
import { Box, Stack, Typography } from "@mui/material";
import { productListStyle } from "./style";
import DownArrowIcon from "@assets/brandAssets/downArrow";
import { SelectAndautocomplete } from "@crayond_dev/ui_select-and-autocomplete";
import React, { useEffect } from "react";
import { useProductStore } from "@core/store";

const statusValue = [
    { label: "Active", value: "1" },
    { label: "Inactive", value: "2" },
];
export const FilterModal = () => {
    const { categoryList, getCategoryList, setFilterData, selectedOptions } = useProductStore()

    const productCategoryOptions = Array.isArray(categoryList?.rows)
        ? categoryList?.rows?.map((val: any) => ({
            label: val?.name,
            value: val?.id,
        }))
        : [];

    useEffect(() => {
        getCategoryList()
    }, [])

    return (
        <>
            <Stack
                direction={"column"}
                width={"100%"}
                gap={2}
                mb={2}
                justifyContent={"space-between"}
            >
                <SelectAndautocomplete
                    options={productCategoryOptions}
                    variant="filled"
                    selectType="chip"
                    limitTags={1}
                    freeSolo
                    value={selectedOptions?.categoryType ?? ''}
                    onChange={(e: any, value) => setFilterData("categoryType", value)}
                    label={"Choose product category"}
                    // addOptionBtnLabel='Add New'
                    addOptionAction={() => console.log("hih")}
                    endAdornmentIcon={<DownArrowIcon />}
                    rootStyleSx={productListStyle.selectLabelStyle}
                    optionStyle={{ fontSize: '1.4rem' }}
                    labelSx={{ fontSize: '2.2rem' }}
                    labelStyleProps={{ fontSize: '16px !important' }}
                />
                <Box mb={4}>
                    <Typography
                        mb={1}
                        sx={productListStyle.selectChipHeaderTextSx}
                    >
                        Status
                    </Typography>
                    <SelectChip
                        options={statusValue}
                        selectChange={(value: any) => setFilterData('statuses', value)}
                        isMultiple={true}
                        value={selectedOptions?.statuses}
                        startIcon={<TickIcon />}
                        borderRadius={"0.8rem"}
                        textStyle={productListStyle.textStyleSelect}
                        bgColor={"#fff"}
                        selectedBgcolor={"#1363DF"}
                        selectedBorderColor={"#1363DF"}
                        borderColor={"#D9DBDD"}
                        bgColorHover={"#FFFFFF"}
                        selectedTextColor={"#ffff"}
                        selectedWithIcon={true}
                        selectChipStyles={{ height: "4.6rem" }}
                        iconStyle={{ marginInlineStart: "0.4rem", marginInlineEnd: "0.4rem" }}
                        isShowIcon={true}

                    />
                </Box>
            </Stack>
        </>
    )
}
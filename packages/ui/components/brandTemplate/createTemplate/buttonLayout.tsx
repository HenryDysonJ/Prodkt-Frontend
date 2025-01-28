import React, { ChangeEvent } from "react";
import { createTemplateStyle } from "./style";
import { Box, Grid, IconButton } from "@mui/material";
import { SelectAndautocomplete } from "@crayond_dev/ui_select-and-autocomplete";
import DownArrowIcon from "@assets/brandAssets/downArrow";
import DeleteIcon from "@assets/brandAssets/delete";
import { InputField } from "@crayond_dev/ui_input-field";

interface Layout {
  selectValue: { label: string; value: string | number };
  handleSelectButton: (value: any) => void;
  children: any;
  handleDelete: () => void;
  viewType: string
}

const value = [
  { label: "URL", value: 1 },
  { label: "Phone number", value: 2 },
  { label: "Copy", value: 3 },
];

const ButtonLayout = (props: Layout) => {
  const { selectValue, handleSelectButton, children, handleDelete, viewType } = props;
  return (
    <>
      <Grid container mt={0}>
        <Box sx={createTemplateStyle.urlBox}>
          <Grid item xs={3}>
            <SelectAndautocomplete
              options={value}
              variant="filled"
              selectType="chip"
              limitTags={1}
              onChange={(e: ChangeEvent, value: any) =>
                handleSelectButton(value)
              }
              value={selectValue}
              label={"Button Type"}
              endAdornmentIcon={<DownArrowIcon />}
              rootStyleSx={createTemplateStyle.selectLabelStyle}
              optionStyle={{ fontSize: "1.4rem" }}
              labelSx={{ fontSize: "2.2rem" }}
              labelStyleProps={{ fontSize: "16px !important" }}
              disabled={viewType === 'view' ? true : false}
            />
          </Grid>
          {children}
          {viewType === 'view' ? '' :
            <IconButton sx={{ cursor: "pointer" }} onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          }
        </Box>
      </Grid>
    </>
  );
};

export default ButtonLayout;

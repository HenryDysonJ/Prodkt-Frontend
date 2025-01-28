import { Checkbox } from "@crayond_dev/ui_checkbox";
import {
  Autocomplete,
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";

import { CheckedWithTick } from "../../../assets/checkWithTick";
import DeleteIcon from "../../../assets/delete";
import DownArrowIcon from "../../../assets/downArrow";
import DragDropIcon from "../../../assets/dragDropIcon";
import { EmptyCheckedIcon } from "../../../assets/emptyCheck";
import ButtonIconComp from "../assets/button";
import CalenderIconComp from "../assets/calender";
import DropDownIconComp from "../assets/dropDown";
import FileUploadIconComp from "../assets/fileUpload";
import InputIconComp from "../assets/input";
import { componentStyle } from "./style";

interface ListOption {
  label: string;
  id: number;
}
interface ComponentProp {
  showMandatory?: boolean;
  isMandatory: boolean;
  isDelete?: boolean;
  isDisabledSelect?: boolean;
  componentVal: any;
  componentsList: ListOption[];
  childrenComponents: React.ReactNode;
  handleDeleteComponets: () => void;
  setCmponetVal: (val: ListOption) => void;
  setHandleMandatory: (val: any) => void;
}

const ComponentLayout = (props: ComponentProp) => {
  const {
    showMandatory,
    isMandatory,
    isDelete=true,
    isDisabledSelect=false,
    componentsList,
    childrenComponents,
    componentVal,
    handleDeleteComponets,
    setCmponetVal,
    setHandleMandatory,
  } = props;

  const handleSelectComponent = (
    e: React.SyntheticEvent<Element, Event>,
    val: ListOption
  ) => {
    setCmponetVal(val);
  };

  const renderIcon = (type: number) => {
    switch (type) {
      case 1:
        return <InputIconComp />;
      case 2:
        return <DropDownIconComp />;
      case 3:
        return <FileUploadIconComp />;
      case 4:
        return <CalenderIconComp />;
      case 5:
        return <ButtonIconComp />;
    }
  };

  return (
    <Stack sx={componentStyle.componentsContainer}>
      <Box sx={{ cursor: "pointer" }}>
        <DragDropIcon />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={componentStyle.formCondentContainer}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Autocomplete
              sx={componentStyle.shopSelectStyle}
              isOptionEqualToValue={(option: any, value: any) =>
                option.label === value.label
              }
              getOptionLabel={(option: any) => option.label}
              options={componentsList}
              value={{
                label: componentVal?.label ? componentVal?.label : "",
                value: componentVal?.id ? componentVal?.id : "",
              }}
              disabled={isDisabledSelect}
              defaultValue={{}}
              onChange={handleSelectComponent}
              popupIcon={<DownArrowIcon />}
              clearIcon={<></>}
              ListboxProps={{
                sx:{fontSize:"1.4rem"}
              }}
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  label=""
                  placeholder="Select"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        {renderIcon(componentVal?.id)}
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            {showMandatory && (
              <Checkbox
                id={"Checkbox_i"}
                size={"medium"}
                label={"Mark as mandatory field"}
                icon={<EmptyCheckedIcon />}
                checkedIcon={<CheckedWithTick />}
                labelStyle={componentStyle.labelStyle}
                checked={isMandatory}
                onChange={(e) => setHandleMandatory(e)}
                indeterminate={false}
                sx={{ ml: 3 }}
              />
            )}
          </Box>
          {isDelete && (
            <IconButton onClick={handleDeleteComponets}>
              <DeleteIcon />
            </IconButton>
          )}
        </Box>
        <Box mt={"20px"}>{childrenComponents}</Box>
      </Box>
    </Stack>
  );
};

export default ComponentLayout;

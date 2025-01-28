import { Grid, Stack, SxProps, Typography } from "@mui/material";
import InputFeildComponent from "@pages/brandCreateWebForm/components/inputFeild";
import { broadcastMsgStyle } from "../style";

import { useBroadCastMessage } from "@core/store/brand-app";
import { BasicButton } from "@crayond_dev/ui_basic-button";
import { Search } from "@crayond_dev/ui_search";
import Templats from "./templats";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ChooseTemplate = ({ count }) => {
  const { broadCasteState, setSelectTemplates, error, setHandleSearch, getTemplateList } = useBroadCastMessage();
  const { templatesList } = broadCasteState

  const navigate = useNavigate()

  const handleChooseTemplate = (val: boolean, item: any) => {

    const tempJson = templatesList?.map((list: any) => {
      // Check if the current list item matches the selected item
      if (list.id === item?.id) {
        // Return a new object with the select property updated
        return { ...list, select: val };
      } else {
        // Return a new object with the select property set to false
        return { ...list, select: false };
      }
    });
    setSelectTemplates('templatesList', tempJson);

    const tempJsonObj = templatesList?.find((list: any) => {
      if (list.id === item?.id) {
        list.select = val;
        return true;
      } else {
        list.select = false;
      }
      return false;
    });
    setSelectTemplates('templates', tempJsonObj);

  };


  const redirectToNewTempalte = () => {
    navigate('/marketing/create-template')
  }

  useEffect(() => {
    if (broadCasteState?.id?.length > 0) {
      const tempJsonObj = templatesList?.find((list: any) => {
        if (list?.select === true) {
          return list;
        }
      });
      setSelectTemplates('templates', tempJsonObj);
    }
  }, [templatesList]);

  useEffect(() => {
    if (count === false) {
      const handler = setTimeout(() => {
        getTemplateList(1)
      }, 1000);

      return () => {
        clearTimeout(handler);
      };
    }
  }, [broadCasteState?.search]);

  useEffect(() => {
    if (count === false) {
      const fetchData = async () => {
        await getTemplateList(1);
      };
      fetchData();
    }
  }, []);


  return (
    <>
      <Stack>
        <Typography sx={broadcastMsgStyle.sublabelStyle}>
          Basic information
        </Typography>
        <InputFeildComponent
          inputValue={broadCasteState?.selectTemplates?.broadcastName}
          labelName={"Broadcast Name"}
          handleInputChange={(val) => setSelectTemplates("broadcastName", val)}
          sx={broadcastMsgStyle.inputSx as any}
          error={error?.broadcastName?.length ? true : false}
          errorMessage={error?.broadcastName}
          isErrorRequired={error?.broadcastName?.length ? true : false}

        />
      </Stack>
      <Stack mt={2}>
        <Typography sx={broadcastMsgStyle.sublabelStyle}>
          Choose template
        </Typography>
        <Grid container sx={broadcastMsgStyle.gridContainer} mt={"1.2rem"}>
          <Grid item md={8} lg={9.8}>
            <Search
              value={broadCasteState?.search ?? ''}
              variant={"isSearchInput"}
              inputWidth="100%"
              minExpandWidth="100%"
              placeHolderText="Search by template name"
              placeHolderSize={14}
              placeHolderColor="#4E585E"
              onSelectSearchDataFun={() => false}
              handleOptionChange={() => false}
              handleInputOnChange={(e) => setHandleSearch(e?.target?.value)}
              inputBorderHoverColor="#D9DBDD"
              inputBorderDefaultColor="#D9DBDD"
              inputBorderFocusColor="#D9DBDD"
              rootStyle={broadcastMsgStyle.searchTemplateStyle}
            />
          </Grid>
          <Grid item md={3.8} lg={2}>
            <BasicButton
              variant="outlined"
              sx={broadcastMsgStyle.outlineButonStyle}
              onClick={redirectToNewTempalte}
            >
              Add new template
            </BasicButton>
          </Grid>
        </Grid>
      </Stack>
      <Stack mt={"1.2rem"}>
        <Grid container gap={"1rem"}>
          {templatesList &&
            templatesList?.length > 0 &&
            templatesList?.map((item: any, i: number) => (
              <Grid item md={3.8} lg={3.5} key={i}>
                <Templats
                  title={item?.title}
                  status={item?.status}
                  select={item?.select}
                  chats={item?.chats}
                  setHandleSelect={(val) => handleChooseTemplate(val, item)}
                />
              </Grid>
            ))}
        </Grid>
      </Stack>
    </>
  );
};

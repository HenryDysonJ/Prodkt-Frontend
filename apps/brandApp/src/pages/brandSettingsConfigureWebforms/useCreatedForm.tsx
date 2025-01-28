import { TopBar } from "@core/ui/components";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { configureWebformStyle } from "./style";
import { useBrandWebForm, useModuleMasters } from "@core/store/brand-app";
import { renderPreviewComponents } from "@pages/brandCreateWebForm/components/previewComponents";
import { brandRoutes } from "@core/routes";

export const UseCreatedForm = () => {
  const {
    updateComponents,
    isLoading,
    setValueHandlePreviewForms,
    clearAll,
    setLoading,
  } = useBrandWebForm();
  const { addModuleListDatas, setWebFormId } = useModuleMasters();

  const navigate = useNavigate();
  const { state } = useLocation();

  const handleSubmit = async () => {
    setLoading(true);
    const res: any = await addModuleListDatas(
      state?.id,
      state?.formCategoryId,
      updateComponents
    );
    if (res === 200) {
      setWebFormId(state?.id);
      clearAll();
      navigate(`/support/${state?.id}`);
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const backBtnFunc = () => {
    navigate(-1);
    clearAll();
  };

  return (
    <Stack>
      <TopBar
        title={state?.formName}
        backBtn={true}
        backBtnFunc={() => backBtnFunc()}
        containButtonText={
          isLoading ? (
            <CircularProgress size={20} sx={{ color: "#ffff" }} />
          ) : (
            ("Save" as any)
          )
        }
        outlineButtonText="Cancel"
        rootStyle={{ zIndex: 9 }}
        handleClickOutlineButton={() => backBtnFunc()}
        handleClickContainButton={handleSubmit}
      />
      <Stack>
        <Stack sx={configureWebformStyle.containerStyle}>
          <Typography sx={configureWebformStyle.titleStyle}>
            Fill Webform
          </Typography>

          {updateComponents && updateComponents?.length !== 0 && (
            <Box mt={2}>
              {updateComponents?.map((item) =>
                renderPreviewComponents(item, setValueHandlePreviewForms)
              )}
            </Box>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

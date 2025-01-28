import { UploadIconBlue } from "@assets/brandAssets/uploadIcon";
import { useTemlateStore } from "@core/store/brand-app";
import { UploadFiles } from "@core/utils";
import { FileUpload } from "@crayond_dev/ui_file-upload";
import { InputField } from "@crayond_dev/ui_input-field";
import { RadioButton } from "@crayond_dev/ui_radio-button";
import { Avatar, Box, MenuItem, Typography } from "@mui/material";
import { createTemplateStyle } from "./style";
import DeleteRoundIcon from "@assets/brandAssets/deleteRoundIcon";

const sortData = [
  {
    label: "Text",
    value: "text",
  },
  {
    label: "File/ Image",
    value: "fileImage",
  },
  {
    label: "None",
    value: "none",
  },
];

export const Header = () => {
  const { templateJson, setHeader, setHandleTypeValue, viewType } = useTemlateStore();

  const handleImageUpload = async (file: any) => {
    const files = file?.target?.files[0];
    const image = await UploadFiles([files], "fileName");
    setHeader("value", image[0]?.url);
  };

  return (
    <>
      <Box sx={createTemplateStyle.basicInfoRoot} mt={2}>
        <Typography sx={createTemplateStyle.title}>Header</Typography>
        <Typography sx={createTemplateStyle.subtitle} mt={1.5}>
          Highlight your message by adding text or image
        </Typography>
        <Box sx={{ display: "flex", mt: 1 }}>
          {sortData?.map((e, index) => (
            <MenuItem key={index} sx={createTemplateStyle.menuItemSx}>
              <RadioButton
                buttonRootStyle={{ p: 0 }}
                activeBtnColor="#1363DF"
                onChange={() => setHeader("type", e.value)} // Changed to pass value
                radioBtnSize={22}
                checked={templateJson?.header?.type === e?.value} // Checked based on selectedValue
                label={e.label}
                icon={undefined}
                handleChange={() => undefined}
                value={undefined}
                checkedIcon={undefined}
                rootButtonId={""}
                defaultBtnColor={""}
                labelRootStyle={null}
                labelFontColor={""}
                labelFontSize={""}
                labelPlacement={undefined}
                disabled={viewType === 'view' ? true : false}
              />
            </MenuItem>
          ))}
        </Box>

        {templateJson?.header?.type === "text" && (
          <InputField
            variant="filled"
            label="Type here"
            placeholder="Type here"
            fullWidth
            onChange={(e) => setHeader("value", e.target.value)}
            value={
              templateJson?.header?.type === "text"
                ? templateJson?.header?.value
                : ""
            }
            isErrorRequired={false}
            inputStyle={createTemplateStyle.inputStyle}
            sx={createTemplateStyle.inputSxStyle}
            labelStyle={createTemplateStyle.labelStyle}
            errorStyle={{ fontSize: "1.0rem" }}
            disabled={viewType === 'view' ? true : false}
          />
        )}

        {templateJson?.header?.value?.length > 40 ?
          <>
            <Box sx={createTemplateStyle.imageBox}>
              <Avatar
                sx={createTemplateStyle.avatarSx}
                src={templateJson?.header?.value ?? ""}
              />
              <Box
                sx={createTemplateStyle.deleteSx}
                onClick={() => setHandleTypeValue()}
              >
                <DeleteRoundIcon />
              </Box>
            </Box>
          </>
          :
          (templateJson?.header?.type === "fileImage" &&
            <FileUpload
              variant={3}
              onClickUpload={(file) => handleImageUpload(file?.event)}
              selectedFile={[]}
              selectedFileUrl={
                templateJson?.header?.type === "fileImage"
                  ? templateJson?.header?.value
                  : ""
              }
              TotalFileSelected={[]}
              isMultiple={false}
              maxSize={"3MB"}
              removeIcon={<></>}
              allowedTypes={["jpg", "png"]}
              fileSizeErrorMsg={"File size is exceeded 3MB"}
              errorMsgStyle={{ color: "red" }}
              errorStyle={{ color: "red" }}
              fileTypeErrorMsg={"File type not suported"}
              uploadButtonText={"Upload"}
              uploadButtonStyle={createTemplateStyle.uploadButtonSx}
              cardStyle={createTemplateStyle.cardStyle}
              placeHolder={"Drag and drop file here"}
              placeHolderStyle={createTemplateStyle.placeHolderStyle}
              isOrPlaceholder
              // bottomRenderComponent={<>{"Max file size-3 MB"}</>}
              bottomRenderComponentStyle={
                createTemplateStyle.bottomRenderComponentStyle
              }
              bottomTextLabel={"JPG, PNG, PDF only"}
              // bottomTextLabelStyle={createTemplateStyle.bottomTextLabelStyle}
              startIcon={<UploadIconBlue />}
              showUploadFile={true}
              rootStyle={createTemplateStyle.bannerComponentContainer}
              setTotalFileSelected={() => undefined}
              deleteUploadFile={setHandleTypeValue}
            />
          )}
      </Box>
    </>
  );
};

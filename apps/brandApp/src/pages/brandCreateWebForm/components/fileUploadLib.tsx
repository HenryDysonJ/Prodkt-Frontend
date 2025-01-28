import { FileUpload } from "@crayond_dev/ui_file-upload";
import { useState } from "react";
import UploadDocumentIcon from "../../../assets/uploadIcon";
import { webFormStyle } from "../style";

const FileUploadLib = (props: any) => {
  const { selectedFileUrl, onImgUpload } = props;
  const [totalFileSelected, setTotalFileSelected] = useState<any[]>([]);
console.log(selectedFileUrl);

  return (
    <>
      <FileUpload
        variant={3}
        TotalFileSelected={totalFileSelected}
        setTotalFileSelected={setTotalFileSelected}
        onClickUpload={(file: any) => onImgUpload(file?.event)}
        isMultiple={false}
        maxSize={"1MB"}
        removeIcon={<></>}
        allowedTypes={["jpg", "jpeg", "png", "svg", "pdf"]}
        fileSizeErrorMsg={"File size is exceeded 1MB"}
        errorMsgStyle={{ color: "red" }}
        errorStyle={{ color: "red" }}
        fileTypeErrorMsg={"File type not allowed types"}
        uploadButtonText={"Upload"}
        uploadButtonStyle={webFormStyle.uploadButtonStyle}
        cardStyle={webFormStyle.cardStyle}
        placeHolder={"Drag and drop your file here"}
        placeHolderStyle={webFormStyle.placeHolderStyle}
        isOrPlaceholder
        bottomRenderComponent={<>{"Max file size-3 MB"}</>}
        bottomRenderComponentStyle={webFormStyle.bottomRenderComponentStyle}
        bottomTextLabel={"JPG, PNG, PDF only"}
        bottomTextLabelStyle={webFormStyle.bottomTextLabelStyle}
        startIcon={<UploadDocumentIcon />}
        showUploadFile={true}
        selectedFileUrl={selectedFileUrl}
        rootStyle={{ ...webFormStyle.bannerComponentContainer, mb: 2 }}
      />
    </>
  );
};

export default FileUploadLib;

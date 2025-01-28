import DeleteIcon from "@assets/brandAssets/delete";
import { BasicButton } from "@crayond_dev/ui_basic-button";
import { DialogBox } from "@crayond_dev/ui_dialog";
import { Box, Stack, SxProps, Typography } from "@mui/material";
import React, { CSSProperties } from "react";
import { DeleteDialogStyle } from "./style";

interface DeleteDialogProps {
  open: boolean;
  handleClose: () => void;
  title?: string;
  titleVariant?: string;
  maxWidth?: false | "xs" | "sm" | "md" | "lg" | "xl";
  closeIcon?: boolean;
  bodyText?: string;
  subText?: string;
  cancelButtonText?: string;
  saveButtonText?: string;
  onCancel?: () => void;
  onDelete?: () => void;
  subtextStyle?: SxProps;
}

export const DeleteDialog: React.FC<DeleteDialogProps> = ({
  open,
  handleClose,
  title = "",
  titleVariant = "inherit",
  maxWidth = "sm",
  closeIcon = false,
  bodyText = "Save form as draft?",
  subText = "",
  cancelButtonText = "Cancel",
  saveButtonText = "Delete",
  onCancel,
  onDelete,
  subtextStyle,
}) => {
  const handleCancel = () => {
    handleClose();
    if (onCancel) onCancel();
  };

  const handleDelete = () => {
    handleClose();
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <DialogBox
      title={title}
      open={open}
      handleClose={handleClose}
      titleVariant={titleVariant}
      maxWidth={maxWidth}
      titleStyle={{ display: "none" }}
      closeIcon={closeIcon}
      sx={{
        backgroundColor: "red !important",
      }}
      dialogBodyStyle={DeleteDialogStyle.mismatchDialog}
      dialogmodalBoxStyle={DeleteDialogStyle.mismatchDialogBodySx}
      Body={
        <>
          <Stack sx={DeleteDialogStyle.mismatchBodyContainer}>
            <Box sx={DeleteDialogStyle.warnigIconStle}>
              <DeleteIcon />
            </Box>
            <Typography sx={DeleteDialogStyle.breakdownTitle}>
              {bodyText}
            </Typography>
            <Typography
              textAlign={"center"}
              mt={"1rem"}
              sx={DeleteDialogStyle.stockInKeyText}
            >
              Are you sure want to delete the{" "}
              <span style={{ ...subtextStyle } as CSSProperties}>
                {subText}
              </span>
            </Typography>
            <Stack direction={"row"} gap={2} mt={"2.4rem"}>
              <BasicButton
                sx={{
                  ...DeleteDialogStyle.missMatchButtonStyle,
                  borderColor: "custom.surfaceBlue",
                }}
                variant="outlined"
                onClick={handleCancel}
              >
                {cancelButtonText}
              </BasicButton>

              <BasicButton
                sx={{
                  ...DeleteDialogStyle.missMatchButtonStyle,
                  ":hover": {
                    backgroundColor: "custom.surfaceBlue",
                  },
                  backgroundColor: "custom.surfaceBlue",
                }}
                variant="contained"
                rootSx={{ width: "100%" }}
                onClick={handleDelete}
              >
                {saveButtonText}
              </BasicButton>
            </Stack>
          </Stack>
        </>
      }
    />
  );
};

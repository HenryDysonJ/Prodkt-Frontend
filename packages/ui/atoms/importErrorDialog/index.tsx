import React, { CSSProperties, useState } from "react";
import { DialogBox } from "@crayond_dev/ui_dialog";
import { DeleteDialogStyle } from "./style";
import DeleteIcon from "@assets/brandAssets/delete";
import { Box, Stack, SxProps, Typography } from "@mui/material";
import { BasicButton } from "@crayond_dev/ui_basic-button";
import Triangle from "@assets/brandAssets/triangle";

interface DialogProps {
    open: boolean;
    handleClose: () => void;
    title?: string;
    titleVariant?: string;
    maxWidth?: string;
    closeIcon?: boolean;
    bodyText?: string;
    subText?: string;
    hrefSave?: string;
    hrefCancel?: string;
    cancelButtonText?: string;
    saveButtonText?: string;
    onCancel?: () => void;
    onDelete?: () => void;
    subtextStyle?: SxProps
    btnWidth?: string
}


export const ErrorDialog: React.FC<DialogProps> = ({
    open,
    handleClose,
    title = "",
    titleVariant = "inherit",
    maxWidth = "sm",
    closeIcon = false,
    bodyText = "",
    subText = '',
    cancelButtonText = "Cancel",
    saveButtonText = "Delete",
    onCancel,
    onDelete,
    subtextStyle,
    btnWidth,
    hrefSave,
    hrefCancel
}) => {
    const handleCancel = () => {
        handleClose();
        if (onCancel) onCancel();
    };

    const handleDelete = () => {
        handleClose();
        if (onDelete) onDelete();
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
                backgroundColor: "red !important"
            }}
            dialogBodyStyle={DeleteDialogStyle.mismatchDialog}
            dialogmodalBoxStyle={DeleteDialogStyle.mismatchDialogBodySx}
            Body={
                <>
                    <Stack sx={DeleteDialogStyle.mismatchBodyContainer}>
                        <Box sx={DeleteDialogStyle.warnigIconStle}>
                            <Triangle />
                        </Box>
                        <Typography sx={DeleteDialogStyle.breakdownTitle}>
                            {bodyText}
                        </Typography>
                        <Typography
                            textAlign={"center"}
                            mt={"1rem"}
                            sx={{ ...DeleteDialogStyle.stockInKeyText, ...subtextStyle }}
                        >
                            {subText}
                        </Typography>
                        <Stack direction={"row"} gap={2} mt={"2.4rem"}>
                            <BasicButton
                                sx={{
                                    ...DeleteDialogStyle.missMatchButtonStyle,
                                    borderColor: "custom.surfaceBlue",
                                    width: btnWidth,
                                } as SxProps}
                                variant="outlined"
                                onClick={handleCancel}
                                href={hrefCancel}
                            >
                                {cancelButtonText}
                            </BasicButton>

                            <BasicButton
                                sx={{
                                    ...DeleteDialogStyle.missMatchButtonStyle,
                                    width: btnWidth,
                                    ":hover": {
                                        backgroundColor: "custom.surfaceBlue"
                                    },
                                    backgroundColor: "custom.surfaceBlue"
                                } as SxProps}
                                variant="contained"
                                rootSx={{ width: "100%" }}
                                onClick={handleDelete}
                                href={hrefSave}
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


import type { SxProps, Theme } from '@mui/material';
import { Box, Button, ClickAwayListener, Menu, MenuItem, Stack, Tooltip, Typography } from '@mui/material';
import { forwardRef } from 'react';
import { tooltipStyle } from './style';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

export interface TooltipProps {
    handleView: () => void;
    handleTooltipClose: () => void;
    open?: void;
    btnText?: string;
}

export const TooltipComp = forwardRef((props: TooltipProps, ref: React.Ref<HTMLElement>): JSX.Element => {
    const {
        handleView,
        open,
        handleTooltipClose,
        btnText, } = props
    return (
        <Menu
            open={open}
            onClose={handleTooltipClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            sx={{
                right: '28px',
                '& .MuiPaper-root': {
                    width: '110px',
                    boxShadow: '0px 8px 12px #00000014',
                    padding: '0',
                    top: '410px !Important',
                    height: '50px'
                },
                '& .MuiList-root': {
                    paddingTop: '0px',
                    paddingBottom: '0px',
                    width: '100%',
                    '& li': {
                        width: '100%',
                        background: 'white',
                        height: '45px',
                        '& p': {
                            width: '100%'
                        }
                    }
                },
            }}
        >
            <MenuItem onClick={() => handleView()} id='viewProduct'>
                <Typography sx={tooltipStyle?.view}>
                    <RemoveRedEyeOutlinedIcon />
                    <Typography variant='span'>{btnText}</Typography>
                </Typography>
            </MenuItem>
        </Menu>
    );
});

TooltipComp.displayName = 'TooltipComp';

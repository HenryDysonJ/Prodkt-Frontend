import type { SxProps } from '@mui/material';
interface userManagementStyleProps {
    [key: string]: SxProps;
}

export const userManagementStyle: userManagementStyleProps = {

    rootSx: {
        background: '#fff',
        borderRadius: '8px',
        padding: '22px',
        width: '100%',
        height: '100%',
        overflow: 'auto',
    },
    titleSx: {
        color: '#0E1824',
        fontWeight: '600',
        fontSIze: '17px'
    },
    titleBoxSx: {
        width: '100%',
        borderBottom: '1px solid #E6EEFA',
        height: '100%',
        cursor: 'pointer'
    },
    collapseTitleSx: {
        width: '100%',
        '& p': {
            height: '100% !important',
            width: '100%',
            maxWidth:'243px',
            fontSize: '15px',
            color: '#262626',
            fontWeight: '600',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            '-webkit-line-clamp': '3',
            '-webkit-box-orient': 'vertical',
            overflow: 'hidden',
        }
    },
    iconSx: {
        borderRight: '1px solid #E6EEFA',
        width: 88,
        height: 88,
    },
    collapseLabelSx: {
        color: '#595959',
        fontSize: '13px',
        fontWeight: '600',
        textAlign: 'center',

    },
    collapseValueSx: {
        color: '#313840',
        fontSize: '15px',
        fontWeight: '600',
        textAlign: 'center',
        margin:'auto',
        maxWidth:'190px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',

    },
    collapseItemSx: {
        border: '1px solid #E6EEFA',
        borderRadius: '8px',
    },
    inputSx: {
        width: '340px',
        marginBottom: '0',
        '& input': {
            height: '37px',
            padding: '4px',
            paddingTop: '0px !important',
            paddingBottom: '0px !important',
            fontWeight: '500',
            fontSize: '15px',
            color: '#030911'
        },
        '& fieldset': {
            borderRadius: '8px',
        },
        '& div': {
            '& svg': {
                color: '#BCC3CC'
            }
        }
    },
    inputProductSx: {
        marginBottom: '0',
        border: 'none',
        '& input': {
            height: '41px',
            padding: '0px !Important',
            fontWeight: '500',
            fontSize: '15px',
            color: '#030911'
        },
        '& fieldset': {
            borderRadius: '8px',
        },
        '& div': {
            '& svg': {
                color: '#BCC3CC'
            }
        }
    },
    submitBtn: {
        height: '50px',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: '600',
        textTransform: 'capitalize',
        color: '#fff'
    }
};

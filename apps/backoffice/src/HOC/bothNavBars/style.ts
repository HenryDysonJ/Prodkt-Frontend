export const NavBarStyles = {
    root: {
        flexGrow: 1,
        height: "100vh",
        overflow: 'hidden',
        backgroundColor: "#F0F0F0",
    },
    topbarSx: {
        padding: '16px 20px',
        background: '#fff',
        boxShadow: '0px 2px 12px #00000014'
    },
    content: {
        width: "100%",
        height: 'calc(100vh - 75px)',
        "@media (max-width: 426px)": {
        },
    },
    subRootSx: {
        width: '250px',
        background: '#fff',
        '@media (max-width: 425px)': {
            width: '200px'
          },
    },
    listItemSx: {
        border: 'none',
        background: '#fff',
        cursor: 'pointer',
        padding: '16px 12px',
        '& p': {
            color: '#313840',
            fontSize: '15px',
            fontWeight: '600'
        }
    },
    listItemSelectedSx: {
        borderRight: '4px solid #0E70EB',
        cursor: 'pointer',
        padding: '16px 12px',
        background: '#E6EEFA',
        '& p': {
            color: '#0E70EB',
            fontSize: '15px',
            fontWeight: '600'
        }
    },
    rightLoginSx: {
        maxWidth: '250px',
        width: '200px'
    },
    adminName: {
        color: '#0E1824',
        fontSize: '14px',
        marginTop: '3px',
        fontWeight: '600'
    },
    adminText: {
        color: '#5C6266',
        fontSize: '12px',
        fontWeight: '500'
    },
    dividerSx: {
        background: '#F2F4F7',
        height: '30px',
        width: '2px',
    },
    childStackSx: {
        width: '130px',
        cursor: 'pointer'
    },
    menutext: {
        color: '#18283E',
        fontSize: '15px',
        fontWeight: '600'
    },
    listItemIconSx: {
        width: '10%'
    },
    listItemTextSx: {
        width: '74%'
    },
    listDropDownSx: {
        width: '10%'
    },
    componentBoxSx: {
        height: 'calc(100vh - 70px)',
        width: 'calc(100vw - 250px)',
        '@media (max-width: 425px)': {
            width: 'calc(100vw - 200px)',
          },
    }
}
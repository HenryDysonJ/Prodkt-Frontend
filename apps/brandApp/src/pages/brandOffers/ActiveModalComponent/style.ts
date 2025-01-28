export const ActiveModalStyle = {
    rootSx: {
        borderRadius: '8px',
        p: '0px 4px 4px 4px',
        backgroundColor: '#fff',
        //   mt: 3,
    },
    titleSx: {
        color: '#02111A',
        fontSize: '16px',
        fontWeight: 600,
        pb: 2,
        textAlign: 'center'
    },
    subtext: {
        color: '#4E585E',
        fontSize: '16px',
        fontWeight: 400,
        pb: 3,
        textAlign: 'center',
        fontFamily: 'Sarabun'
    },
    radioSx: {
        display: 'flex',
        gap: 5,
    },
    titleContainerSx: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dateInputStyle: {
        '& .MuiFilledInput-root': {
            'minHeight': '62px',
            ':focus': {
                '& .MuiFormLabel-root': {
                    marginTop: '0px',
                    color: 'red',
                },
            },
        },
        '.MuiFilledInput-root.Mui-disabled': {
            color: 'gray',
            backgroundColor: '#E6EAEB !important',
            borderColor: '#E6EAEB',
        },
        '& .MuiFormLabel-root': {
            color: 'onSurfaceVariant',
            marginTop: '6px',
        },
    },
    dateCalenderStyle: {
        '.react-datepicker__day--disabled': {
            color: '#ccc !important',
        },
        '.react-datepicker__day': {
            padding: '10px 10.5px !important'
        },
        ".react-datepicker__day-names": {
            gap: '6px',
            display: 'flex',
            justifyContent: 'center',
        }
    },

    cancelButtonStyle: {
        'backgroundColor': 'custom.surfaceBright',
        'borderRadius': '8px',
        'minWidth': '80px',
        fontSize: '14px',
        textTransform: 'capitalize',
        'borderColor': 'custom.primary',
        ':hover': { backgroundColor: 'custom.surfaceBright', borderColor: 'custom.primary' },
    },
    doneButtonStyle: {
        'boxShadow': 'none',
        'backgroundColor': 'custom.primary',
        'borderRadius': '8px',
        'minWidth': '80px',
        fontSize: '14px',
        textTransform: 'capitalize',
        ':hover': { backgroundColor: 'primary.main', boxShadow: 'none' },
    },
    //   datePopoverStyle: {
    //     marginTop: '10px',
    //     borderRadius: ' 8px',
    //     minWidth: '314px',
    //     overflow: 'hidden',
    //     boxShadow: '0px -2px 32px 12px rgba(0, 0, 0, 0.08)',
    //     backgroundColor: '#f0f0f0',
    //   },
};
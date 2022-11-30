import * as React from 'react';
import sizes from "../sizes";
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: 'burlywood',
    },
});

export const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        fontSize: "16px",
        marginRight: theme.spacing(1),
        color: '#fff',
        '&.Mui-selected': {
            color: 'burlywood',
        },
        '&.Mui-focusVisible': {
            color: 'burlywood',
        },
        [sizes.down("xs")]: {
            '&:last-child': {
                marginBottom: '2rem'
            },
        }
    })
);
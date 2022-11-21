import * as React from 'react';
import './HomeTabs.css'
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material'

const StyledTabs = styled((props) => (
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

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
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
    }),
);
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function HomeTabs({ seedValues }) {
    const [value, setValue] = React.useState(0);
    const smallScreen = useMediaQuery("(max-width: 768px)");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{ width: '100%' }}>
            {smallScreen ?
                <Box sx={{ width: '100%' }}>
                    <Box
                        sx={{
                            flexGrow: 1,
                            bgcolor: 'transparent',
                            display: 'flex',
                            height: 300,
                            justifyContent: 'center',
                            alignItems: "center",
                        }}
                    >
                        <StyledTabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs"
                            sx={{
                                borderRight: 1,
                                borderColor: 'divider'
                            }}
                        >
                            {seedValues.map((item, i) => {
                                return <StyledTab
                                    label={item.itemName} {...a11yProps(i)} />;
                            })}
                        </StyledTabs>
                        {
                            seedValues.map((item, i) => {
                                return <TabPanel
                                    value={value}
                                    index={i}
                                    className='item-description'>
                                    {item.description}
                                </TabPanel>
                            })
                        }
                    </Box>
                </Box>
                :
                <Box sx={{
                    borderBottom: 1,
                    borderColor: 'divider'
                }}>
                    <StyledTabs
                        value={value}
                        onChange={handleChange}
                        aria-label='basic tabs'
                        centered
                    >
                        {seedValues.map((item, i) => {
                            return <StyledTab
                                label={item.itemName} {...a11yProps(i)} />;
                        })}
                    </StyledTabs>
                    {
                        seedValues.map((item, i) => {
                            return <TabPanel
                                value={value}
                                index={i}
                                className='MuiBox-root'>
                                {item.description}
                            </TabPanel>
                        })
                    }
                </Box>
            }
        </div>
    );
}
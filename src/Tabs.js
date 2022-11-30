import * as React from 'react';
import NutritionCategory from './NutritionCategory';
import SleepCategory from './SleepCategory';
import CommunityCategory from './CommunityCategory';
import NatureCategory from './NatureCategory';
import PurposeCategory from './PurposeCategory';
import SunlightCategory from './SunlightCategory';
import ExerciseCategory from './ExerciseCategory';
import Accordions from './Accordions'
import { useMediaQuery } from '@mui/material'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { StyledTabs } from './styles/TabsStyles';
import { StyledTab } from './styles/TabsStyles';
import './Tabs.css';

export function TabPanel(props) {
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
                <Box sx={{ p: 3, textAlign: 'center' }}>
                    <Typography sx={{
                        display: 'flex',
                        width: '90%',
                        paddingLeft: '113px'
                    }}>{children}</Typography>
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

export default function Tabs() {
    const [value, setValue] = React.useState(0);
    const smallScreen = useMediaQuery("(max-width: 860px)");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            {smallScreen ?
                <div>
                    <Accordions />
                </div>
                :
                <Box sx={{ width: '100%' }}>
                    <Box sx={{
                        borderBottom: 1,
                        borderColor: 'divider',
                    }}>
                        <StyledTabs
                            value={value}
                            onChange={handleChange}
                            aria-label='basic tabs'
                            centered
                        >
                            <StyledTab label='sleep' {...a11yProps(0)} />
                            <StyledTab label='nutrition' {...a11yProps(1)} />
                            <StyledTab label='exercise' {...a11yProps(2)} />
                            <StyledTab label='community' {...a11yProps(3)} />
                            <StyledTab label='sunlight' {...a11yProps(4)} />
                            <StyledTab label='purpose' {...a11yProps(5)} />
                            <StyledTab label='nature' {...a11yProps(6)} />
                        </StyledTabs>
                    </Box>
                    <SleepCategory value={value} />
                    <NutritionCategory value={value} />
                    <ExerciseCategory value={value} />
                    <SunlightCategory value={value} />
                    <CommunityCategory value={value} />
                    <PurposeCategory value={value} />
                    <NatureCategory value={value} />
                </Box>
            }
        </>
    );
}